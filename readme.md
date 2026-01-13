# Dozies Educational Marketplace

A modern educational platform where domain experts monetize their knowledge through courses, subscriptions, and digital goods—while students access structured learning paths with progress tracking and community engagement.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat&logo=tailwind-css)

## Features

### For Students
- 🔍 **Course Discovery** - Browse courses by category, filter by price, search by keyword
- 📺 **Video Learning** - Embedded video player with progress tracking and auto-resume
- 📊 **Progress Dashboard** - Track enrolled courses with completion percentages
- ⭐ **Watchlist** - Save courses to take later
- 🎓 **Structured Learning** - Follow organized curriculum with modules and lessons
- 🔐 **Authentication** - Secure sign-in with email/Google (Supabase Auth)

### For Experts
- 📚 **Course Builder** - Create courses with titles, descriptions, pricing, and curriculum
- 💰 **Multiple Revenue Streams** - One-time purchases, subscriptions, and digital goods
- 💳 **Stripe Integration** - Connect Stripe account for seamless payments
- 📈 **Analytics Dashboard** - View enrollments, revenue, and completion rates
- ⚡ **Self-Serve Publishing** - Publish courses instantly without admin approval

### Platform Features
- 🌙 **Dark Mode** - Beautiful dark theme with light mode support
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js 16 App Router for optimal speed
- 🎨 **Modern UI** - ShadCN UI components with Radix primitives

## Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Components:** ShadCN UI (Radix + Tailwind)
- **Form Handling:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Themes:** Next Themes (dark/light mode)
- **State Management:** React Context API

### Backend (Planned)
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage
- **Payments:** Stripe Connect + Stripe Billing
- **Hosting:** Netlify (with Edge Functions)
- **Email:** Resend or SendGrid

### Video Hosting
- External providers (YouTube, Vimeo embeds)
- Future: Native video hosting

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, pnpm, or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/RoyAlnashef/dozies-edu-app.git
cd dozies-edu-app
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js 16 App Router pages
│   ├── course/            # Course detail and player pages
│   ├── my-courses/        # Student dashboard
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage with course discovery
├── components/            # React components
│   ├── ui/               # ShadCN UI components (buttons, cards, etc.)
│   ├── auth-dialog.tsx   # Authentication modal
│   ├── course-card.tsx   # Course display card
│   └── navbar.tsx        # Navigation component
├── lib/                   # Utilities and shared logic
│   ├── auth-context.tsx  # Authentication context provider
│   ├── mock-data.ts      # Temporary mock course data
│   └── utils.ts          # Helper functions (cn, etc.)
├── hooks/                 # Custom React hooks
├── public/               # Static assets (images, icons)
├── agent-os/             # Product planning and specs
│   ├── product/          # Mission, roadmap, tech stack docs
│   └── specs/            # Feature specifications
└── styles/               # Global styles
```

## Development Roadmap

### Phase 1: MVP (Current)
- ✅ Course discovery and browsing
- ✅ Basic authentication UI
- ✅ Course detail pages
- ✅ Video player with progress tracking
- ✅ Student dashboard
- 🚧 Supabase integration
- 🚧 Stripe Connect payments
- 🚧 Expert dashboard

### Phase 2: Engagement (Planned)
- Quizzes and assignments
- Certificates of completion
- Course reviews and ratings
- Q&A system
- Digital goods marketplace

### Phase 3: Scale (Future)
- Physical goods marketplace
- Discussion forums
- Mobile app (React Native)
- Advanced analytics
- Affiliate system

## Documentation

For detailed product requirements, technical architecture, and feature specifications, see:
- [Product Mission](agent-os/product/mission.md)
- [Development Roadmap](agent-os/product/roadmap.md)
- [Tech Stack Details](agent-os/product/tech-stack.md)
- [Feature Specs](agent-os/specs/)

## Contributing

This is currently a solo project in active development. Contribution guidelines will be added in the future.

## License

Private project - All rights reserved.

---

Built with ❤️ by [Roy](https://github.com/RoyAlnashef) & Dozie
