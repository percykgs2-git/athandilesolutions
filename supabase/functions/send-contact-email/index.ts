import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/mailgun";
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
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const MAILGUN_CONNECTION_KEY = Deno.env.get("MAILGUN_API_KEY") ??
      Deno.env.get("MAILGUN_CONNECTION_KEY");
    const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN") ??
      "sandbox63fe3f60db3e4e89a5155aac75c4865d.mailgun.org";

    if (!LOVABLE_API_KEY || !MAILGUN_CONNECTION_KEY) {
      return new Response(
        JSON.stringify({ error: "Mailgun connection is not configured" }),
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

    const send = async (payload: Record<string, string>) => {
      const response = await fetch(`${GATEWAY_URL}/${MAILGUN_DOMAIN}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": MAILGUN_CONNECTION_KEY,
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

    await send({
      from,
      to: ADMIN_EMAIL,
      "h:Reply-To": email,
      subject: `New enquiry: ${subject}`,
      html: adminHtml,
    });

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
