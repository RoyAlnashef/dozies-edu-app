# Product Roadmap

## Phase 1: MVP - Core Platform

1. [ ] **Authentication & User Management** — Implement sign up/login with Supabase Auth (email/Google OAuth), role selection (student/expert), user profile management, and role-based access control throughout the application. `M`

2. [ ] **Expert Onboarding & Stripe Connect** — Build expert profile setup (bio, expertise tags, photo), integrate Stripe Connect OAuth flow for payment account linking, store Stripe account IDs, and create expert verification status tracking. `L`

3. [ ] **Course Builder & Curriculum Management** — Create course creation interface with title/description/category/thumbnail, pricing controls (free/paid/subscription), module and lesson management with drag-and-drop ordering, external video URL embedding (YouTube/Vimeo), and draft/published status workflow. `L`

4. [ ] **Course Discovery & Browse** — Build homepage with featured courses, category-based filtering, keyword search functionality, course cards with thumbnail/title/expert/price display, and responsive grid layouts for all screen sizes. `M`

5. [ ] **Course Detail & Enrollment Flow** — Create course detail pages showing syllabus/expert bio/pricing/preview lessons, build enrollment flow for free courses (instant access), integrate Stripe Checkout for paid courses, and implement success/failure redirect handling. `L`

6. [ ] **Video Player & Progress Tracking** — Implement embedded video player using YouTube/Vimeo IFrame APIs, automatic progress saving (track watch position every 10 seconds), auto-resume functionality, mark lesson complete button, and lesson navigation sidebar. `M`

7. [ ] **My Courses Dashboard** — Build student dashboard showing all enrolled courses with thumbnails and titles, display progress bars with completion percentages, provide quick navigation to next lesson, and show recently accessed courses first. `S`

8. [ ] **Expert Subscriptions** — Implement subscription checkout flow (monthly/annual billing), automatic enrollment in all expert's paid courses upon subscription, subscription management page (view/cancel/view invoices), and Stripe webhook handling for subscription lifecycle events. `L`

## Phase 2: Engagement & Trust

9. [ ] **Course Reviews & Ratings** — Create 5-star rating system with written reviews, display aggregate ratings on course cards and detail pages, implement review submission form (only for enrolled students who've completed 50%+ of course), and add helpful/report review functionality. `M`

10. [ ] **Watchlist Feature** — Add "Save for Later" button on course cards and detail pages, create Watchlist page showing all saved courses, implement add/remove watchlist functionality, and display watchlist count in navigation. `S`

11. [ ] **Lesson Q&A System** — Build threaded question/answer interface on lesson pages, allow students to post questions and experts to respond, implement upvoting for helpful answers, display Q&A sorted by most helpful/recent, and send email notifications to experts for new questions. `M`

12. [ ] **Assessments & Quizzes** — Create quiz builder for experts (multiple choice, true/false questions), implement auto-grading system, build quiz-taking interface with timer and progress tracking, display results with correct/incorrect answers, and store quiz scores in student progress. `L`

13. [ ] **Course Certificates** — Implement certificate generation logic (triggered at 100% course completion), design certificate template with course name/student name/date/expert signature, generate PDF certificates using a PDF library, provide download button in My Courses dashboard, and send certificate via email. `M`

14. [ ] **Expert Analytics Dashboard** — Build analytics page showing revenue charts (daily/monthly/yearly), student enrollment counts, course completion rates, top-performing courses, engagement metrics (video watch time, quiz scores), and revenue per course breakdown. `M`

## Phase 3: Advanced Features & Monetization

15. [ ] **Digital Goods Marketplace** — Create digital product listing interface for experts (upload files, set prices, write descriptions), implement secure file storage with Supabase Storage, build checkout flow for digital goods, provide instant download after purchase, and track digital goods in order history. `M`

16. [ ] **Direct Messaging** — Implement private messaging system between students and experts, build message inbox/sent folders, add rate limiting to prevent spam (max 5 messages per day per student), implement real-time notifications, and create message thread interface. `M`

17. [ ] **Discussion Forums** — Build course-specific forum pages with thread creation, implement nested reply system, add expert moderation tools (pin/lock/delete threads), include markdown formatting support for posts, and display active discussions on course detail pages. `L`

18. [ ] **Physical Goods Store** — Integrate with Printful or Shippo for fulfillment, create product listing interface for physical items (books, tools, kits), implement inventory tracking, build shipping calculation and checkout flow, and provide order tracking for students. `XL`

19. [ ] **Course Bundles & Discounts** — Allow experts to create course bundles (multiple courses at discounted price), implement Stripe Coupons API for discount codes, build bundle management interface, display bundle savings on course pages, and track bundle vs. individual course sales in analytics. `M`

20. [ ] **Advanced Search & Recommendations** — Implement full-text search across courses/experts/topics, build recommendation engine based on enrollment history and course similarity, create "Students also enrolled in" section on course pages, and add filters for price range/difficulty level/duration. `L`

> **Notes**
> - Order prioritizes technical dependencies: authentication → content creation → discovery → payment → learning experience
> - Each feature represents end-to-end functionality (frontend UI + backend logic + database + API integration)
> - Phase 1 delivers core value proposition: experts can monetize, students can learn
> - Phase 2 adds trust and engagement mechanisms to increase completion rates and platform stickiness
> - Phase 3 expands monetization options and enhances discovery for scale
> - Effort estimates assume solo developer with familiarity in Next.js, Supabase, and Stripe
