# Admin Dashboard Implementation Plan - The RentVerse

## Overview
Build a complete premium SaaS admin dashboard with 10 pages covering operations, listings, KYC, disputes, payouts, sellers, analytics, audit logs, settings, and support.

**Tech Stack:** React + Vite + TanStack Router + Tailwind CSS + shadcn/ui

**Design System:** Premium SaaS with orange accents, soft lavender/pink/yellow/green/blue supporting colors, serif headings, clean sans-serif body text.

---

## Phase 1: Project Structure & Shared Components

### 1.1 Update AdminSidebar Navigation
- Add all 10 main sections with icons
- Implement active page highlighting with orange accent
- Ensure responsive behavior

### 1.2 Create Reusable Components
- **StatsCard** - For 4-column metric cards with icon bubbles
- **MetricsRow** - For 2-column layouts (label + value)
- **QuickActionsPanel** - Sticky right sidebar with action buttons
- **ActivityTimeline** - For recent activity feeds
- **DataTable** - Generic table component with sorting/filtering
- **StatusBadge** - For semantic status pills (Pending/Approved/Rejected)
- **Modal** - For detail/confirmation modals
- **FilterBar** - For search and filter controls

### 1.3 Update styles.css
- Add color variables for supporting accents (lavender, pink, yellow, green, blue)
- Add spacing/shadow utilities for premium feel
- Ensure responsive grid system (12-column)

---

## Phase 2: Core Pages Implementation

### 2.1 Page 1: Operations Dashboard (/admin/dashboard)
**Status:** Partially complete (admin.lazy.tsx) - needs refactoring and enhancement

**Tasks:**
- Refactor existing content into organized sections
- Add "Welcome back" header with proper typography hierarchy
- Implement 4 stats cards with icon bubbles (Pending Approvals, Disputes, KYC Queue, Payouts)
- Create Platform Metrics card with 7-day performance data
- Add Quick Actions sticky panel on the right
- Implement Recent Activity timeline section
- Ensure hover states and smooth transitions

### 2.2 Page 2: Listing Approvals (/admin/listings)
**New Page**

**Components:**
- Header with title and subtitle
- Search & filters bar (search input, category, seller, status, date range dropdowns)
- Listings table/grid showing:
  - Product thumbnail, name, category, brand
  - Seller info, rental price, upload date, stock
  - Status pill, action buttons (Approve/Reject/View details)
- Listing detail modal with:
  - Image gallery (carousel/thumbnails)
  - Product description
  - Material info
  - Size availability chips
  - Rental pricing details
  - Seller profile
  - AI fraud/risk warning banner
  - Approve/Reject buttons

### 2.3 Page 3: KYC Review (/admin/kyc)
**New Page**

**Components:**
- Verification queue (scrollable list of seller cards with avatar, name, ID, progress bar, risk score)
- Document verification section for selected seller:
  - Aadhaar verification card
  - PAN verification card
  - Bank account verification card
  - Each showing: preview, status, match %, timestamp
- Risk analysis panel (fraud indicators, suspicious activity, multiple account alerts, address mismatch)
- Actions section (Approve/Reject/Request Re-upload buttons)

### 2.4 Page 4: Disputes (/admin/disputes)
**New Page**

**Components:**
- Dispute cards list showing: buyer, seller, order ID, item image, reason, refund amount, status
- Chat preview panel for selected dispute:
  - Buyer/seller/support message bubbles
  - Timestamps
- Evidence section (photo gallery with lightbox)
- Resolution timeline (vertical timeline of dispute lifecycle)
- Resolution actions (Refund Buyer/Reject Claim/Escalate/Contact Seller buttons)

### 2.5 Page 5: Payouts (/admin/payouts)
**New Page**

**Components:**
- Revenue summary cards (Total pending, Processed, Failed, This month revenue)
- Payout table with columns:
  - Seller name, bank status, earnings, commission, net payout, payment status, transfer date
  - Status pills (Paid/Pending/Failed/Processing)
- Revenue chart (line/area chart showing weekly payout trends)
- Actions bar (Process payout/Retry failed/Export CSV/View invoice buttons)

### 2.6 Page 6: Seller Management (/admin/sellers)
**New Page**

**Components:**
- Seller profile cards grid:
  - Seller image, store name, rating, total rentals, revenue, active listings, verification badge
- Seller analytics section for selected seller:
  - Growth chart (revenue/rentals over time)
  - Rental trends chart
  - Cancellation rate with sparkline
  - Customer rating trends chart
- Seller actions (View profile/Suspend/Ban/Contact - with destructive action warnings)
- Activity logs table showing: listings uploaded, orders, complaints, refunds with timestamps

### 2.7 Page 7: Analytics (/admin/analytics)
**New Page**

**Components:**
- Top metrics grid (Revenue growth, Active rentals, Monthly users, Seller growth, Conversion rate, Retention rate)
  - Each card with delta and mini sparkline
