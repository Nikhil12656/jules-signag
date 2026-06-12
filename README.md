# Digital Signage SaaS Platform

A production-grade, multi-tenant digital signage platform built with Next.js 15, Supabase, and Expo.

## Architecture Overview

- **Frontend:** Next.js 15 (App Router), Tailwind CSS v4, Lucide Icons.
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Realtime, Edge Functions).
- **Security:** Multi-tenant isolation using Supabase Row Level Security (RLS).
- **Players:** Web Player (browser-based) and Android Player (Expo/React Native).

## Repository Structure

- `/web` - The Next.js SaaS dashboard, landing page, and web player.
- `/android` - The Expo/React Native Android kiosk application.
- `/supabase` - Database migrations, RLS policies, and setup documentation.

## Running the Web Application (Next.js)

1. Navigate to the web directory:
   ```bash
   cd /app/web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   Copy `.env.example` to `.env.local` and fill in your Supabase credentials.
4. Start the development server:
   ```bash
   npm run dev
   ```
5. The application will be available at `http://localhost:3000`.

## Running the Android Player (Expo)

1. Navigate to the android directory:
   ```bash
   cd /app/android
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npm start
   ```
4. Use the Expo Go app on your physical device to scan the QR code, or run it on an Android Emulator by pressing `a` in the terminal.

## Backend Setup (Supabase)

Please refer to `/app/supabase/SETUP.md` for detailed instructions on provisioning the database, configuring Auth, and running the provided SQL migrations to enable multi-tenancy.

## UI Customization & CMS Components

The web application includes a suite of reusable UI components located in `/app/web/src/components/ui/` (e.g., `Button`, `Card`) and `/app/web/src/components/cms/` (e.g., `DataTable`).
To maintain a professional UI standard, utilize these components when building new dashboard modules.
