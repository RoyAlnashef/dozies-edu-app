# Specification: Authentication Modal Integration

## Goal

Integrate the v0.dev-generated authentication modal into the application by connecting the AuthProvider context, fixing import paths, and wiring up navigation buttons to open the sign-in/sign-up dialog.

## User Stories

- As a user, I want to click "Sign In" or "Get Started" buttons in the navbar so that I can access the authentication modal and create an account or log in
- As a user, I want to see my name and a "Sign Out" button in the navbar after authenticating so that I know I'm logged in and can log out when needed

## Specific Requirements

**Fix Import Path in AuthDialog Component**

- Remove `.tsx` extension from the import statement in `auth-dialog.tsx` line 6
- Change from `@/lib/auth-context.tsx` to `@/lib/auth-context`
- This follows Next.js/TypeScript conventions where extensions are omitted in imports
- Prevents module resolution errors during build and runtime

**Wrap Application with AuthProvider**

- Add AuthProvider import to `app/layout.tsx`
- Wrap the children prop with `<AuthProvider>` tags in the layout body
- Place AuthProvider inside the body tag but outside Analytics component
- This makes authentication context available throughout the entire application tree

**Render AuthDialog Component Globally**

- Import and render `<AuthDialog />` component in `app/layout.tsx`
- Place it inside the AuthProvider wrapper alongside children
- Dialog will remain hidden until triggered by context state
- Allows any component to trigger the modal via `useAuth` hook

**Convert Navbar to Client Component**

- Add `"use client"` directive at the top of `components/navbar.tsx`
- Import `useAuth` hook from `@/lib/auth-context`
- Destructure `openAuthDialog`, `isAuthenticated`, `user`, and `signOut` from the hook
- Client component required to use React hooks and handle click events

**Wire Up Sign In Button**

- Add `onClick` handler to "Sign In" button that calls `openAuthDialog("signin")`
- Keep button visible only when `!isAuthenticated`
- Opens authentication modal with sign-in tab pre-selected
- Maintains existing styling and responsive behavior (hidden on mobile with `hidden sm:flex`)

**Wire Up Get Started Button**

- Add `onClick` handler to "Get Started" button that calls `openAuthDialog("signup")`
- Keep button visible only when `!isAuthenticated`
- Opens authentication modal with sign-up tab pre-selected
- Maintains existing styling classes

**Display User Info When Authenticated**

- Add conditional rendering to show user's name when `isAuthenticated` is true
- Display name with appropriate styling: `text-sm text-muted-foreground hidden sm:inline`
- Replace Sign In/Get Started buttons with authenticated UI
- Use optional chaining to safely access `user?.name`

**Add Sign Out Button**

- Render "Sign Out" button when `isAuthenticated` is true
- Style button with `variant="outline"` and `size="sm"` to match existing design
- Add `onClick` handler that calls the `signOut` function
- Apply same responsive classes as Sign In button (`hidden sm:flex bg-transparent`)

**Preserve Existing Navigation Elements**

- Keep LearnHub logo and link to homepage unchanged
- Maintain "My Courses" link in all authentication states
- Preserve container structure and spacing with `gap-4` between elements
- Ensure responsive layout behavior remains intact

**Maintain Mock Authentication Flow**

- Keep existing mock authentication in `auth-context.tsx` (no Supabase integration yet)
- Form validation remains in `auth-dialog.tsx` (email format, password length, matching passwords)
- Error states and loading states function as implemented
- Successfully authenticated users see modal close automatically

## Visual Design

No visual mockups provided - following existing navbar design patterns and authentication modal styling from v0.dev components.

## Existing Code to Leverage

**Dialog Component (`components/ui/dialog.tsx`)**

- Radix UI-based modal component with overlay, content, header, title, and description
- Supports controlled open/close state via `open` and `onOpenChange` props
- Already integrated in AuthDialog component
- Includes backdrop blur and focus trap for accessibility
- Has built-in close button with X icon

**Tabs Component (`components/ui/tabs.tsx`)**

- Radix UI tabs for switching between sign-in and sign-up forms
- Uses `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent` composition pattern
- Already implemented in AuthDialog with proper styling
- Supports `defaultValue` prop to pre-select tab based on context

**Button, Input, Label Components (`components/ui/`)**

- shadcn/ui components with consistent styling and variants
- Support size props (`sm`, `default`) and variant props (`outline`, `default`)
- Already used throughout navbar and auth dialog
- Include proper focus states and accessibility attributes

**AuthContext Pattern (`lib/auth-context.tsx`)**

- React Context API with custom hook (`useAuth`)
- Provides global state for modal visibility, authentication status, and user data
- Exposes `openAuthDialog`, `closeAuthDialog`, `signIn`, `signUp`, `signOut` functions
- Uses TypeScript interfaces for type safety

**Navbar Structure (`components/navbar.tsx`)**

- Container with `mx-auto`, `flex`, and `justify-between` for responsive layout
- Uses Link components for navigation with hover states
- Button group with `gap-4` spacing and responsive visibility classes
- Dark mode compatible with border and backdrop blur styling

## Out of Scope

- Supabase authentication integration (mock authentication only for this spec)
- Google OAuth provider setup
- Role selection (student/expert) during signup
- Email verification flow
- Password reset functionality
- Remember me / persistent sessions
- Profile avatar display in navbar
- Mobile hamburger menu or drawer navigation
- Analytics tracking for authentication events
- Error toast notifications (using inline error messages only)
