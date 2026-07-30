import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

// Recipient that receives every enquiry submitted through the Contact page.
const ADMIN_EMAIL = "info@athandilesolutions.co.za";

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().default(""),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(2000),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Mailgun credentials are configured as Supabase Edge Function secrets:
    //   supabase secrets set MAILGUN_API_KEY=... MAILGUN_DOMAIN=...
    const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");
    const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN");
    // Mailgun EU-region accounts must use api.eu.mailgun.net instead.
    const MAILGUN_BASE_URL = Deno.env.get("MAILGUN_BASE_URL") ?? "https://api.mailgun.net";

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      console.error("Mailgun is not configured: missing MAILGUN_API_KEY or MAILGUN_DOMAIN");
      return new Response(
        JSON.stringify({ error: "Email sending is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const { name, email, phone, subject, message } = parsed.data;

    const from = `Athandile Solutions <no-reply@${MAILGUN_DOMAIN}>`;

    const adminHtml = `
      <h2>New contact enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    const userHtml = `
      <h2>Thank you for contacting Athandile Solutions</h2>
      <p>Hi ${escapeHtml(name)},</p>
      <p>We've received your message and one of our team members will get back to you shortly.</p>
      <p><strong>Your message:</strong></p>
      <blockquote>${escapeHtml(message).replace(/\n/g, "<br/>")}</blockquote>
      <p>Kind regards,<br/>Athandile Solutions</p>
    `;

    // Sends an email via Mailgun's HTTP API directly (no third-party gateway).
    // https://documentation.mailgun.com/en/latest/api-sending.html#sending
    const send = async (payload: Record<string, string>) => {
      const auth = btoa(`api:${MAILGUN_API_KEY}`);
      const response = await fetch(`${MAILGUN_BASE_URL}/v3/${MAILGUN_DOMAIN}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${auth}`,
        },
        body: new URLSearchParams(payload),
      });
      if (!response.ok) {
        const details = await response.text();
        console.error(`Mailgun send failed [${response.status}]: ${details}`);
        throw new Error(`[${response.status}]: ${details}`);
      }
      return await response.json();
    };

    // 1. Notify Athandile Solutions of the new enquiry.
    await send({
      from,
      to: ADMIN_EMAIL,
      "h:Reply-To": email,
      subject: `New enquiry: ${subject}`,
      html: adminHtml,
    });

    // 2. Send an acknowledgement email back to the person who enquired.
    await send({
      from,
      to: email,
      subject: "We received your message — Athandile Solutions",
      html: userHtml,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-contact-email error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
