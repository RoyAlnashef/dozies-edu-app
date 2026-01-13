# Task Breakdown: Authentication Modal Integration

## Overview

Total Tasks: 3 Task Groups
Feature Type: Frontend Integration

## Task List

### Context Setup and Import Fixes

#### Task Group 1: Fix Imports and Configure Global Auth Context

**Dependencies:** None

- [x] 1.0 Complete authentication context setup
  - [x] 1.1 Fix import path in AuthDialog component
    - Open `components/auth-dialog.tsx`
    - Change line 6 from `@/lib/auth-context.tsx` to `@/lib/auth-context`
    - Remove `.tsx` extension to follow Next.js/TypeScript conventions
    - Save file and verify no TypeScript errors
  - [x] 1.2 Add AuthProvider to application layout
    - Open `app/layout.tsx`
    - Import `AuthProvider` from `@/lib/auth-context`
    - Import `AuthDialog` from `@/components/auth-dialog`
    - Wrap children with `<AuthProvider>` tags inside body element
    - Place before `<Analytics />` component
  - [x] 1.3 Render AuthDialog component globally
    - Add `<AuthDialog />` component inside `<AuthProvider>` wrapper
    - Place alongside children element in layout
    - Verify modal remains hidden by default
  - [x] 1.4 Verify build and runtime without errors
    - Run `npm run dev` to start development server
    - Check console for any import or module resolution errors
    - Verify application loads successfully
    - Confirm no TypeScript errors in terminal

**Acceptance Criteria:**

- No import errors in `auth-dialog.tsx`
- AuthProvider successfully wraps application in `layout.tsx`
- AuthDialog component renders without errors
- Development server runs without TypeScript or build errors
- Application loads successfully in browser

### Navbar Authentication Integration

#### Task Group 2: Convert Navbar and Wire Up Authentication

**Dependencies:** Task Group 1

- [x] 2.0 Complete navbar authentication integration
  - [x] 2.1 Convert Navbar to client component
    - Open `components/navbar.tsx`
    - Add `"use client"` directive at the very top of the file
    - Import `useAuth` hook from `@/lib/auth-context`
    - Destructure `openAuthDialog`, `isAuthenticated`, `user`, `signOut` from `useAuth()` hook
  - [x] 2.2 Wrap buttons in conditional rendering
    - Add conditional check: render sign-in/sign-up buttons only when `!isAuthenticated`
    - Add conditional check: render user info and sign-out button only when `isAuthenticated`
    - Use JSX ternary or fragment-based conditional rendering
  - [x] 2.3 Wire up Sign In button
    - Add `onClick={() => openAuthDialog("signin")}` handler to Sign In button
    - Keep existing styling and classes unchanged
    - Preserve `hidden sm:flex` responsive behavior
  - [x] 2.4 Wire up Get Started button
    - Add `onClick={() => openAuthDialog("signup")}` handler to Get Started button
    - Keep existing styling and classes unchanged
    - Ensure button opens signup tab by default
  - [x] 2.5 Add authenticated user display
    - Create JSX for authenticated state
    - Display `{user?.name}` with classes: `text-sm text-muted-foreground hidden sm:inline`
    - Use optional chaining to safely access user name
    - Place between "My Courses" link and Sign Out button
  - [x] 2.6 Add Sign Out button
    - Create Button component with `variant="outline"` and `size="sm"`
    - Add `onClick={signOut}` handler
    - Apply classes: `hidden sm:flex bg-transparent`
    - Style to match existing Sign In button
  - [x] 2.7 Verify navigation elements preserved
    - Confirm LearnHub logo and link remain unchanged
    - Verify "My Courses" link visible in all states
    - Check container structure and `gap-4` spacing intact
    - Ensure responsive layout behavior works correctly

**Acceptance Criteria:**

