# AJ's Bazaar — Master Development Prompt

> Copy this entire prompt and give it to any AI assistant or developer to build the complete marketplace.

---

## THE PROMPT

```
You are building "AJ's Bazaar" — a hyperlocal marketplace for Mhow (Dr. Ambedkar Nagar), India.
This is a Zepto/Blinkit-style marketplace built specifically for small-town India, connecting
local shopkeepers, vegetable sellers, and customers on a single digital platform.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️  PROJECT CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Project Name: AJ's Bazaar
- Part of: "AJ's Chalo Seekhen" ecosystem (existing Next.js project)
- Existing project path: Already has Next.js 16, React 19, Tailwind CSS 4 set up
- This is NOT a new project — build inside the existing codebase
- Existing structure:
  - src/app/ → Next.js App Router pages
  - src/components/ → React components
  - src/data/ → Data files
  - public/ → Static assets
  - Already has: Navbar, Footer, HeroSection, ProductCard, ScrollReveal components

KEY DIFFERENTIATOR: Vegetable Pre-Booking System — customers can reserve tomorrow's
vegetables today. Sellers post what they'll bring, customers book, morning price
confirmation, then pickup/delivery. No other platform in Mhow offers this.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡  TECH STACK (MANDATORY — DO NOT CHANGE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
  - Framework: Next.js 16 (App Router with server components)
  - UI: React 19 + Tailwind CSS 4
  - State Management: Zustand (client state) + TanStack React Query v5 (server state)
  - Forms: React Hook Form + Zod validation schemas
  - Maps: Leaflet.js (free, open-source) with react-leaflet
  - Icons: Lucide React (already in project)
  - PWA: next-pwa for installable mobile experience
  - Animations: Framer Motion (optional, for page transitions)

Backend:
  - Database: PostgreSQL via Supabase (free tier)
  - Auth: Supabase Auth with Phone OTP (primary login method)
  - File Storage: Supabase Storage (product images, shop photos)
  - API Layer: Next.js API Routes + tRPC OR plain REST with Zod validation
  - Real-time: Supabase Realtime (for order status updates, notifications)
  - Search: PostgreSQL full-text search (sufficient for <10K products)
  - Caching: TanStack Query cache + Supabase Realtime subscriptions

Payments:
  - UPI: Direct UPI intent deep links (FREE — no payment gateway needed)
  - COD: Cash on Delivery with manual tracking in database
  - Future: Razorpay/Cashfree integration when order volume grows

Notifications:
  - Push: Firebase Cloud Messaging (FCM) — free, unlimited
  - WhatsApp: WhatsApp Business API via Gupshup/Twilio
  - SMS: MSG91 (Indian provider, cheapest for OTP)
  - In-App: Supabase Realtime + local notification center

Hosting & DevOps:
  - App Hosting: Vercel (free tier, auto-deploy from GitHub)
  - Database: Supabase (free tier: 500MB DB, 50K auth users, 1GB storage)
  - Image CDN: Cloudflare R2 (10GB free) or Supabase Storage
  - CI/CD: Vercel auto-deploy on git push
  - Monitoring: Vercel Analytics + Supabase Dashboard

Dependencies to install:
  npm install @supabase/supabase-js @supabase/ssr @tanstack/react-query zustand
  npm install react-hook-form zod @hookform/resolvers
  npm install lucide-react date-fns
  npm install leaflet react-leaflet
  npm install qrcode
  npm install -D @types/leaflet

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨  DESIGN SYSTEM & PRINCIPLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Theme: Dark mode (consistent with existing AJ's branding)
  - Background: #0a0a0a (primary), #111111 (cards), #1a1a1a (elevated)
  - Borders: #222222
  - Text: #e0e0e0 (primary), #888888 (muted)
  - Accent: #f97316 (orange — primary brand color)
  - Secondary: #8b5cf6 (purple — secondary accent)
  - Success: #22c55e (green)
  - Info: #3b82f6 (blue)
  - Warning: #eab308 (yellow)
  - Error: #ef4444 (red)
  - Gradients: Use orange-to-purple gradients for headers, CTAs, and highlights

Design Principles (FOLLOW STRICTLY):
  1. MOBILE-FIRST — Design for 360px width first, then scale up. Most users are on
     budget Android smartphones. Touch targets minimum 44x44px.
  2. BILINGUAL — Show Hindi names alongside English everywhere. Database stores both
     name and name_hindi for shops, products, categories, vegetables.
  3. MINIMAL DATA ENTRY — Phone number is the only required field for login.
     Products added via photo + price (minimal typing). Voice input where possible.
  4. OFFLINE-RESILIENT — Handle poor 3G/4G gracefully. Show cached data when offline.
     Queue actions (add to cart, place order) for retry. Show loading skeletons, not spinners.
  5. FAST — Target <3s First Contentful Paint on 4G. Use Next.js SSR/SSG where possible.
     Lazy load images. Optimize bundle size. Use Suspense boundaries.
  6. ACCESSIBLE — Large fonts (min 14px body), high contrast, clear touch targets.
     Support for elderly users (Sharma Aunty persona — age 60+).

Typography:
  - Font: System font stack (no custom fonts — faster loading)
  - Headings: font-weight 700-800
  - Body: font-weight 400, line-height 1.6

Spacing: Use Tailwind's spacing scale consistently (p-4, gap-3, etc.)
Border Radius: rounded-lg (8px) for cards, rounded-xl (12px) for modals, rounded-full for badges
Shadows: Minimal — use borders instead of shadows for dark theme

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👥  USER ROLES & PERSONAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ROLE 1: Customer (Grahak)
  - Who: Sharma Aunty (60), College Student (20), Working Professional (30)
  - Tech Level: Basic smartphone, uses WhatsApp daily, knows UPI (GPay/PhonePe)
  - Needs: Browse nearby shops, order groceries, pre-book vegetables, track orders
  - Pain: Walks to sabzi mandi only to find nothing fresh left. Doesn't know which shops have what.
  - Key flows:
    a) Browse → Add to cart → Checkout (pickup/delivery) → Pay (UPI/COD) → Track
    b) See tomorrow's vegetables → Pre-book → Morning price confirmation → Pickup
  - UI Priority: Simple, large buttons, Hindi labels, minimal steps

ROLE 2: Shopkeeper (Dukaandar)
  - Who: Raju Kirana Store, Gupta Electronics, Meena Dairy
  - Tech Level: Basic-to-moderate smartphone, can take photos, uses UPI
  - Needs: List products (photo + price), receive order notifications, manage inventory
  - Pain: Losing customers to Amazon/Flipkart. No way to notify customers of new stock.
  - Key flows:
    a) Register shop → Add products → Receive orders → Accept/Reject → Mark ready
    b) Post tomorrow's vegetables → See pre-bookings → Confirm prices → Pack orders
  - UI Priority: Quick product add (camera → price → done), loud order notifications

ROLE 3: Vegetable Seller (Sabzi Wala)
  - Who: Ramesh Sabzi Wala, farmers bringing daily produce
  - Tech Level: VERY BASIC — needs the simplest possible interface
  - Needs: Post what vegetables they'll bring, see bookings, accept/reject simply
  - Pain: Unpredictable demand = waste. No guaranteed sales.
  - Key flows: Post list → See demand → Go to mandi → Confirm prices → Pack → Done
  - UI Priority: BIG buttons, minimal text, icon-heavy, WhatsApp-like simplicity

ROLE 4: Admin (AJ's Team)
  - Needs: Onboard sellers, verify shops, monitor orders, handle disputes, track revenue
  - UI: Desktop-first dashboard with data tables, charts, and action panels

Auth & Role System:
  - Single users table with role field: 'customer' | 'seller' | 'sabzi_wala' | 'admin'
  - Login via Phone OTP only (primary). Optional Google OAuth.
  - JWT tokens with role claims for authorization
  - Supabase Row Level Security (RLS) policies for data isolation
  - A user can have multiple roles (e.g., customer + seller)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁  FILE & FOLDER STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build inside the existing project structure:

src/
├── app/
│   ├── bazaar/                          ← CUSTOMER-FACING MARKETPLACE
│   │   ├── page.tsx                     ← Marketplace home (categories, featured shops, pre-book banner)
│   │   ├── layout.tsx                   ← Bazaar layout (BazaarNavbar, BottomNav)
│   │   ├── search/
│   │   │   └── page.tsx                 ← Search results (products + shops)
│   │   ├── category/
│   │   │   └── [slug]/page.tsx          ← Category listing (e.g., /bazaar/category/sabzi)
│   │   ├── shop/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx             ← Shop storefront (products, info, reviews)
│   │   │       └── product/[id]/page.tsx← Product detail page
│   │   ├── cart/
│   │   │   └── page.tsx                 ← Shopping cart
│   │   ├── checkout/
│   │   │   └── page.tsx                 ← Checkout flow (address, payment, confirm)
│   │   ├── orders/
│   │   │   ├── page.tsx                 ← Order history list
│   │   │   └── [id]/page.tsx            ← Order tracking & details
│   │   ├── pre-book/
│   │   │   ├── page.tsx                 ← Pre-booking hub (all sellers with tomorrow's vegetables)
│   │   │   ├── [shopSlug]/page.tsx      ← Pre-book from specific seller
│   │   │   └── my-bookings/page.tsx     ← My pre-bookings list
│   │   └── profile/
│   │       └── page.tsx                 ← Customer profile & addresses
│   │
│   ├── seller/                          ← SELLER DASHBOARD
│   │   ├── page.tsx                     ← Seller dashboard home (stats, recent orders)
│   │   ├── layout.tsx                   ← Seller layout (SellerSidebar/TopNav)
│   │   ├── register/page.tsx            ← New seller registration (multi-step form)
│   │   ├── products/
│   │   │   ├── page.tsx                 ← Product list (manage)
│   │   │   └── add/page.tsx             ← Add/edit product form
│   │   ├── orders/
│   │   │   └── page.tsx                 ← Incoming orders (accept/reject/update)
│   │   ├── pre-bookings/
│   │   │   └── page.tsx                 ← Pre-booking management
│   │   ├── availability/
│   │   │   └── page.tsx                 ← Post tomorrow's vegetables
│   │   ├── earnings/
│   │   │   └── page.tsx                 ← Earnings & payout tracking
│   │   └── shop-settings/
│   │       └── page.tsx                 ← Shop profile, timings, delivery settings
│   │
│   ├── admin/
│   │   └── bazaar/                      ← ADMIN DASHBOARD
│   │       ├── page.tsx                 ← Admin overview (stats, live orders)
│   │       ├── layout.tsx               ← Admin layout (AdminSidebar)
│   │       ├── sellers/page.tsx         ← Seller management & verification
│   │       ├── orders/page.tsx          ← Order monitoring
│   │       ├── analytics/page.tsx       ← Platform analytics
│   │       └── disputes/page.tsx        ← Dispute management
│   │
│   ├── auth/
│   │   └── bazaar/
│   │       ├── login/page.tsx           ← Phone OTP login
│   │       └── callback/page.tsx        ← Auth callback handler
│   │
│   └── api/
│       └── bazaar/                      ← API ROUTES
│           ├── auth/
│           │   ├── send-otp/route.ts
│           │   ├── verify-otp/route.ts
│           │   └── me/route.ts
│           ├── shops/
│           │   ├── route.ts             ← GET (list/search), POST (create)
│           │   ├── [id]/route.ts        ← GET (details), PUT (update)
│           │   ├── [id]/products/route.ts
│           │   └── nearby/route.ts      ← GET with lat/lng/radius params
│           ├── products/
│           │   ├── route.ts             ← GET (search), POST (create)
│           │   └── [id]/route.ts        ← GET, PUT, DELETE
│           ├── cart/
│           │   ├── route.ts             ← GET cart
│           │   └── items/
│           │       ├── route.ts         ← POST (add item)
│           │       └── [id]/route.ts    ← PUT (update qty), DELETE (remove)
│           ├── orders/
│           │   ├── route.ts             ← POST (place), GET (list)
│           │   ├── [id]/route.ts        ← GET details
│           │   ├── [id]/status/route.ts ← PUT (update status)
│           │   ├── [id]/cancel/route.ts ← POST (cancel)
│           │   └── seller/route.ts      ← GET (seller's orders)
│           ├── pre-booking/
│           │   ├── availability/route.ts        ← GET, POST
│           │   ├── availability/[id]/confirm/route.ts ← PUT
│           │   ├── book/route.ts                ← POST (create booking)
│           │   ├── my-bookings/route.ts         ← GET (customer's)
│           │   ├── seller-bookings/route.ts     ← GET (seller's)
│           │   └── [id]/status/route.ts         ← PUT (update status)
│           ├── payments/
│           │   ├── initiate-upi/route.ts
│           │   ├── verify/route.ts
│           │   └── webhook/route.ts
│           ├── reviews/
│           │   ├── route.ts             ← POST (add review)
│           │   ├── shop/[shopId]/route.ts ← GET (shop reviews)
│           │   └── [id]/reply/route.ts  ← POST (seller reply)
│           └── notifications/
│               ├── route.ts             ← GET (user's notifications)
│               ├── [id]/read/route.ts   ← PUT (mark read)
│               └── register-token/route.ts ← POST (FCM token)
│
├── components/
│   └── bazaar/                          ← ALL BAZAAR COMPONENTS
│       ├── layout/
│       │   ├── BazaarNavbar.tsx          ← Marketplace top nav (location, search, cart icon, profile)
│       │   ├── BazaarFooter.tsx          ← Marketplace footer
│       │   ├── BottomNav.tsx             ← Mobile bottom tab bar (Home, Search, Cart, Orders, Profile)
│       │   └── SearchBar.tsx             ← Global search with autocomplete
│       │
│       ├── home/
│       │   ├── CategoryGrid.tsx          ← Category icons grid (sabzi, kirana, dairy, etc.)
│       │   ├── FeaturedShops.tsx         ← Highlighted/trending shops carousel
│       │   ├── NearbyShops.tsx           ← Shops sorted by distance with cards
│       │   ├── PreBookBanner.tsx         ← "Book tomorrow's sabzi!" CTA banner
│       │   └── QuickReorder.tsx          ← Reorder from recent orders
│       │
│       ├── shop/
│       │   ├── ShopHeader.tsx            ← Banner, name, rating, timing, delivery info
│       │   ├── ShopProductGrid.tsx       ← Products grouped by category
│       │   ├── ShopInfo.tsx              ← Address, timings, delivery details, map
│       │   └── ShopReviews.tsx           ← Ratings breakdown + review list
│       │
│       ├── product/
│       │   ├── ProductCard.tsx           ← Product card (image, name, price, add-to-cart button)
│       │   ├── ProductDetail.tsx         ← Full product view with images, description
│       │   ├── QuantitySelector.tsx      ← +/- quantity buttons
│       │   └── UnitSelector.tsx          ← kg, 500g, piece selector pills
│       │
│       ├── cart/
│       │   ├── CartDrawer.tsx            ← Slide-in cart panel from right
│       │   ├── CartItem.tsx              ← Individual cart item with qty controls
│       │   ├── CartSummary.tsx           ← Subtotal, delivery fee, discount, total
│       │   └── FulfillmentSelector.tsx   ← Pickup vs Delivery toggle
│       │
│       ├── checkout/
│       │   ├── AddressSelector.tsx       ← Choose saved address or add new
│       │   ├── PaymentSelector.tsx       ← UPI / COD radio selection
│       │   ├── OrderSummary.tsx          ← Final review before placing order
│       │   └── UPIPayment.tsx            ← UPI deep link generation + QR code
│       │
│       ├── orders/
│       │   ├── OrderCard.tsx             ← Order summary card (for list view)
│       │   ├── OrderTimeline.tsx         ← Visual status timeline (placed → delivered)
│       │   └── OrderDetail.tsx           ← Full order details with items, status, actions
│       │
│       ├── pre-booking/
│       │   ├── VegetableAvailability.tsx ← Grid of tomorrow's vegetables from a seller
│       │   ├── VegetableCard.tsx         ← Individual vegetable (image, name, est. price, qty selector)
│       │   ├── PreBookCart.tsx           ← Pre-booking cart/summary
│       │   ├── PickupSlotSelector.tsx    ← Radio buttons: 6-8 AM, 8-10 AM, 10-12 PM
│       │   ├── PriceConfirmation.tsx     ← Morning price update view (estimated vs final)
│       │   └── BookingCard.tsx           ← Pre-booking status card
│       │
│       ├── seller/
│       │   ├── SellerDashboard.tsx       ← Overview with today's stats
│       │   ├── ProductForm.tsx           ← Add/edit product (camera upload, price, unit, stock)
│       │   ├── OrderManagement.tsx       ← Order list with accept/reject/status buttons
│       │   ├── AvailabilityForm.tsx      ← Post tomorrow's vegetables (add items with prices)
│       │   ├── EarningsChart.tsx         ← Revenue chart (daily/weekly/monthly)
│       │   └── ShopSettingsForm.tsx      ← Edit shop details (timings, delivery, photos)
│       │
│       └── shared/
│           ├── RatingStars.tsx           ← Star rating display (1-5) and input
│           ├── DistanceBadge.tsx         ← "0.8 km" distance pill
│           ├── StatusBadge.tsx           ← Colored status pill (open/closed, order status)
│           ├── EmptyState.tsx            ← No results, no orders empty state with illustration
│           ├── LoadingSkeleton.tsx       ← Skeleton loading screens for each page type
│           ├── LocationPicker.tsx        ← Map-based location selection with auto-detect
│           ├── ImageUpload.tsx           ← Camera/gallery image upload with preview & compression
│           └── HindiLabel.tsx            ← Component to show English + Hindi text together
│
├── lib/
│   └── bazaar/
│       ├── supabase/
│       │   ├── client.ts                ← Supabase browser client
│       │   ├── server.ts                ← Supabase server client (for API routes)
│       │   └── middleware.ts            ← Auth middleware for protected routes
│       ├── store/
│       │   ├── cart-store.ts            ← Zustand cart store (items, add, remove, clear)
│       │   ├── auth-store.ts            ← Zustand auth store (user, role, token)
│       │   └── location-store.ts        ← Zustand location store (lat, lng, area)
│       ├── hooks/
│       │   ├── use-shops.ts             ← TanStack Query hook for shops
│       │   ├── use-products.ts          ← TanStack Query hook for products
│       │   ├── use-orders.ts            ← TanStack Query hook for orders
│       │   ├── use-pre-booking.ts       ← TanStack Query hook for pre-bookings
│       │   ├── use-auth.ts              ← Auth hook (login, logout, role check)
│       │   ├── use-location.ts          ← Geolocation hook
│       │   └── use-notifications.ts     ← Notification hook with Supabase Realtime
│       ├── validators/
│       │   ├── shop.ts                  ← Zod schemas for shop creation/update
│       │   ├── product.ts               ← Zod schemas for product
│       │   ├── order.ts                 ← Zod schemas for order placement
│       │   ├── pre-booking.ts           ← Zod schemas for pre-booking
│       │   └── auth.ts                  ← Zod schemas for OTP/login
│       ├── utils/
│       │   ├── format.ts               ← Price formatting (₹), date formatting, distance
│       │   ├── upi.ts                  ← UPI deep link generation
│       │   └── constants.ts            ← Categories, areas, pickup slots, order statuses
│       └── types/
│           └── index.ts                ← TypeScript types for all entities
│
└── data/
    └── bazaar/
        ├── categories.ts               ← Category seed data with icons and Hindi names
        ├── areas.ts                    ← Mhow areas/localities for delivery zones
        └── sample-data.ts             ← Sample shops, products, vegetables for development

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗄️  DATABASE SCHEMA (Supabase PostgreSQL)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create these tables in Supabase with the EXACT schema below.
Enable Row Level Security (RLS) on ALL tables.

-- USERS & AUTH
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone         VARCHAR(15) UNIQUE NOT NULL,
  name          VARCHAR(100),
  email         VARCHAR(255),
  avatar_url    TEXT,
  role          VARCHAR(20) NOT NULL DEFAULT 'customer',
                -- 'customer' | 'seller' | 'sabzi_wala' | 'admin'
  is_verified   BOOLEAN DEFAULT FALSE,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE addresses (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID REFERENCES users(id) ON DELETE CASCADE,
  label         VARCHAR(50),           -- 'Home', 'Office', 'Other'
  full_address  TEXT NOT NULL,
  landmark      VARCHAR(200),
  area          VARCHAR(100),          -- Locality/mohalla in Mhow
  city          VARCHAR(50) DEFAULT 'Mhow',
  pincode       VARCHAR(6) DEFAULT '453441',
  latitude      DECIMAL(10, 8),
  longitude     DECIMAL(11, 8),
  is_default    BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- CATEGORIES
CREATE TABLE categories (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          VARCHAR(100) NOT NULL,
  name_hindi    VARCHAR(100),
  slug          VARCHAR(100) UNIQUE NOT NULL,
  icon          VARCHAR(50),           -- Lucide icon name or emoji
  parent_id     UUID REFERENCES categories(id),
  sort_order    INT DEFAULT 0,
  is_active     BOOLEAN DEFAULT TRUE
);

-- Seed these categories:
-- Kirana (किराना), Sabzi (सब्ज़ी), Fruits (फल), Dairy (डेयरी),
-- Bakery (बेकरी), Electronics (इलेक्ट्रॉनिक्स), Clothing (कपड़े),
-- Medical (मेडिकल), Hardware (हार्डवेयर), Stationery (स्टेशनरी),
-- Mobile (मोबाइल), Sweets (मिठाई), Restaurant (रेस्टोरेंट), Other (अन्य)

-- SHOPS
CREATE TABLE shops (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id      UUID REFERENCES users(id) ON DELETE CASCADE,
  name          VARCHAR(200) NOT NULL,
  name_hindi    VARCHAR(200),
  slug          VARCHAR(200) UNIQUE NOT NULL,
  description   TEXT,
  shop_type     VARCHAR(30) NOT NULL,
                -- 'kirana' | 'sabzi' | 'fruit' | 'dairy' | 'bakery' |
                -- 'electronics' | 'clothing' | 'medical' | 'hardware' |
                -- 'stationery' | 'mobile' | 'sweets' | 'restaurant' | 'other'
  phone         VARCHAR(15) NOT NULL,
  whatsapp      VARCHAR(15),

  -- Location
  full_address  TEXT NOT NULL,
  area          VARCHAR(100) NOT NULL,    -- Mohalla/locality name
  landmark      VARCHAR(200),
  latitude      DECIMAL(10, 8) NOT NULL,
  longitude     DECIMAL(11, 8) NOT NULL,
  delivery_radius_km  DECIMAL(4, 2) DEFAULT 3.0,

  -- Media
  logo_url      TEXT,
  banner_url    TEXT,
  photos        JSONB DEFAULT '[]',       -- Array of shop photo URLs

  -- Timings
  opening_time  TIME,
  closing_time  TIME,
  off_days      VARCHAR(50)[],            -- ['sunday'] etc.

  -- Settings
  min_order_amount    DECIMAL(10, 2) DEFAULT 0,
  delivery_charge     DECIMAL(10, 2) DEFAULT 0,
  free_delivery_above DECIMAL(10, 2),
  accepts_cod         BOOLEAN DEFAULT TRUE,
  accepts_upi         BOOLEAN DEFAULT TRUE,
  upi_id              VARCHAR(100),
  offers_delivery     BOOLEAN DEFAULT TRUE,
  offers_pickup       BOOLEAN DEFAULT TRUE,

  -- Status
  is_verified   BOOLEAN DEFAULT FALSE,
  is_active     BOOLEAN DEFAULT TRUE,
  is_open       BOOLEAN DEFAULT TRUE,     -- Manual toggle by seller

  -- Denormalized stats
  avg_rating    DECIMAL(2, 1) DEFAULT 0,
  total_ratings INT DEFAULT 0,
  total_orders  INT DEFAULT 0,

  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE shop_categories (
  shop_id       UUID REFERENCES shops(id) ON DELETE CASCADE,
  category_id   UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (shop_id, category_id)
);

-- PRODUCTS
CREATE TABLE products (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id       UUID REFERENCES shops(id) ON DELETE CASCADE,
  category_id   UUID REFERENCES categories(id),
  name          VARCHAR(200) NOT NULL,
  name_hindi    VARCHAR(200),
  description   TEXT,
  price         DECIMAL(10, 2) NOT NULL,
  mrp           DECIMAL(10, 2),           -- Show discount if mrp > price
  unit          VARCHAR(30) DEFAULT 'piece',
                -- 'piece' | 'kg' | '500g' | '250g' | 'litre' | '500ml' | 'dozen' | 'packet'
  in_stock      BOOLEAN DEFAULT TRUE,
  stock_quantity INT,                      -- NULL = unlimited
  image_url     TEXT,
  is_vegetarian BOOLEAN,
  tags          VARCHAR(50)[],
  sort_order    INT DEFAULT 0,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE product_images (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id    UUID REFERENCES products(id) ON DELETE CASCADE,
  image_url     TEXT NOT NULL,
  sort_order    INT DEFAULT 0
);

-- ORDERS
CREATE TABLE orders (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number  VARCHAR(20) UNIQUE NOT NULL, -- Format: AJB-YYMMDD-NNN
  customer_id   UUID REFERENCES users(id),
  shop_id       UUID REFERENCES shops(id),
  order_type    VARCHAR(20) NOT NULL,       -- 'instant' | 'pre_booking'
  fulfillment   VARCHAR(20) NOT NULL,       -- 'pickup' | 'delivery'
  delivery_address  JSONB,                   -- Snapshot at order time
  subtotal      DECIMAL(10, 2) NOT NULL,
  delivery_fee  DECIMAL(10, 2) DEFAULT 0,
  discount      DECIMAL(10, 2) DEFAULT 0,
  total         DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(20) NOT NULL,      -- 'upi' | 'cod'
  payment_status VARCHAR(20) DEFAULT 'pending',
                 -- 'pending' | 'paid' | 'failed' | 'refunded'
  status        VARCHAR(30) DEFAULT 'placed',
                -- 'placed' | 'seller_notified' | 'accepted' | 'rejected' |
                -- 'preparing' | 'ready' | 'out_for_delivery' |
                -- 'delivered' | 'picked_up' | 'completed' |
                -- 'cancelled' | 'disputed'
  estimated_ready_at  TIMESTAMPTZ,
  pickup_slot         VARCHAR(30),
  customer_note VARCHAR(500),
  seller_note   VARCHAR(500),
  cancel_reason VARCHAR(500),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE order_items (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id      UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id    UUID REFERENCES products(id),
  product_name  VARCHAR(200) NOT NULL,      -- Snapshot
  product_price DECIMAL(10, 2) NOT NULL,    -- Snapshot
  unit          VARCHAR(30),
  quantity      INT NOT NULL DEFAULT 1,
  total         DECIMAL(10, 2) NOT NULL,
  notes         VARCHAR(200)               -- "thoda kam mirchi dena"
);

CREATE TABLE order_status_log (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id      UUID REFERENCES orders(id) ON DELETE CASCADE,
  status        VARCHAR(30) NOT NULL,
  changed_by    UUID REFERENCES users(id),
  note          VARCHAR(500),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- PRE-BOOKING (VEGETABLES)
CREATE TABLE vegetable_availability (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id       UUID REFERENCES shops(id) ON DELETE CASCADE,
  available_date DATE NOT NULL,
  items         JSONB NOT NULL,
  -- Array of: { name, name_hindi, estimated_price_per_kg, available_quantity_kg, image_url, quality_note }
  is_confirmed  BOOLEAN DEFAULT FALSE,
  confirmed_prices JSONB,                  -- Final prices after market visit
  posted_at     TIMESTAMPTZ DEFAULT NOW(),
  confirmed_at  TIMESTAMPTZ,
  UNIQUE(shop_id, available_date)
);

CREATE TABLE pre_bookings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number VARCHAR(20) UNIQUE NOT NULL, -- AJB-PB-YYMMDD-NNN
  customer_id   UUID REFERENCES users(id),
  shop_id       UUID REFERENCES shops(id),
  availability_id UUID REFERENCES vegetable_availability(id),
  booking_date  DATE NOT NULL,
  pickup_slot   VARCHAR(30) NOT NULL,
  -- 'early_morning_6_8' | 'morning_8_10' | 'morning_10_12'
  fulfillment   VARCHAR(20) NOT NULL,      -- 'pickup' | 'delivery'
  estimated_total DECIMAL(10, 2),
  final_total     DECIMAL(10, 2),
  payment_method  VARCHAR(20) NOT NULL,
  payment_status  VARCHAR(20) DEFAULT 'pending',
  status        VARCHAR(30) DEFAULT 'booked',
  -- 'booked' | 'prices_confirmed' | 'customer_confirmed' |
  -- 'preparing' | 'ready' | 'completed' | 'cancelled'
  customer_note VARCHAR(500),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE pre_booking_items (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pre_booking_id  UUID REFERENCES pre_bookings(id) ON DELETE CASCADE,
  vegetable_name  VARCHAR(100) NOT NULL,
  name_hindi      VARCHAR(100),
  quantity_kg     DECIMAL(5, 2) NOT NULL,  -- 0.25, 0.5, 1, 2, 5
  estimated_price DECIMAL(10, 2),
  final_price     DECIMAL(10, 2),
  notes           VARCHAR(200)             -- "pakke wale dena"
);

-- PAYMENTS
CREATE TABLE payments (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id        UUID REFERENCES orders(id),
  pre_booking_id  UUID REFERENCES pre_bookings(id),
  amount          DECIMAL(10, 2) NOT NULL,
  method          VARCHAR(20) NOT NULL,    -- 'upi' | 'cod'
  status          VARCHAR(20) DEFAULT 'pending',
  -- 'pending' | 'initiated' | 'success' | 'failed' | 'refunded'
  upi_transaction_id  VARCHAR(100),
  upi_ref_number      VARCHAR(100),
  cod_collected       BOOLEAN DEFAULT FALSE,
  cod_collected_at    TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- REVIEWS
CREATE TABLE reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id   UUID REFERENCES users(id),
  shop_id       UUID REFERENCES shops(id),
  order_id      UUID REFERENCES orders(id),
  rating        INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment       TEXT,
  seller_reply  TEXT,
  replied_at    TIMESTAMPTZ,
  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- NOTIFICATIONS
CREATE TABLE notifications (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID REFERENCES users(id),
  title         VARCHAR(200) NOT NULL,
  body          TEXT NOT NULL,
  type          VARCHAR(30) NOT NULL,
  -- 'order_update' | 'pre_booking' | 'promotion' | 'system'
  data          JSONB,                    -- { orderId, action, deepLink }
  channel       VARCHAR(20) NOT NULL,     -- 'push' | 'whatsapp' | 'sms' | 'in_app'
  is_read       BOOLEAN DEFAULT FALSE,
  sent_at       TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES (for performance)
CREATE INDEX idx_shops_area ON shops(area);
CREATE INDEX idx_shops_type ON shops(shop_type);
CREATE INDEX idx_shops_location ON shops USING GIST (point(longitude, latitude));
CREATE INDEX idx_products_shop ON products(shop_id);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_search ON products USING GIN (
  to_tsvector('simple', name || ' ' || COALESCE(name_hindi, ''))
);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_shop ON orders(shop_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_pre_bookings_customer ON pre_bookings(customer_id);
CREATE INDEX idx_pre_bookings_date ON pre_bookings(booking_date);
CREATE INDEX idx_veg_availability_date ON vegetable_availability(shop_id, available_date);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔄  CORE FLOWS (BUILD THESE EXACTLY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FLOW 1: CUSTOMER BROWSING & ORDERING
─────────────────────────────────────
1. Customer opens /bazaar → sees:
   - Location header (auto-detect or "Mhow, Nai Sadak")
   - Search bar
   - Pre-book sabzi banner (CTA → /bazaar/pre-book)
   - Category grid (icons: 🛒 Kirana, 🥬 Sabzi, 🍎 Fruit, 🥛 Dairy, etc.)
   - Nearby shops (sorted by distance, show rating, distance, open/closed)
   - Sabzi sellers section (sellers with pre-booking available)

2. Customer taps shop → /bazaar/shop/[slug]:
   - Shop header (banner, name, rating, timing, delivery info)
   - Products grouped by category with search
   - Each product: image, name (Hindi + English), price, MRP strikethrough, add-to-cart button
   - Cart floating button at bottom showing item count + total

3. Customer taps "Add to Cart":
   - If unit-based (kg, 500g): show unit selector
   - Quantity selector (+/-) with minimum/maximum
   - Optional note per item
   - Cart drawer slides in from right showing all items

4. Customer goes to cart → /bazaar/cart:
   - List of items with qty controls
   - Fulfillment toggle: Pickup vs Delivery
   - If delivery: show delivery charge, free delivery threshold
   - Cart summary: subtotal, delivery fee, discount, total
   - "Proceed to Checkout" button

5. Checkout → /bazaar/checkout:
   - If delivery: address selection (saved addresses or add new)
   - Payment method: UPI / Cash on Delivery
   - Order summary (final review)
   - "Place Order" button
   - If UPI: generate UPI deep link → open GPay/PhonePe → verify payment
   - If COD: order placed immediately with payment_status: 'pending'

6. Order placed → redirect to /bazaar/orders/[id]:
   - Order confirmation with number (AJB-260317-001)
   - Visual timeline showing current status
   - Real-time updates via Supabase Realtime subscription
   - Items list, payment info, delivery/pickup details
   - Cancel button (if status allows)

FLOW 2: VEGETABLE PRE-BOOKING (UNIQUE FEATURE)
────────────────────────────────────────────────
DAY BEFORE (Evening):
1. Seller goes to /seller/availability:
   - Form to add vegetables for tomorrow
   - For each item: name, name_hindi, estimated price/kg, available quantity, photo, quality note
   - "Post Availability" button → saves to vegetable_availability table
   - Can edit/remove items until 10 PM

2. Customer opens /bazaar/pre-book:
   - Shows all sellers with tomorrow's availability
   - Each seller card: name, area, distance, count of available items
   - Tap seller → /bazaar/pre-book/[shopSlug]

3. Customer on seller's pre-book page:
   - List of available vegetables with:
     - Vegetable image + name (Hindi + English)
     - Estimated price per kg
     - Quality note ("Fresh from Indore mandi")
     - Quantity selector (250g, 500g, 1kg, 2kg, 5kg)
     - Optional note per item ("pakke wale dena")
   - Pickup slot selector: 6-8 AM, 8-10 AM, 10-12 PM
   - Fulfillment: Pickup (free) / Delivery (+₹20)
   - Estimated total
   - "Pre-Book Now" button
   - Note: "Final price confirmed by 7 AM tomorrow"

4. Pre-booking created:
   - Status: 'booked'
   - Seller gets push notification: "3 new pre-bookings for tomorrow"
   - Customer gets confirmation: "Booking confirmed! Prices finalize by 7 AM"

BOOKING DAY (Morning 5-7 AM):
5. Seller goes to /seller/pre-bookings:
   - Sees all bookings for today grouped by customer
   - After visiting mandi, taps "Confirm Prices"
   - For each vegetable: enters actual market price
   - "Confirm All Prices" button → status: 'prices_confirmed'

6. Customer gets notification:
   - "Sabzi prices confirmed! Total: ₹152 (was ₹145). Confirm by 8 AM."
   - Customer opens /bazaar/pre-book/my-bookings
   - Sees estimated vs final prices side by side
   - Options: "Confirm" / "Remove Items" / "Cancel Booking"
   - If confirmed → status: 'customer_confirmed'

BOOKING DAY (Pickup/Delivery):
7. Seller packs order → marks "Ready" → status: 'ready'
8. Customer gets "Your order is ready!" notification
9. Pickup: customer shows booking ID, pays (UPI/cash), seller marks 'completed'
10. Delivery: seller delivers, customer pays, seller marks 'completed'

BUSINESS RULES FOR PRE-BOOKING:
- Posting window: 4 PM - 10 PM (day before)
- Booking deadline: 10 PM
- Price confirmation: 5 AM - 7 AM (morning of)
- Customer confirmation: 7 AM - 8 AM
- Auto-cancel unconfirmed: 8:30 AM
- Price tolerance: ±20% from estimate
- If price > 20% higher: customer can cancel free
- Price goes down: customer automatically gets lower price
- Quantity: min 250g, steps of 250g, max 10kg per item
- No-show tracking: 3 no-shows = temporary booking block

FLOW 3: SELLER ORDER MANAGEMENT
─────────────────────────────────
1. Seller dashboard /seller:
   - Today's stats: orders received, revenue, pending orders
   - Quick actions: "Add Product", "Post Vegetables", "View Orders"

2. New order comes in:
   - LOUD push notification with sound: "New order from Sharma ji! ₹340"
   - WhatsApp message with order details
   - Order appears in /seller/orders with ACCEPT / REJECT buttons

3. Seller taps ACCEPT:
   - Status → 'accepted' → 'preparing'
   - Customer notified: "Your order is being prepared"
   - Seller packs items → taps "Ready"
   - If pickup: status → 'ready', customer notified
   - If delivery: status → 'out_for_delivery'

4. Order completion:
   - Seller marks 'delivered' or 'picked_up'
   - If COD: seller marks "Payment Collected"
   - Status → 'completed'
   - Seller earnings updated

FLOW 4: SELLER REGISTRATION
────────────────────────────
/seller/register — Multi-step form with progress indicator:
  Step 1: Phone OTP verification (auto-fill from existing login)
  Step 2: Personal info (name) + Shop name
  Step 3: Shop type selection (visual grid with icons)
  Step 4: Shop photos (camera upload, 1-5 photos)
  Step 5: Location (auto-detect GPS + manual address + area/mohalla dropdown)
  Step 6: Timings (opening/closing time pickers, off days checkboxes)
  Step 7: Delivery settings (radius slider, charge, min order, free delivery threshold)
  Step 8: Payment (UPI ID input, optional)
  Step 9: Review & Submit → status: pending verification
  Admin verifies → is_verified: true → seller can start receiving orders

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💳  PAYMENT IMPLEMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

UPI Payment (FREE — No Gateway):
  // Generate UPI deep link
  function generateUPILink(sellerUpiId, amount, orderId, shopName) {
    const url = new URL('upi://pay');
    url.searchParams.set('pa', sellerUpiId);   // Payee VPA
    url.searchParams.set('pn', shopName);        // Payee name
    url.searchParams.set('am', amount.toString());
    url.searchParams.set('cu', 'INR');
    url.searchParams.set('tn', `AJ's Bazaar Order ${orderId}`);
    url.searchParams.set('tr', orderId);         // Transaction ref
    return url.toString();
  }
  // On mobile: window.location.href = upiLink (opens GPay/PhonePe)
  // Also generate QR code from the UPI link for desktop/fallback

