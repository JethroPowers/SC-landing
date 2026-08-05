# Sovereignty Control

Multi-page B2B website for Sovereignty Control, an early-stage managed matter-readiness method for professional firms handling citizenship, residence, relocation and investment-migration matters.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run typecheck
npm run build
```

## Diagnostic enquiries

The contact form posts to `/api/demo-requests`. Development submissions are accepted without external storage. Production requires:

```text
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_DEMO_REQUESTS_TABLE=demo_requests
```

The service-role key must only be configured as a server-side environment variable.

## Discovery

The site includes canonical metadata, JSON-LD, `robots.txt`, `sitemap.xml`, `/llms.txt` and `/llms-full.txt`.

## Professional boundary

Sovereignty Control supports matter reconstruction, readiness, blockers, dependencies and advisor-review preparation. It does not provide legal, tax, immigration or investment advice.
