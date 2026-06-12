# Supabase Setup Guide

This guide explains how to set up the Supabase backend for the Digital Signage SaaS platform.

## 1. Create a Supabase Project
1. Log in to [Supabase](https://supabase.com).
2. Click "New Project", select your organization, give it a name (e.g., "Digital Signage"), and set a strong database password.
3. Wait for the database provisioning to complete.

## 2. Configure Authentication
1. Go to **Authentication > Providers**.
2. Enable Email provider.
3. Configure **Email Confirmations** to be enabled or disabled based on your preference for user onboarding. For production, enabling it is recommended.
4. Set the "Site URL" and "Redirect URLs" in **Authentication > URL Configuration** to match your Next.js application domains (e.g., `http://localhost:3000` for local dev).

## 3. Configure Email Verification
1. In **Authentication > Email Templates**, customize the "Confirm Signup" template.
2. The verification link should point to a callback route in your Next.js app (e.g., `{{ .SiteURL }}/auth/callback?code={{ .TokenHash }}`) which then exchanges the code for a session.

## 4. Create Storage Buckets
1. Go to **Storage**.
2. Create a new bucket named `assets`.
3. Set it to "Public" if you want screen players to easily access media, or keep it private and use signed URLs for enhanced security.
4. Add Storage Policies to allow authenticated users to upload and read assets for their respective workspaces.

## 5. Run Migrations
1. Install Supabase CLI: `npm i -g supabase`
2. Login: `supabase login`
3. Link your project: `supabase link --project-ref <your-project-ref>`
4. Push the schema to your remote database: `supabase db push`

Alternatively, you can copy the contents of `/supabase/migrations/001_initial_schema.sql` and run it in the Supabase SQL Editor.

## 6. Deploy Edge Functions
1. Initialize edge functions if not already: `supabase functions new my-function`
2. Write your logic in `/supabase/functions/`.
3. Deploy: `supabase functions deploy my-function`

## 7. Configure Environment Variables
In your Next.js `/app/web` folder, create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

You can find these values in **Project Settings > API**.

## 8. Configure Custom Domains
1. Go to **Project Settings > Custom Domains**.
2. Follow the instructions to set up a custom domain (e.g., `api.yourdomain.com`).
3. Update your Next.js environment variables to use the custom domain.

## 9. Enable Row Level Security (RLS)
RLS is already enabled and policies are defined in the `001_initial_schema.sql` migration.
This ensures that users can only access data belonging to their own workspace.

## 10. Production Deployment Instructions
1. Ensure all environment variables are securely set in your hosting provider (e.g., Vercel).
2. Set up a CI/CD pipeline to automatically run `supabase db push` on merge to main.
3. Ensure the Supabase project is on a paid plan for production scale and backups.
4. Monitor database performance and edge function logs via the Supabase dashboard.