COD:
  - Order created with payment_status: 'pending'
  - After delivery/pickup, seller marks "Cash Collected"
  - payment_status → 'paid'
  - Platform commission deducted from seller's weekly payout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔔  NOTIFICATION TRIGGERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Customer receives:
  - order_placed:        "Order #AJB-001 placed successfully!"
  - order_accepted:      "Raju Kirana accepted your order. Preparing now..."
  - order_rejected:      "Sorry, couldn't accept. Refund initiated."
  - order_ready:         "Your order is ready for pickup!"
  - order_out:           "Out for delivery!"
  - order_delivered:     "Delivered! Rate your experience."
  - prebooking_confirmed: "Tomorrow's sabzi booking confirmed! Est. ₹145"
  - price_update:        "Sabzi prices updated. Total: ₹152. Confirm by 8 AM."
  - pickup_reminder:     "Your sabzi is ready! Pickup before 10 AM"

Seller receives:
  - new_order:           "New order! ₹340 — Accept/Reject" (with SOUND)
  - new_prebooking:      "3 new pre-bookings for tomorrow. View demand →"
  - confirm_prices:      "Time to confirm today's prices. 5 customers waiting."
  - payment_received:    "₹340 received via UPI"
  - review_received:     "New 5⭐ review!"

Channel priority: Push (FCM) → WhatsApp → SMS → In-App (always stored)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒  SECURITY RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Supabase RLS policies on every table
- Sellers can ONLY modify their own shop and products
- Customers can ONLY see their own orders and bookings
- Admin routes protected by role === 'admin' check
- All API inputs validated with Zod schemas
- Rate limits: API 100/min, Search 30/min, Orders 5/min, OTP 5/hour
- Phone numbers partially masked in UI (98****1234)
- UPI IDs only visible to order participants
- File uploads: validate type (image/*), max 5MB, compress before upload

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍  MHOW-SPECIFIC DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Areas (for delivery zones & address):
  Nai Sadak, Chawni (Cantonment), Station Road, Shivaji Chowk,
  Gandhi Chowk, Simrol Road, Rau-Mhow Road, Kishanganj,
  Manpur Road, Dr. Ambedkar Nagar

Default coordinates: Mhow center — Lat: 22.5567, Lng: 75.7601
Default pincode: 453441
Currency: INR (₹)
Primary language: Hindi (show Hindi labels alongside English)
Peak sabzi time: 6-10 AM
UPI apps: GPay, PhonePe (most popular)

Sample test shops:
  - Raju Kirana Store (राजू किराना स्टोर) — Nai Sadak — kirana
  - Ramesh Sabzi Wala (रमेश सब्ज़ी वाला) — Shivaji Chowk — sabzi
  - Gupta Dairy (गुप्ता डेयरी) — Station Road — dairy
  - Sharma Medical (शर्मा मेडिकल) — Gandhi Chowk — medical

Sample vegetables:
  - Tamatar (टमाटर) ₹30-60/kg
  - Pyaaz (प्याज) ₹20-40/kg
  - Aloo (आलू) ₹20-35/kg
  - Hari Mirch (हरी मिर्च) ₹40-80/kg
  - Dhaniya (धनिया) ₹10-20/bunch
  - Palak (पालक) ₹20-40/bunch
  - Gobhi (गोभी) ₹30-60/piece
  - Bhindi (भिंडी) ₹40-80/kg
  - Baingan (बैंगन) ₹30-50/kg
  - Lauki (लौकी) ₹20-40/piece

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  IMPORTANT RULES (DO NOT VIOLATE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Use Supabase client (@supabase/supabase-js) for ALL database operations.
   Never write raw SQL in frontend code. Use the Supabase query builder.

2. Implement Row Level Security (RLS) policies on every table.
   Never rely on frontend-only auth checks.

3. All API inputs MUST be validated with Zod schemas before processing.
   Never trust client data. Validate on the server.

4. Use TanStack React Query for ALL server data fetching.
   Define custom hooks in lib/bazaar/hooks/ for each entity.
   Use proper query keys, stale times, and cache invalidation.

5. Use Zustand for client-only state (cart, auth, location).
   Keep stores minimal. Don't duplicate server state in Zustand.

6. All forms use React Hook Form + Zod resolver.
   Show validation errors inline. Disable submit while loading.

7. Components go in src/components/bazaar/ — follow the folder structure above.
   Pages go in src/app/bazaar/, src/app/seller/, src/app/admin/bazaar/.

8. Reuse existing project components where possible:
   - Navbar, Footer for outer shell
   - Bazaar has its OWN layout with BazaarNavbar + BottomNav

9. Every page must have loading skeletons (not spinners).
   Use Suspense boundaries with fallback components.

10. All images must be lazy-loaded and optimized.
    Use Next.js <Image> component. Compress uploads to <500KB.

11. Mobile-first responsive design. Test on 360px width.
    Desktop is secondary — most Mhow users are on mobile.

12. Show Hindi + English labels for all user-facing text.
    Use the HindiLabel component or inline both.

13. Handle errors gracefully. Show user-friendly error messages in Hindi+English.
    Never show raw error messages or stack traces.

14. Use proper TypeScript types for everything.
    Define types in lib/bazaar/types/index.ts.

15. Follow the dark theme design system consistently.
    Use CSS variables or Tailwind config for theme colors.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗺️  BUILD ORDER (FOLLOW THIS SEQUENCE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1: Foundation (Week 1-2)
  1. Set up Supabase project — create all tables, indexes, RLS policies
  2. Install dependencies (supabase, tanstack-query, zustand, react-hook-form, zod, lucide)
  3. Create lib/bazaar/ structure — supabase clients, types, validators, stores, hooks
  4. Create auth flow — Phone OTP login page, auth middleware, auth store
  5. Create bazaar layout — BazaarNavbar, BottomNav, shared components
  6. Seed categories and sample data

PHASE 2: Core Marketplace (Week 3-4)
  7. Build /bazaar home page — CategoryGrid, PreBookBanner, NearbyShops
  8. Build shop pages — /bazaar/shop/[slug] with products, info, reviews
  9. Build product components — ProductCard, QuantitySelector, UnitSelector
  10. Build cart — CartDrawer, cart store, CartItem, CartSummary
  11. Build checkout — AddressSelector, PaymentSelector, OrderSummary
  12. Build order API — place order, status updates, order history
  13. Build /bazaar/orders — OrderCard, OrderTimeline, OrderDetail
  14. Build seller registration — /seller/register multi-step form
  15. Build seller product management — /seller/products, ProductForm
  16. Build seller order management — /seller/orders, accept/reject/status

PHASE 3: Pre-Booking MVP (Week 5-6)
  17. Build /seller/availability — AvailabilityForm for posting tomorrow's vegetables
  18. Build /bazaar/pre-book — VegetableAvailability, VegetableCard, PickupSlotSelector
  19. Build pre-booking API — create booking, confirm prices, update status
  20. Build /bazaar/pre-book/my-bookings — BookingCard, PriceConfirmation
  21. Build /seller/pre-bookings — view/manage received bookings, confirm prices
  22. Build notification system — in-app notifications, FCM setup
  23. PWA setup — manifest, service worker, installable
  24. Testing, bug fixes, polish → LAUNCH MVP 🚀

PHASE 4: Enhancement (Week 7-10)
  25. UPI payment integration — deep links, QR codes
  26. Push notifications (FCM) + WhatsApp integration
  27. Ratings & reviews — add, display, seller reply
  28. Geolocation — auto-detect, distance calculation, nearby shops
  29. Search — full-text search for products and shops
  30. Seller analytics — EarningsChart, sales trends
  31. Admin dashboard — overview, seller management, order monitoring

PHASE 5: Growth (Week 11+)
  32. Subscription vegetable baskets
  33. Chat (customer ↔ seller)
  34. Price comparison across shops
  35. Promotional offers
  36. Delivery boy management
  37. Expand to Indore, Pithampur

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build this step by step. Start with Phase 1. After each step, verify it works
before moving to the next. Ask questions if anything is unclear.

"Mhow ka apna digital bazaar — ghar baithe sabzi book karo, dukaan se sab mangwao" 🏪
```

---

*Document: AJ's Bazaar Master Development Prompt*
*Created: 17 March 2026*
*Version: 1.0*
*Status: Ready to use*