- Navbar successfully converted to client component without errors
- Sign In button opens modal with sign-in tab pre-selected
- Get Started button opens modal with sign-up tab pre-selected
- User name displays correctly after authentication
- Sign Out button functions and clears authentication state
- All existing navigation elements remain functional
- Responsive behavior works on mobile and desktop

### Testing and Verification

#### Task Group 3: Manual Testing and Integration Verification

**Dependencies:** Task Group 2

- [x] 3.0 Complete authentication flow testing
  - [x] 3.1 Test unauthenticated state
    - Open application in browser
    - Verify "Sign In" and "Get Started" buttons visible
    - Verify no user name or "Sign Out" button shown
    - Check responsive behavior on mobile viewport (hide buttons on small screens)
  - [x] 3.2 Test Sign In flow
    - Click "Sign In" button
    - Verify modal opens with sign-in tab active
    - Enter email (any format) and password
    - Submit form and verify success
    - Verify modal closes automatically
    - Verify user name appears in navbar
    - Verify "Sign Out" button replaces "Sign In"/"Get Started"
  - [x] 3.3 Test Sign Up flow
    - Sign out if authenticated
    - Click "Get Started" button
    - Verify modal opens with sign-up tab active
    - Enter name, email, password, and confirm password
    - Submit form and verify success
    - Verify modal closes automatically
    - Verify user name appears in navbar
  - [x] 3.4 Test form validation
    - Open sign-in modal
    - Submit empty form - verify "fill in all fields" error
    - Enter invalid email - verify email validation error
    - Open sign-up modal
    - Enter password less than 8 characters - verify error
    - Enter non-matching passwords - verify "passwords do not match" error
  - [x] 3.5 Test Sign Out functionality
    - While authenticated, click "Sign Out" button
    - Verify user name disappears from navbar
    - Verify "Sign In" and "Get Started" buttons reappear
    - Verify authentication state fully reset
  - [x] 3.6 Test modal interaction
    - Open modal and click X close button - verify modal closes
    - Open modal and click outside (overlay) - verify modal closes
    - Open modal, switch between tabs - verify both tabs function correctly
    - Verify loading states during form submission
  - [x] 3.7 Test responsive behavior
    - Test on mobile viewport (< 640px)
    - Verify buttons hidden appropriately with `hidden sm:flex`
    - Test on tablet viewport (640px - 1024px)
    - Test on desktop viewport (> 1024px)
    - Verify layout maintains structure across breakpoints
  - [x] 3.8 Test navigation preservation
    - Click LearnHub logo - verify navigates to homepage
    - Click "My Courses" link - verify navigates to /my-courses
    - Verify navigation works in both authenticated and unauthenticated states
    - Check that existing spacing and layout preserved

**Acceptance Criteria:**

- Sign In button opens modal with correct tab
- Get Started button opens modal with correct tab
- Form validation displays appropriate error messages
- Successful authentication closes modal and updates navbar
- User name displays after authentication
- Sign Out button clears authentication state
- Modal can be closed via X button or overlay click
- Responsive behavior works correctly across all breakpoints
- All navigation links remain functional

## Execution Order

Recommended implementation sequence:

1. **Context Setup and Import Fixes** (Task Group 1)

   - Fix import paths and set up global authentication context
   - Ensure no build errors before proceeding

2. **Navbar Authentication Integration** (Task Group 2)

   - Convert navbar component and wire up authentication logic
   - Implement conditional rendering and event handlers

3. **Testing and Verification** (Task Group 3)
   - Manually test all authentication flows
   - Verify responsive behavior and edge cases
   - Confirm all acceptance criteria met

## Notes

- **No Unit Tests Required**: This is an integration task connecting existing components, manual testing is appropriate
- **Mock Authentication**: Current implementation uses mock auth (no real API calls), Supabase integration is out of scope
- **Minimal Code Changes**: Most work involves wiring up existing components rather than building new ones
- **Visual Consistency**: Maintain existing design patterns and styling throughout integration
