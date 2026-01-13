# Tech Stack

This document defines the technical stack for the Educational Marketplace platform. All technology choices align with the goal of rapid development, low operational costs, and scalability.

## Framework & Runtime

- **Application Framework:** Next.js 14 (App Router)
- **Language/Runtime:** TypeScript 5.x on Node.js
- **Package Manager:** pnpm

## Frontend

- **JavaScript Framework:** React 18+
- **CSS Framework:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Typography:** Being Grotesk (headings), Founders Grotesk (body text)
- **Icons:** Lucide React
- **Animations:** Framer Motion (for subtle transitions and interactions)
- **State Management:** React Context API + hooks (Zustand if needed for complex state)
- **Forms:** React Hook Form + Zod for validation

## Backend & API

- **Backend Service:** Supabase (PostgreSQL + Auth + Storage + Realtime)
- **API Layer:** Next.js API Routes + Server Actions
- **Database:** PostgreSQL (via Supabase)
- **ORM/Query Builder:** Supabase JS Client
- **File Storage:** Supabase Storage (for thumbnails, digital goods)
- **Authentication:** Supabase Auth (Email/Password + OAuth providers: Google)
- **Authorization:** Row-Level Security (RLS) policies in PostgreSQL

## Payments & Monetization

- **Payment Processing:** Stripe
- **Subscription Management:** Stripe Billing
- **Marketplace Payments:** Stripe Connect (Express Accounts)
- **Payout Model:** Facilitator model with split payments (10-15% platform fee)

## Video & Media

- **Video Hosting:** External (YouTube, Vimeo)
- **Video Embed:** YouTube IFrame API / Vimeo Player SDK
- **Video Progress Tracking:** Custom implementation using iframe APIs

## Email & Notifications

- **Email Service:** Resend or SendGrid
- **Email Templates:** React Email
- **Transactional Emails:**
  - Welcome emails
  - Enrollment confirmations
  - Purchase receipts
  - Course completion certificates
  - Expert notifications (new questions, reviews)

## Deployment & Infrastructure

- **Hosting:** Netlify
- **Serverless Functions:** Netlify Functions (for Stripe webhooks, async processing)
- **CDN:** Netlify Edge Network (automatic)
- **Domain & DNS:** Netlify DNS
- **SSL/TLS:** Automatic via Netlify
- **Environment Variables:** Netlify Environment Variables

## Development Tools

- **Version Control:** Git + GitHub
- **Code Editor:** VS Code (recommended)
- **Linting:** ESLint
- **Code Formatting:** Prettier
- **Type Checking:** TypeScript strict mode
- **Git Hooks:** Husky (optional, for pre-commit linting)

## Testing & Quality

- **Test Framework:** Jest + React Testing Library
- **E2E Testing:** Playwright (for critical flows: checkout, video player)
- **Component Testing:** Storybook (for UI component library)
- **Type Safety:** TypeScript + Zod schemas
- **API Testing:** Manual testing initially, automated later

## Monitoring & Analytics

- **Error Tracking:** Sentry (for production error monitoring)
- **Analytics:** Vercel Analytics or Plausible (privacy-focused)
- **Performance Monitoring:** Web Vitals tracking
- **Logging:** Netlify Function logs + Supabase logs

## Third-Party Integrations

### Phase 1 (MVP)

- **Stripe:** Payment processing and subscriptions
- **Supabase:** Backend-as-a-Service
- **YouTube/Vimeo:** Video hosting and embedding
- **Resend/SendGrid:** Transactional emails

### Phase 2 (Post-MVP)

- **PDF Generation:** @react-pdf/renderer or Puppeteer (for certificates)
- **File Upload:** Supabase Storage (for digital goods)

### Phase 3 (Future)

- **Printful:** Print-on-demand for physical books/materials
- **Shippo:** Shipping and fulfillment for physical goods
- **Algolia:** Advanced search (if native search insufficient)
- **Discord/Slack:** Community integration (optional)

## Database Schema Management

- **Migrations:** Supabase Database Migrations (SQL files)
- **Schema Version Control:** Git-tracked migration files
- **Local Development:** Supabase CLI with local PostgreSQL
- **Seeding:** Custom SQL scripts for development data

## Security & Compliance

- **Authentication Security:** Supabase Auth (JWT tokens, secure sessions)
- **Authorization:** Row-Level Security (RLS) policies
- **API Security:** Server-side validation, rate limiting (via Netlify)
- **Payment Security:** PCI compliance handled by Stripe (no card data stored)
- **Data Privacy:** GDPR-ready (user data export/deletion capabilities)
- **HTTPS:** Enforced via Netlify
- **Environment Secrets:** Netlify Environment Variables (encrypted)

## Development Workflow

1. **Local Development:**

   - Next.js dev server (`pnpm dev`)
   - Supabase local instance or staging project
   - Stripe test mode
   - Environment variables via `.env.local`

2. **Version Control:**

   - Feature branches for new features
   - Pull requests for code review
   - Main branch auto-deploys to production

3. **Deployment:**
   - Git push triggers Netlify build
   - Automatic preview deployments for PRs
   - Production deployments from main branch
   - Database migrations run manually before deploy

## Cost Structure (Initial)

| Service   | Tier            | Monthly Cost       |
| --------- | --------------- | ------------------ |
| Netlify   | Starter         | $0 - $19           |
| Supabase  | Free → Pro      | $0 - $25           |
| Stripe    | Usage-based     | 2.9% + $0.30/txn   |
| Domain    | Annual          | ~$1/month          |
| Resend    | Free tier       | $0 - $20           |
| **Total** | **Early stage** | **$0 - $75/month** |

## Rationale for Key Choices

### Why Next.js?

- SSR/SSG for SEO (critical for course discovery)
- App Router for modern React patterns
- API Routes for webhook handlers
- Fast refresh for development velocity

### Why Supabase over custom backend?

- Reduces boilerplate (auth, DB, storage in one)
- PostgreSQL is battle-tested for relational data
- RLS provides secure multi-tenant data isolation
- Real-time subscriptions for future features (chat, notifications)
- Free tier sufficient for MVP

### Why Netlify over Vercel?

- More generous free tier for early-stage apps
- Edge functions for webhooks
- Proven reliability for Next.js deployments
- Can migrate to Vercel if needed (minimal lock-in)

### Why Stripe Connect?

- Industry standard for marketplace payments
- Express Accounts simplify expert onboarding
- Automatic commission splitting
- Reduces liability (chargebacks go to experts)
- Built-in subscription management

### Why external video hosting (YouTube/Vimeo)?

- Defers video infrastructure costs ($0 vs. $100+/month for Mux/Cloudflare)
- Experts already comfortable with YouTube/Vimeo
- Can migrate to native hosting in Phase 3 if needed

## Future Considerations

### Potential Tech Additions (Phase 3+)

- **Native Video Hosting:** Mux or Cloudflare Stream (if expert demand)
- **Mobile App:** React Native (code sharing with web)
- **Search:** Algolia or Typesense (if PostgreSQL full-text search insufficient)
- **Real-time Chat:** Supabase Realtime or Socket.io
- **Background Jobs:** Supabase Edge Functions or Inngest
- **Advanced Analytics:** Mixpanel or Amplitude (beyond basic analytics)

### Scalability Path

- Supabase scales to 10,000+ students on Pro plan
- Netlify handles 100,000+ pageviews on free/starter tier
- Database optimization via indexes, caching, read replicas
- CDN caching for static assets and course thumbnails
- Consider dedicated backend if hitting Netlify function limits
