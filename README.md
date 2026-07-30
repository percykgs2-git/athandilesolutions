# Athandile Solutions Website

Marketing website for Athandile Solutions, an IT consulting company offering web
development, SEO, cloud, and digital transformation services.

**Live site:** https://www.athandilesolutions.co.za

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [React Router](https://reactrouter.com/) for client-side routing
- [Supabase](https://supabase.com/) for the backend (Postgres + Edge Functions)
- [Mailgun](https://www.mailgun.com/) for transactional email (contact form)

## Project structure

```
src/
  pages/        Route-level pages (Index, About, Services, Portfolio, Careers, Clients, Contact, NotFound)
  components/   Shared components and shadcn/ui primitives (components/ui)
  hooks/        Reusable React hooks
  integrations/ Generated Supabase client and types
  assets/       Images used across the site
supabase/
  functions/    Edge Functions (send-contact-email)
  config.toml   Supabase project config
```

## Getting started

Requirements: Node.js 18+ and npm.

```sh
# 1. Clone the repository
git clone https://github.com/percykgs2-git/athandilesolutions.git
cd athandilesolutions

# 2. Install dependencies
npm install

# 3. Copy the env template and fill in your values (see below)
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Other scripts:

```sh
npm run build       # production build
npm run build:dev    # development-mode build (useful for debugging)
npm run preview     # preview the production build locally
npm run lint         # run ESLint
```

## Environment variables

Copy `.env.example` to `.env` and fill in the values. `.env` is git-ignored and
should never be committed — see `.env.example` for the full list and notes on
which variables are safe to expose to the browser vs. which are server-only
secrets.

- `VITE_SUPABASE_URL`, `VITE_SUPABASE_PROJECT_ID`, `VITE_SUPABASE_PUBLISHABLE_KEY` —
  used by the frontend to connect to Supabase (`src/integrations/supabase/client.ts`).
  The publishable key is meant to be public and is safe in client-side code.
- `MAILGUN_API_KEY`, `MAILGUN_DOMAIN` (and optionally `MAILGUN_BASE_URL` for
  EU-region Mailgun accounts) — server-side secrets used only by the
  `send-contact-email` Supabase Edge Function. These must **never** be added to
  the frontend `.env` file or prefixed with `VITE_`.

## Contact form / email notifications

The Contact page (`src/pages/Contact.tsx`) submits enquiries to the
`send-contact-email` Supabase Edge Function
(`supabase/functions/send-contact-email/index.ts`), which:

1. Validates the submitted fields.
2. Sends a notification email to `info@athandilesolutions.co.za` with the
   enquiry details (reply-to set to the enquirer's email).
3. Sends an acknowledgement email back to the person who submitted the form.

Both emails are sent via the Mailgun HTTP API directly. To configure this in a
Supabase project, set the Edge Function secrets:

```sh
supabase secrets set MAILGUN_API_KEY=your-mailgun-api-key MAILGUN_DOMAIN=mg.yourdomain.com
```

Then deploy the function:

```sh
supabase functions deploy send-contact-email
```

## Deployment (Hostinger)

The site is a static Vite build and is hosted on Hostinger shared hosting under
the `athandilesolutions.co.za` domain purchased there.

1. **Set production env vars.** Make sure your local `.env` (or `.env.production`)
   has the correct `VITE_SUPABASE_*` values — these get baked into the JS bundle
   at build time, so update them *before* building.
2. **Build.**
   ```sh
   npm run build
   ```
   This produces a `dist/` folder containing `index.html`, hashed JS/CSS
   assets, and everything from `public/` (including `.htaccess`, which is
   required — see below).
3. **Upload to Hostinger.**
   - Log in to [hPanel](https://hpanel.hostinger.com/) → **Websites** → your
     domain → **File Manager** (or connect via FTP/SFTP using the credentials
     under **Advanced → FTP Accounts**).
   - Open the `public_html` folder for `athandilesolutions.co.za`.
   - Delete any placeholder/default files Hostinger put there (e.g. a default
     `index.html`), then upload the **contents** of `dist/` (not the `dist`
     folder itself) into `public_html`, so `index.html` sits directly inside it.
4. **SPA routing.** `public/.htaccess` (now included in every build) rewrites
   unknown paths to `index.html` so routes like `/services` or `/contact` work
   on direct load/refresh, and forces HTTPS. Hostinger's Apache stack respects
   `.htaccess` out of the box — no extra config needed.
5. **Domain & SSL.** If the domain and hosting plan are both in the same
   Hostinger account, the domain is usually already pointed at that hosting —
   check **Domains → athandilesolutions.co.za → DNS / Nameservers** to confirm.
   Then go to **Websites → SSL** and issue the free Let's Encrypt certificate
   for the domain so HTTPS works.
6. **Redeploying updates.** There's no CI/CD wired up, so after future code
   changes: `npm run build` locally, then re-upload the new `dist/` contents
   (overwrite `public_html`).

The Supabase Edge Function (`send-contact-email`) is separate from this static
hosting — it runs on Supabase's infrastructure, not Hostinger. Deploy/update it
via the Supabase CLI as shown in the section above whenever it changes.


## Connect to Supabase locally

# Install/run the Supabase CLI (installs on first use if not already present)
npx supabase login

# Link this repo to your Supabase project (already set correctly in supabase/config.toml)
npx supabase link --project-ref qszkcxdgbntsnyxpphjf

# Confirm both Mailgun secrets are actually there
npx supabase secrets list

# Deploy the function code
npx supabase functions deploy send-contact-email

# Confirm it's live
npx supabase functions list