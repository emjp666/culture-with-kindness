# Culture with Kindness — Vercel deployment package

This is the exported Manus source with **static Vercel deployment** configured. The page is a React/Vite website. Its live landing page uses anchor navigation and email/telephone CTA links; there is no necessary backend for the landing page.

## Changes made
- Added `vercel.json` (Vite, `pnpm run build:static`, output `dist/public`).
- Copied five images/logos from `source-assets` to `client/public/assets`, so images no longer rely on Manus managed `/manus-storage/` paths.
- Updated `client/src/lib/assets.ts` to use these local paths.
- Replaced Manus-hosted social preview image references with a local asset path. For best social previews, change this to an absolute URL once you have a domain.
- Removed the unused Manus platform configuration script reference from `client/index.html`.
- Kept the original Express backend and full editable source as exported; Vercel's static deployment does **not** run that server, database, Manus OAuth, AI endpoints, or other backend services.

## IMPORTANT — missing brochure PDF
The original ZIP did **not** contain the PDF linked from both “Download programme brochure” buttons. Add the original PDF under this exact filename:

    client/public/assets/Culture-with-Kindness-Programme-Brochure.pdf

Until you add it, both brochure download buttons will result in a 404. Please do not publish without reviewing this outstanding issue.

## Deploy from GitHub to Vercel
1. Unzip the package and upload **all contents of this folder** to a new GitHub repository, maintaining their structure (the repo root should contain `package.json`, `pnpm-lock.yaml`, and `vercel.json`).
2. In Vercel choose Add New > Project, import the repository.
3. Framework: Vite. Root Directory: `./` (repository root). The `vercel.json` specifies the build settings.
4. Install Command: default auto-detected from `pnpm-lock.yaml` and `packageManager` (`pnpm@10.18.0`). If necessary override to `pnpm install --frozen-lockfile`.
5. Build Command: `pnpm run build:static`.
6. Output Directory: `dist/public`.
7. Deploy, then check all page images, links, download and mobile layout.

For a local build with Node.js 22 and pnpm 10.18.0:

    corepack enable
    pnpm install --frozen-lockfile
    pnpm run build:static

The above build has **not** been executed in this environment because project dependencies were not installed. Vercel will install them during deployment. If Vercel produces an error, use the deployment log to diagnose it.

## Backend note
The source includes an Express/tRPC/Drizzle starter and Manus platform helpers. They are not necessary for this currently static landing page and will not run on Vercel under this configuration. Additional serverless API adaptation and environment values would be needed if you later use login, database, or server-side AI functionality.