- Main analytics charts section:
  - Revenue line chart
  - Rental trend area chart
  - Seller growth bar chart
  - Traffic pie chart
- Geographic analytics (Top cities, Orders by region, Heatmap/region grid)
- Product insights (Most rented products, Highest earning categories, Seasonal trends)
- Filters bar (Date range, Category, Seller type, Region filters with applied chips)

### 2.8 Page 8: Audit Logs (/admin/audit)
**New Page**

**Components:**
- Activity table (dense but readable):
  - Columns: Admin name, Action, Module, Timestamp, IP, Device, Status
  - Subtle hover highlighting
- Security events section (summary cards for failed logins, password changes, role updates, suspicious access)
- Filters (Search, Filter by admin, module, date - sticky at top)
- Export actions (Export CSV/PDF/Download logs buttons)

### 2.9 Page 9: Settings (/admin/settings)
**New Page**

**Sections:**
- Admin Profile (Name, Email, Phone, Avatar upload)
- Security Settings (Change password, 2FA toggle, Login alerts toggle)
- Platform Settings (Commission %, Taxes, Currency, Region selectors)
- Notifications (Email alerts, SMS alerts, Push notifications - toggle switches)
- Sticky save bar (Save changes/Cancel/Reset defaults buttons)

### 2.10 Page 10: Help & Support (/admin/help)
**New Page**

**Components:**
- Support tickets card/table layout (Ticket ID, User name, Issue category, Priority badge, Status, Last updated)
- FAQ section (Accordion with categories: Payments, Refunds, Seller onboarding, KYC help)
- Live chat section (Chat bubbles with messages, timestamps, typing indicators)
- Documentation area (Grid of doc cards with icon, title, description, "Open" CTA)

---

## Phase 3: Navigation & Routing

### 3.1 Create Admin Router Structure
Files to create:
- `src/routes/admin.dashboard.lazy.tsx` - Main dashboard (refactored from admin.lazy.tsx)
- `src/routes/admin.listings.lazy.tsx`
- `src/routes/admin.kyc.lazy.tsx`
- `src/routes/admin.disputes.lazy.tsx`
- `src/routes/admin.payouts.lazy.tsx`
- `src/routes/admin.sellers.lazy.tsx`
- `src/routes/admin.analytics.lazy.tsx`
- `src/routes/admin.audit.lazy.tsx`
- `src/routes/admin.settings.lazy.tsx`
- `src/routes/admin.help.lazy.tsx`

### 3.2 Update AdminSidebar
- Map navigation items to all routes
- Update active page detection
- Add proper icons and labels

---

## Phase 4: Styling & Polish

### 4.1 Implement Design Tokens
- Orange accent color for primary elements
- Soft lavender, pink, yellow, green, blue for semantic states
- Premium shadows and depth effects
- Generous whitespace and padding

### 4.2 Responsive Design
- 12-column grid system
- Desktop-first approach
- Graceful tablet and mobile layouts
- Ensure cards stack properly on smaller screens

### 4.3 Interactions & Motion
- Smooth hover states on cards/buttons/rows
- Subtle lift effect on card hover
- No flashy animations - keep purposeful and refined
- Focus states for accessibility

---

## Implementation Order

1. **Week 1:** 
   - Set up AdminSidebar with all 10 navigation items
   - Create reusable components (StatsCard, StatusBadge, DataTable, etc.)
   - Update styles.css with all design tokens

2. **Week 2-3:**
   - Implement Pages 1-3 (Dashboard, Listings, KYC)
   - Set up modals and detail views

3. **Week 4:**
   - Implement Pages 4-5 (Disputes, Payouts)
   - Add charts (recharts integration)

4. **Week 5:**
   - Implement Pages 6-7 (Sellers, Analytics)
   - Complete all analytics charts

5. **Week 6:**
   - Implement Pages 8-10 (Audit Logs, Settings, Help)
   - Polish interactions and responsiveness

6. **Week 7:**
   - Testing and refinement
   - Accessibility review
   - Performance optimization

---

## Key Considerations

- **Consistency:** Use established patterns from existing buyer/seller pages
- **Performance:** Lazy load pages, use React Query for data fetching (already in stack)
- **Accessibility:** Proper ARIA labels, keyboard navigation, focus management
- **Mobile:** Responsive tables/grids with touch-friendly interactions
- **Data:** Use mock data initially, structure for easy API integration later
- **Security:** Admin-only routes, proper auth checks (defer to existing auth system)

---

## Success Criteria

- ✓ All 10 pages fully implemented and navigable
- ✓ Consistent design system applied across all pages
- ✓ Responsive on desktop, tablet, mobile
- ✓ Interactive elements (hover, focus, active states) working smoothly
- ✓ Premium SaaS feel maintained throughout
- ✓ No console errors or accessibility violations
- ✓ Load times optimized for large datasets
