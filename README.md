# Juris Partners

Professional-facing Juris website for independent advisers, advisory firms and other professional collaborators. It includes adviser-network interest, public Juris research links and separately scoped Juris Control operational examples.

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

## Professional enquiries

The shared contact form posts to `/api/demo-requests`. `/advisers#apply` uses the specific `adviser-network` intent; ordinary collaboration, research and workflow enquiries remain available. A successful response requires acknowledged storage in every environment. Without a configured destination, the page identifies delivery as unavailable and the handler returns 503.

```text
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_DEMO_REQUESTS_TABLE=demo_requests
```

The service-role key must only be configured as a server-side environment variable.

The optional professional-register link is included in the existing message column. No new database column was added. Confirm that the deployed table accepts the new interest value before publication. Tests mock storage and never send real enquiries.

## Review and verification

See [the adviser-network review](docs/juris-adviser-network-review.md) for the benefits/status register, publication decisions, proposed public-site navigation change and test evidence. The current website preserves all supporting pages and the existing simulations. No public adviser directory or membership approval backend is implemented.

## Discovery

The site includes canonical metadata, JSON-LD, `robots.txt`, `sitemap.xml`, `/llms.txt` and `/llms-full.txt`.

## Professional boundary

Juris Control supports matter reconstruction, readiness, blockers, dependencies and professional-review preparation. Firms retain professional advice and delivery. Adviser-network interest is not acceptance, accreditation or a service commitment.
