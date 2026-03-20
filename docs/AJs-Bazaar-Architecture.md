# AJ's Bazaar — Complete Architecture & Implementation Blueprint

> **Hyperlocal Marketplace for Mhow** | Connecting local shopkeepers, vegetable sellers & customers
> Inspired by Zepto/Blinkit — Built for small-town India

---

## Table of Contents

1. [Vision & Problem Statement](#1-vision--problem-statement)
2. [User Personas](#2-user-personas)
3. [Core Features](#3-core-features)
4. [System Architecture](#4-system-architecture)
5. [Database Schema](#5-database-schema)
6. [API Design](#6-api-design)
7. [Frontend Architecture](#7-frontend-architecture)
8. [Pre-Booking System (Vegetables)](#8-pre-booking-system-vegetables)
9. [Payment Flow](#9-payment-flow)
10. [Notification System](#10-notification-system)
11. [Admin Dashboard](#11-admin-dashboard)
12. [Tech Stack](#12-tech-stack)
13. [Deployment & Infrastructure](#13-deployment--infrastructure)
14. [Security](#14-security)
15. [Monetization](#15-monetization)
16. [Phase-wise Roadmap](#16-phase-wise-roadmap)
17. [AI Prompt for Development](#17-ai-prompt-for-development)

---

## 1. Vision & Problem Statement

### The Problem
In Mhow (and small towns across India):
- Local shopkeepers have **zero digital presence** — customers don't know what's available nearby
- Vegetable sellers operate on **unpredictable schedules** — customers waste time visiting empty carts
- No way to **pre-book fresh vegetables** — by the time you arrive, the good stuff is gone
- Small shops can't compete with big e-commerce — they need a **hyperlocal platform** that works for them

### The Vision
**AJ's Bazaar** is a hyperlocal marketplace that:
- Gives every Mhow shopkeeper a **digital storefront** in minutes
- Lets customers **discover, browse, and order** from nearby shops
- Introduces **vegetable pre-booking** — reserve your sabzi before it even reaches the market
- Supports **both self-pickup and shop delivery** — flexibility for both parties
- Runs on **UPI + Cash on Delivery** — no friction, no barriers

### One-liner
> "Mhow ka apna digital bazaar — ghar baithe sabzi book karo, dukaan se sab mangwao" 🏪

---

## 2. User Personas

### 2.1 Customer (Grahak)
```
Name:       Sharma Aunty / College Student / Working Professional
Age:        18-65
Tech Level: Basic smartphone, WhatsApp user, knows UPI
Needs:      - See what's available nearby without walking around
            - Pre-book vegetables for tomorrow morning
            - Order groceries/items for delivery or pickup
            - Compare prices across local shops
            - Track order status
Pain:       - Walks to sabzi mandi only to find nothing fresh left
            - Doesn't know which shops have what
            - No way to order from local shops digitally
```

### 2.2 Shopkeeper (Dukaandar)
```
Name:       Raju Kirana Store / Gupta Electronics / Meena Dairy
Age:        25-60
Tech Level: Basic-to-moderate smartphone user
Needs:      - List products easily (photo + price)
            - Receive orders with notification
            - Manage inventory simply
            - Build loyal customer base
            - Accept UPI payments
Pain:       - Losing customers to Amazon/Flipkart for items they stock
            - No way to tell customers about new stock/offers
            - Manual inventory tracking
```

### 2.3 Vegetable Seller (Sabzi Wala)
```
Name:       Ramesh Sabzi Wala / Farmers bringing produce daily
Age:        30-55
Tech Level: Very basic — needs simplest possible interface
Needs:      - Post what vegetables they'll bring tomorrow
            - See pre-bookings before going to market
            - Know demand to plan inventory
            - Simple accept/reject for orders
Pain:       - Unpredictable demand = waste or shortage
            - No guaranteed sales
            - Customers don't know their schedule
```

### 2.4 Admin (AJ's Team)
```
Needs:      - Onboard and verify sellers
            - Monitor transactions
            - Handle disputes
            - Track platform metrics
            - Manage commissions
```

---

## 3. Core Features

### 3.1 Customer App Features

| Feature | Description | Priority |
|---------|------------|----------|
| **Browse Marketplace** | See all nearby shops, categories, products | P0 |
| **Shop Profiles** | Each shop has a page with products, ratings, timings | P0 |
| **Search & Filter** | Search by product name, category, shop, price range | P0 |
| **Cart & Ordering** | Add to cart, choose pickup/delivery, place order | P0 |
| **Pre-Book Vegetables** | Book tomorrow's vegetables today (see Section 8) | P0 |
| **Order Tracking** | Real-time status: Confirmed → Preparing → Ready/Out for Delivery → Delivered | P0 |
| **UPI Payment** | Pay via UPI (PhonePe, GPay, Paytm) | P0 |
| **Cash on Delivery** | Pay in cash at pickup/delivery | P0 |
| **Ratings & Reviews** | Rate shops and products | P1 |
| **Favorites** | Save favorite shops and products | P1 |
| **Order History** | View past orders, reorder easily | P1 |
| **Notifications** | Order updates, pre-booking reminders, offers | P1 |
| **Address Management** | Save multiple delivery addresses | P1 |
| **Price Comparison** | Compare same product across shops | P2 |
| **Chat with Seller** | In-app messaging for queries | P2 |

### 3.2 Seller Dashboard Features

| Feature | Description | Priority |
|---------|------------|----------|
| **Easy Onboarding** | Register with phone number, shop photos, location | P0 |
| **Product Management** | Add/edit/remove products with photo, price, stock | P0 |
| **Order Management** | View incoming orders, accept/reject, mark ready | P0 |
| **Pre-Booking Dashboard** | See tomorrow's vegetable pre-bookings | P0 |
| **Earnings & Payouts** | Track daily/weekly/monthly earnings | P0 |
| **Shop Profile** | Edit timings, description, delivery area | P0 |
| **Inventory Alerts** | Low stock notifications | P1 |
| **Analytics** | Sales trends, popular items, peak hours | P1 |
| **Promotions** | Create offers, discounts, combo deals | P2 |
| **Bulk Upload** | Upload product catalog via spreadsheet | P2 |

### 3.3 Vegetable Pre-Booking (Unique Feature)

| Feature | Description | Priority |
|---------|------------|----------|
| **Tomorrow's List** | Seller posts what vegetables will be available tomorrow with estimated price | P0 |
| **Pre-Book** | Customer selects items and approximate quantity (500g, 1kg, 2kg) | P0 |
| **Price Confirmation** | Morning of delivery, seller confirms final price (market rate) | P0 |
| **Pickup Slot** | Customer selects morning/afternoon pickup time | P0 |
| **Smart Suggestions** | Based on past orders, suggest weekly vegetable basket | P1 |
| **Subscription** | Weekly recurring vegetable basket (e.g., every Monday & Thursday) | P2 |

---

## 4. System Architecture

### 4.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
├──────────────────┬──────────────────┬───────────────────────────┤
│  Customer App    │  Seller App      │  Admin Dashboard          │
│  (Next.js PWA)   │  (Next.js PWA)   │  (Next.js)               │
│  Mobile-first    │  Mobile-first    │  Desktop-first            │
└────────┬─────────┴────────┬─────────┴─────────────┬─────────────┘
         │                  │                       │
         ▼                  ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY / BFF                          │
│                   (Next.js API Routes / tRPC)                   │
├─────────────────────────────────────────────────────────────────┤
│  Auth    │  Products  │  Orders   │  Pre-Book │  Payments │ ... │
└────┬─────┴─────┬──────┴─────┬─────┴─────┬─────┴─────┬─────┴────┘
     │           │            │           │           │
     ▼           ▼            ▼           ▼           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SERVICE LAYER                              │
├─────────┬──────────┬──────────┬──────────┬──────────┬───────────┤
│  Auth   │ Catalog  │  Order   │ Pre-Book │ Payment  │  Notif.   │
│ Service │ Service  │ Service  │ Service  │ Service  │  Service  │
└────┬────┴────┬─────┴────┬────┴────┬─────┴────┬─────┴────┬──────┘
     │         │          │         │          │          │
     ▼         ▼          ▼         ▼          ▼          ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                 │
├──────────────┬────────────────┬──────────────┬──────────────────┤
│  PostgreSQL  │     Redis      │  S3/Cloudflare│  Firebase FCM   │
│  (Supabase)  │   (Caching +   │  R2 (Images)  │  (Push Notifs)  │
│  Primary DB  │    Sessions)   │               │                 │
└──────────────┴────────────────┴──────────────┴──────────────────┘
```

### 4.2 Detailed Component Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js 16)                      │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────┐ │
│  │  Customer    │  │  Seller     │  │  Admin               │ │
│  │  /bazaar/*   │  │  /seller/*  │  │  /admin/bazaar/*     │ │
│  │             │  │             │  │                      │ │
│  │ - Home      │  │ - Dashboard │  │ - Seller Management  │ │
│  │ - Browse    │  │ - Products  │  │ - Order Monitoring   │ │
│  │ - Shop Page │  │ - Orders    │  │ - Analytics          │ │
│  │ - Cart      │  │ - Pre-Books │  │ - Disputes           │ │
│  │ - Checkout  │  │ - Earnings  │  │ - Payouts            │ │
│  │ - Orders    │  │ - Profile   │  │ - Settings           │ │
│  │ - Pre-Book  │  │             │  │                      │ │
│  │ - Profile   │  │             │  │                      │ │
│  └─────────────┘  └─────────────┘  └──────────────────────┘ │
│                                                              │
│  Shared: Auth, UI Components, Hooks, Utils, State (Zustand)  │
└──────────────────────────┬───────────────────────────────────┘
                           │
                    tRPC / API Routes
                           │
┌──────────────────────────▼───────────────────────────────────┐
│                    BACKEND SERVICES                           │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Auth Service (Supabase Auth)                         │    │
│  │  - Phone OTP login (primary)                          │    │
│  │  - Google OAuth (optional)                            │    │
│  │  - Role-based: customer | seller | sabzi_wala | admin │    │
│  │  - JWT tokens with role claims                        │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Catalog Service                                      │    │
│  │  - Shop CRUD (create, read, update, deactivate)       │    │
│  │  - Product CRUD with image upload                     │    │
│  │  - Category management                                │    │
│  │  - Search & filter (full-text via PostgreSQL)         │    │
│  │  - Geolocation-based shop discovery                   │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Order Service                                        │    │
│  │  - Cart management                                    │    │
│  │  - Order placement & lifecycle                        │    │
│  │  - Order status state machine                         │    │
│  │  - Delivery/pickup coordination                       │    │
│  │  - Order history & analytics                          │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Pre-Booking Service                                  │    │
│  │  - Tomorrow's availability posting                    │    │
│  │  - Booking creation & management                      │    │
│  │  - Price confirmation workflow                        │    │
│  │  - Pickup slot management                             │    │
│  │  - Subscription/recurring bookings                    │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Payment Service                                      │    │
│  │  - UPI intent generation                              │    │
│  │  - COD order tracking                                 │    │
│  │  - Payment verification & webhooks                    │    │
│  │  - Refund processing                                  │    │
│  │  - Seller payout calculation                          │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Notification Service                                 │    │
│  │  - Push notifications (FCM)                           │    │
│  │  - WhatsApp notifications (via WhatsApp Business API) │    │
│  │  - SMS fallback (for non-smartphone users)            │    │
│  │  - In-app notifications                               │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

### 4.3 Order State Machine

```
                    ┌──────────┐
                    │  PLACED  │ ← Customer places order
                    └────┬─────┘
                         │
              ┌──────────▼──────────┐
              │  SELLER_NOTIFIED    │ ← Push/WhatsApp to seller
              └──────────┬──────────┘
                         │
                    ┌────▼────┐
              ┌─────│ REVIEW  │─────┐
              │     └─────────┘     │
              ▼                     ▼
       ┌──────────┐          ┌──────────┐
       │ ACCEPTED │          │ REJECTED │ → Refund if paid
       └────┬─────┘          └──────────┘
            │
       ┌────▼──────┐
       │ PREPARING │ ← Seller packing items
       └────┬──────┘
            │
     ┌──────┴──────┐
     │             │
     ▼             ▼
┌─────────┐  ┌───────────────┐
│  READY  │  │ OUT_FOR_      │
│ (Pickup)│  │ DELIVERY      │
└────┬────┘  └───────┬───────┘
     │               │
     ▼               ▼
┌──────────┐  ┌──────────┐
│ PICKED_UP│  │ DELIVERED│
└────┬─────┘  └────┬─────┘
     │              │
     └──────┬───────┘
            ▼
     ┌──────────────┐
     │  COMPLETED   │ ← Payment settled
     └──────────────┘

  (Any state) ──→ CANCELLED (with reason)
  (Any state) ──→ DISPUTED  (customer raises issue)
```

---

## 5. Database Schema

### 5.1 Entity Relationship Diagram

```
users ──────┬──── shops ──────── products
   │        │       │                │
   │        │       │           product_images
   │        │       │
   │        │    shop_categories
   │        │
   │        ├──── addresses
   │        │
   │        ├──── orders ──────── order_items
   │        │       │
   │        │    order_status_log
   │        │
   │        ├──── pre_bookings ── pre_booking_items
   │        │       │
   │        │    vegetable_availability
   │        │
   │        ├──── payments
   │        │
   │        ├──── reviews
   │        │
   │        └──── notifications
   │
categories
```

### 5.2 Table Definitions

```sql
-- ============================================
-- USERS & AUTH
-- ============================================

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

-- ============================================
-- SHOPS & PRODUCTS
-- ============================================

CREATE TABLE categories (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          VARCHAR(100) NOT NULL,
  name_hindi    VARCHAR(100),
  slug          VARCHAR(100) UNIQUE NOT NULL,
  icon          VARCHAR(50),
  parent_id     UUID REFERENCES categories(id),
  sort_order    INT DEFAULT 0,
  is_active     BOOLEAN DEFAULT TRUE
);

-- Seed categories:
-- Kirana (Grocery), Sabzi (Vegetables), Fruits, Dairy,
-- Bakery, Electronics, Clothing, Medical, Hardware,
-- Stationery, Mobile, Sweets, Restaurant, Other

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
  area          VARCHAR(100) NOT NULL,    -- Mohalla/locality
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
  off_days      VARCHAR(50)[],            -- ['sunday', 'tuesday']

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

  -- Stats (denormalized for performance)
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

CREATE TABLE products (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id       UUID REFERENCES shops(id) ON DELETE CASCADE,
  category_id   UUID REFERENCES categories(id),
  name          VARCHAR(200) NOT NULL,
  name_hindi    VARCHAR(200),
  description   TEXT,

  -- Pricing
  price         DECIMAL(10, 2) NOT NULL,
  mrp           DECIMAL(10, 2),           -- MRP for showing discount
  unit          VARCHAR(30) DEFAULT 'piece',
                -- 'piece' | 'kg' | '500g' | '250g' | 'litre' |
                -- '500ml' | 'dozen' | 'packet'

  -- Stock
  in_stock      BOOLEAN DEFAULT TRUE,
  stock_quantity INT,                      -- NULL = unlimited

  -- Media
  image_url     TEXT,

  -- Metadata
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

-- ============================================
-- ORDERS
-- ============================================

CREATE TABLE orders (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number  VARCHAR(20) UNIQUE NOT NULL, -- AJB-240317-001

  customer_id   UUID REFERENCES users(id),
  shop_id       UUID REFERENCES shops(id),

  -- Type
  order_type    VARCHAR(20) NOT NULL,       -- 'instant' | 'pre_booking'
  fulfillment   VARCHAR(20) NOT NULL,       -- 'pickup' | 'delivery'

  -- Delivery address (snapshot at order time)
  delivery_address  JSONB,

  -- Pricing
  subtotal      DECIMAL(10, 2) NOT NULL,
  delivery_fee  DECIMAL(10, 2) DEFAULT 0,
  discount      DECIMAL(10, 2) DEFAULT 0,
  total         DECIMAL(10, 2) NOT NULL,

  -- Payment
  payment_method VARCHAR(20) NOT NULL,      -- 'upi' | 'cod'
  payment_status VARCHAR(20) DEFAULT 'pending',
                 -- 'pending' | 'paid' | 'failed' | 'refunded'

  -- Status
  status        VARCHAR(30) DEFAULT 'placed',
                -- 'placed' | 'seller_notified' | 'accepted' | 'rejected' |
                -- 'preparing' | 'ready' | 'out_for_delivery' |
                -- 'delivered' | 'picked_up' | 'completed' |
                -- 'cancelled' | 'disputed'

  -- Timing
  estimated_ready_at  TIMESTAMPTZ,
  pickup_slot         VARCHAR(30),          -- 'morning_7_9' | 'morning_9_11' | 'afternoon'

  -- Notes
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

  -- Snapshot at order time
  product_name  VARCHAR(200) NOT NULL,
  product_price DECIMAL(10, 2) NOT NULL,
  unit          VARCHAR(30),
  quantity      INT NOT NULL DEFAULT 1,
  total         DECIMAL(10, 2) NOT NULL,

  notes         VARCHAR(200)              -- "thoda kam mirchi dena"
);

CREATE TABLE order_status_log (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id      UUID REFERENCES orders(id) ON DELETE CASCADE,
  status        VARCHAR(30) NOT NULL,
  changed_by    UUID REFERENCES users(id),
  note          VARCHAR(500),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PRE-BOOKING (VEGETABLES)
-- ============================================

CREATE TABLE vegetable_availability (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shop_id       UUID REFERENCES shops(id) ON DELETE CASCADE,

  available_date DATE NOT NULL,            -- The date these will be available

  -- Posted items
  items         JSONB NOT NULL,
  -- [
  --   {
  --     "name": "Tamatar (Tomato)",
  --     "name_hindi": "टमाटर",
  --     "estimated_price_per_kg": 40,
  --     "available_quantity_kg": 50,
  --     "image_url": "...",
  --     "quality_note": "Fresh from farm, Indore mandi"
  --   }
  -- ]

  is_confirmed  BOOLEAN DEFAULT FALSE,    -- Seller confirms morning prices
  confirmed_prices JSONB,                  -- Final prices after market

  posted_at     TIMESTAMPTZ DEFAULT NOW(),
  confirmed_at  TIMESTAMPTZ,

  UNIQUE(shop_id, available_date)
);

CREATE TABLE pre_bookings (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number VARCHAR(20) UNIQUE NOT NULL, -- AJB-PB-240317-001

  customer_id   UUID REFERENCES users(id),
  shop_id       UUID REFERENCES shops(id),
  availability_id UUID REFERENCES vegetable_availability(id),

  booking_date  DATE NOT NULL,             -- Date of pickup/delivery
  pickup_slot   VARCHAR(30) NOT NULL,      -- 'early_morning_6_8' | 'morning_8_10' | 'morning_10_12'
  fulfillment   VARCHAR(20) NOT NULL,      -- 'pickup' | 'delivery'

  -- Pricing (estimated → final)
  estimated_total DECIMAL(10, 2),
  final_total     DECIMAL(10, 2),          -- Set after price confirmation

  -- Payment
  payment_method  VARCHAR(20) NOT NULL,
  payment_status  VARCHAR(20) DEFAULT 'pending',

  -- Status
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
  final_price     DECIMAL(10, 2),          -- After morning confirmation

  notes           VARCHAR(200)             -- "pakke wale dena", "hari mirchi zyada"
);

-- ============================================
-- PAYMENTS
-- ============================================

CREATE TABLE payments (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id        UUID REFERENCES orders(id),
  pre_booking_id  UUID REFERENCES pre_bookings(id),

  amount          DECIMAL(10, 2) NOT NULL,
  method          VARCHAR(20) NOT NULL,    -- 'upi' | 'cod'
  status          VARCHAR(20) DEFAULT 'pending',
                  -- 'pending' | 'initiated' | 'success' | 'failed' | 'refunded'

  -- UPI specific
  upi_transaction_id  VARCHAR(100),
  upi_ref_number      VARCHAR(100),

  -- COD specific
  cod_collected       BOOLEAN DEFAULT FALSE,
  cod_collected_at    TIMESTAMPTZ,

  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- REVIEWS & RATINGS
-- ============================================

CREATE TABLE reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id   UUID REFERENCES users(id),
  shop_id       UUID REFERENCES shops(id),
  order_id      UUID REFERENCES orders(id),

  rating        INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment       TEXT,

  -- Seller response
  seller_reply  TEXT,
  replied_at    TIMESTAMPTZ,

  is_active     BOOLEAN DEFAULT TRUE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- NOTIFICATIONS
-- ============================================

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

-- ============================================
-- INDEXES
-- ============================================

CREATE INDEX idx_shops_area ON shops(area);
CREATE INDEX idx_shops_type ON shops(shop_type);
CREATE INDEX idx_shops_location ON shops USING GIST (
  point(longitude, latitude)
);
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
```

---

## 6. API Design

### 6.1 API Routes Structure

```
/api/bazaar/
├── auth/
│   ├── POST   /send-otp          # Send OTP to phone
│   ├── POST   /verify-otp        # Verify OTP & login
│   └── GET    /me                 # Get current user profile
│
├── shops/
│   ├── GET    /                   # List shops (with filters)
│   ├── GET    /:slug              # Get shop details
│   ├── POST   /                   # Create shop (seller)
│   ├── PUT    /:id                # Update shop (owner)
│   ├── GET    /:id/products       # Get shop products
│   └── GET    /nearby             # Geolocation-based discovery
│
├── products/
│   ├── GET    /                   # Search products
│   ├── GET    /:id                # Product details
│   ├── POST   /                   # Add product (seller)
│   ├── PUT    /:id                # Update product (seller)
│   └── DELETE /:id                # Remove product (seller)
│
├── cart/
│   ├── GET    /                   # Get cart
│   ├── POST   /items              # Add to cart
│   ├── PUT    /items/:id          # Update quantity
│   └── DELETE /items/:id          # Remove from cart
│
├── orders/
│   ├── POST   /                   # Place order
│   ├── GET    /                   # List orders (customer)
│   ├── GET    /:id                # Order details
│   ├── PUT    /:id/status         # Update status (seller)
│   ├── POST   /:id/cancel         # Cancel order
│   └── GET    /seller             # Seller's incoming orders
│
├── pre-booking/
│   ├── GET    /availability       # Tomorrow's vegetables
│   ├── POST   /availability       # Post availability (seller)
│   ├── PUT    /availability/:id/confirm  # Confirm prices (seller)
│   ├── POST   /book               # Create pre-booking (customer)
│   ├── GET    /my-bookings        # Customer's bookings
│   ├── GET    /seller-bookings    # Seller's received bookings
│   └── PUT    /:id/status         # Update booking status
│
├── payments/
│   ├── POST   /initiate-upi      # Generate UPI payment link
│   ├── POST   /verify             # Verify payment callback
│   └── POST   /webhook            # Payment gateway webhook
│
├── reviews/
│   ├── POST   /                   # Add review
│   ├── GET    /shop/:shopId       # Shop reviews
│   └── POST   /:id/reply          # Seller reply
│
└── notifications/
    ├── GET    /                   # User's notifications
    ├── PUT    /:id/read           # Mark as read
    └── POST   /register-token     # Register push token
```

### 6.2 Key API Examples

```typescript
// POST /api/bazaar/pre-booking/book
// Customer pre-books vegetables for tomorrow

Request:
{
  "shop_id": "uuid",
  "booking_date": "2026-03-18",
  "pickup_slot": "morning_8_10",
  "fulfillment": "pickup",
  "payment_method": "cod",
  "items": [
    {
      "vegetable_name": "Tomato",
      "name_hindi": "टमाटर",
      "quantity_kg": 2,
      "notes": "Pakke wale dena"
    },
    {
      "vegetable_name": "Onion",
      "name_hindi": "प्याज",
      "quantity_kg": 3
    },
    {
      "vegetable_name": "Green Chili",
      "name_hindi": "हरी मिर्च",
      "quantity_kg": 0.25,
      "notes": "Teekhi wali"
    }
  ],
  "customer_note": "Please pack separately"
}

Response:
{
  "success": true,
  "booking": {
    "id": "uuid",
    "booking_number": "AJB-PB-260318-001",
    "status": "booked",
    "estimated_total": 145.00,
    "message": "Booking confirmed! Prices will be finalized tomorrow morning by 7 AM."
  }
}
```

```typescript
// GET /api/bazaar/shops/nearby?lat=22.5567&lng=75.7601&radius=3
// Discover shops near the customer

Response:
{
  "shops": [
    {
      "id": "uuid",
      "name": "Raju Kirana Store",
      "shop_type": "kirana",
      "area": "Nai Sadak, Mhow",
      "distance_km": 0.8,
      "is_open": true,
      "avg_rating": 4.3,
      "total_ratings": 156,
      "delivery_charge": 20,
      "free_delivery_above": 200,
      "logo_url": "...",
      "opening_time": "08:00",
      "closing_time": "21:00",
      "offers_delivery": true,
      "offers_pickup": true,
      "top_products": ["Atta", "Rice", "Oil", "Dal"]
    }
  ],
  "total": 24,
  "page": 1
}
```

---

## 7. Frontend Architecture

### 7.1 Route Structure

```
/bazaar                           → Marketplace home (categories, featured shops)
/bazaar/search                    → Search results
/bazaar/category/:slug            → Category listing (e.g., /bazaar/category/sabzi)
/bazaar/shop/:slug                → Shop storefront page
/bazaar/shop/:slug/product/:id    → Product detail
/bazaar/cart                      → Shopping cart
/bazaar/checkout                  → Checkout flow
/bazaar/orders                    → My orders
/bazaar/orders/:id                → Order tracking
/bazaar/pre-book                  → Pre-booking hub (tomorrow's vegetables)
/bazaar/pre-book/:shopSlug        → Pre-book from specific seller
/bazaar/pre-book/my-bookings      → My pre-bookings
/bazaar/profile                   → Customer profile & addresses

/seller                           → Seller dashboard home
/seller/products                  → Manage products
/seller/products/add              → Add new product
/seller/orders                    → Incoming orders
/seller/pre-bookings              → Pre-booking management
/seller/availability              → Post tomorrow's vegetables
/seller/earnings                  → Earnings & payouts
/seller/shop-settings             → Shop profile settings
/seller/register                  → New seller registration

/admin/bazaar                     → Admin dashboard
/admin/bazaar/sellers             → Manage sellers
/admin/bazaar/orders              → Monitor orders
/admin/bazaar/analytics           → Platform analytics
/admin/bazaar/disputes            → Handle disputes
```

### 7.2 Key UI Components

```
components/bazaar/
├── layout/
│   ├── BazaarNavbar.tsx          # Marketplace-specific navigation
│   ├── BazaarFooter.tsx          # Marketplace footer
│   ├── BottomNav.tsx             # Mobile bottom navigation bar
│   └── SearchBar.tsx             # Global search component
│
├── home/
│   ├── CategoryGrid.tsx          # Category icons grid (sabzi, kirana, etc.)
│   ├── FeaturedShops.tsx         # Highlighted/trending shops
│   ├── NearbyShops.tsx           # Shops near you with distance
│   ├── PreBookBanner.tsx         # "Book tomorrow's sabzi" CTA banner
│   └── QuickReorder.tsx          # Reorder from recent orders
│
├── shop/
│   ├── ShopHeader.tsx            # Shop banner, name, rating, timing
│   ├── ShopProductGrid.tsx       # Product listing with categories
│   ├── ShopInfo.tsx              # Address, timings, delivery info
│   └── ShopReviews.tsx           # Ratings and reviews section
│
├── product/
│   ├── ProductCard.tsx           # Product card (image, price, add-to-cart)
│   ├── ProductDetail.tsx         # Full product view
│   ├── QuantitySelector.tsx      # +/- quantity picker
│   └── UnitSelector.tsx          # kg, 500g, piece selector
│
├── cart/
│   ├── CartDrawer.tsx            # Slide-in cart panel
│   ├── CartItem.tsx              # Individual cart item row
│   ├── CartSummary.tsx           # Subtotal, delivery fee, total
│   └── FulfillmentSelector.tsx   # Pickup vs Delivery toggle
│
├── checkout/
│   ├── AddressSelector.tsx       # Choose/add delivery address
│   ├── PaymentSelector.tsx       # UPI / COD selection
│   ├── OrderSummary.tsx          # Final review before placing
│   └── UPIPayment.tsx            # UPI payment flow
│
├── orders/
│   ├── OrderCard.tsx             # Order summary card
│   ├── OrderTimeline.tsx         # Status timeline visualization
│   └── OrderDetail.tsx           # Full order details
│
├── pre-booking/
│   ├── VegetableAvailability.tsx # Tomorrow's vegetables grid
│   ├── VegetableCard.tsx         # Individual vegetable with price
│   ├── PreBookCart.tsx           # Pre-booking cart
│   ├── PickupSlotSelector.tsx    # Morning slot selection
│   ├── PriceConfirmation.tsx     # Morning price confirmation view
│   └── BookingCard.tsx           # Pre-booking status card
│
├── seller/
│   ├── SellerDashboard.tsx       # Overview with stats
│   ├── ProductForm.tsx           # Add/edit product form
│   ├── OrderManagement.tsx       # Accept/reject/update orders
│   ├── AvailabilityForm.tsx      # Post tomorrow's vegetables
│   ├── EarningsChart.tsx         # Revenue analytics
│   └── ShopSettingsForm.tsx      # Edit shop details
│
└── shared/
    ├── RatingStars.tsx           # Star rating display/input
    ├── DistanceBadge.tsx         # "0.8 km away" badge
    ├── StatusBadge.tsx           # Order/booking status pill
    ├── EmptyState.tsx            # No results/no orders states
    ├── LoadingSkeleton.tsx       # Loading skeleton screens
    └── LocationPicker.tsx        # Map-based location selection
```

### 7.3 UI Screens (Wireframe Descriptions)

#### Customer Home Screen
```
┌──────────────────────────────────┐
│  📍 Mhow, Nai Sadak      🔔 👤 │
├──────────────────────────────────┤
│  🔍 Search shops, products...   │
├──────────────────────────────────┤
│                                  │
│  ┌──────────────────────────┐   │
│  │  🥬 Book Tomorrow's      │   │
│  │  Sabzi Now!              │   │
│  │  Fresh vegetables from    │   │
│  │  local sellers → Book    │   │
│  └──────────────────────────┘   │
│                                  │
│  ── Categories ──────────────   │
│  🛒 Kirana  🥬 Sabzi  🍎 Fruit │
│  🥛 Dairy   🍞 Bakery 📱 Mobile│
│  💊 Medical 🔧 Hardware   More →│
│                                  │
│  ── Shops Near You ─────────    │
│  ┌──────────┐ ┌──────────┐     │
│  │ Raju     │ │ Gupta    │     │
│  │ Kirana   │ │ General  │     │
│  │ ⭐ 4.3   │ │ ⭐ 4.1   │     │
│  │ 0.8 km   │ │ 1.2 km   │     │
│  └──────────┘ └──────────┘     │
│                                  │
│  ── Sabzi Sellers ──────────    │
│  ┌──────────┐ ┌──────────┐     │
│  │ Ramesh   │ │ Kamla    │     │
│  │ Sabzi    │ │ Sabzi    │     │
│  │ 🕐 6AM-12│ │ 🕐 7AM-11│     │
│  │ Pre-book →│ │ Pre-book →│     │
│  └──────────┘ └──────────┘     │
│                                  │
├──────────────────────────────────┤
│  🏠 Home  🔍 Search  🛒 Cart  👤│
└──────────────────────────────────┘
```

#### Pre-Booking Screen
```
┌──────────────────────────────────┐
│  ← Tomorrow's Vegetables        │
│  Wednesday, 18 March 2026       │
├──────────────────────────────────┤
│                                  │
│  Ramesh Sabzi Wala              │
│  📍 Shivaji Chowk, Mhow        │
│                                  │
│  ── Available Tomorrow ───────  │
│                                  │
│  ┌────────────────────────────┐ │
│  │ 🍅 Tamatar (टमाटर)        │ │
│  │ Est. ₹40/kg | Farm fresh  │ │
│  │ [  -  ] [ 1 kg ] [  +  ]  │ │
│  │ Note: Pakke wale dena      │ │
│  └────────────────────────────┘ │
│                                  │
│  ┌────────────────────────────┐ │
│  │ 🧅 Pyaaz (प्याज)          │ │
│  │ Est. ₹30/kg               │ │
│  │ [  -  ] [ 2 kg ] [  +  ]  │ │
│  └────────────────────────────┘ │
│                                  │
│  ┌────────────────────────────┐ │
│  │ 🌶️ Hari Mirch (हरी मिर्च) │ │
│  │ Est. ₹60/kg               │ │
│  │ [  -  ] [250g ] [  +  ]   │ │
│  └────────────────────────────┘ │
│                                  │
│  ── Pickup Slot ─────────────   │
│  ○ 6-8 AM (Early Bird)         │
│  ● 8-10 AM                      │
│  ○ 10-12 PM                     │
│                                  │
│  ── How to get ──────────────   │
│  [● Pickup] [○ Delivery +₹20]  │
│                                  │
├──────────────────────────────────┤
│  Est. Total: ₹145               │
│  [    Pre-Book Now    ]         │
│  * Final price confirmed by 7AM │
└──────────────────────────────────┘
```

---

## 8. Pre-Booking System (Vegetables) — Deep Dive

### 8.1 Complete Flow

```
DAY BEFORE (Evening 4-8 PM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SELLER                              CUSTOMER
  ──────                              ────────
  1. Posts tomorrow's               2. Browses available
     vegetable list                    vegetables
     - Names & photos                  - Sees estimated prices
     - Estimated prices                - Selects items & qty
     - Quality notes                   - Chooses pickup slot
     - Available quantity              - Places pre-booking

  3. Receives booking
     notifications                   4. Gets confirmation
     - Sees total demand               "Booking confirmed!
     - Plans procurement               Prices finalize by 7 AM"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BOOKING DAY (Morning 5-7 AM)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SELLER                              CUSTOMER
  ──────                              ────────
  5. Goes to mandi/market
     - Buys based on bookings
     - Knows exact demand

  6. Confirms final prices          7. Gets price notification
     (may differ from estimate)        "Your sabzi total: ₹152"
     - Updates actual prices           "Estimated was ₹145"
     - Marks items available
                                    8. Confirms or modifies
                                       - Accept new price
                                       - Remove items if too expensive
                                       - Cancel (no penalty)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BOOKING DAY (Pickup/Delivery Window)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SELLER                              CUSTOMER
  ──────                              ────────
  9. Packs pre-booked orders        10. Gets "Your order is ready"
     - Separates by customer             notification
     - Marks as READY
                                    11a. PICKUP: Goes to seller
                                         - Shows booking ID
                                         - Pays (UPI/Cash)
                                         - Picks up bag

                                    11b. DELIVERY: Seller delivers
                                         - Tracks on map
                                         - Pays on delivery

  12. Marks as completed            13. Rates the experience
      - Payment received                - Quality, freshness
      - Updates earnings                - Accuracy of order
```

### 8.2 Pre-Booking Business Rules

```yaml
Timing Rules:
  - Seller can post availability: 4 PM to 10 PM (day before)
  - Customer can book: Until 10 PM (night before)
  - Seller confirms prices: 5 AM to 7 AM (morning of)
  - Customer confirms/modifies: 7 AM to 8 AM
  - Pickup window starts: Based on selected slot
  - Auto-cancel unconfirmed: After 8:30 AM

Pricing Rules:
  - Estimated price: Set by seller based on expected market rate
  - Price tolerance: ±20% from estimate (configurable)
  - If price goes up >20%: Customer gets option to cancel for free
  - If price goes down: Customer automatically gets lower price

Quantity Rules:
  - Minimum booking: 250g per vegetable
  - Quantity steps: 250g, 500g, 1kg, 2kg, 5kg
  - Max per item: 10kg (to prevent hoarding)
  - Seller can cap total bookings per item

Cancellation Rules:
  - Customer can cancel anytime before price confirmation: Free
  - Customer can cancel after price confirmation: Free (within 30 min)
  - Seller cancels: Customer gets priority booking next time
  - No-show (customer): Tracked, 3 no-shows = temporary block
```

---

## 9. Payment Flow

### 9.1 UPI Payment Flow

```
Customer                     App Server                  UPI Gateway
────────                     ──────────                  ───────────
    │                            │                            │
    │  1. Select "Pay via UPI"   │                            │
    │──────────────────────────→│                            │
    │                            │  2. Create payment intent  │
    │                            │──────────────────────────→│
    │                            │  3. Return UPI deep link   │
    │                            │←──────────────────────────│
    │  4. UPI app opens          │                            │
    │  (GPay/PhonePe/Paytm)     │                            │
    │                            │                            │
    │  5. Customer approves      │                            │
    │  payment in UPI app        │                            │
    │                            │                            │
    │                            │  6. Webhook: payment success│
    │                            │←──────────────────────────│
    │                            │                            │
    │  7. Order confirmed!       │  8. Update order status    │
    │←──────────────────────────│  9. Notify seller          │
    │                            │                            │
```

### 9.2 COD Flow

```
Customer places order → Order status: PLACED (payment: pending)
     ↓
Seller accepts → PREPARING → READY/OUT_FOR_DELIVERY
     ↓
Customer receives order → Pays cash to seller/delivery person
     ↓
Seller marks "Payment Collected" → Order: COMPLETED (payment: paid)
     ↓
Platform commission deducted from seller's payout
```

### 9.3 UPI Integration (Simplified — No Razorpay)

For UPI-only integration without a full payment gateway:

```typescript
// Option 1: UPI Intent (Deep Link) — FREE, no gateway needed
// Generate a UPI payment link that opens the customer's UPI app

function generateUPILink(params: {
  sellerUpiId: string;     // seller's UPI ID, e.g., "raju@upi"
  amount: number;
  orderId: string;
  shopName: string;
}) {
  const upiUrl = new URL('upi://pay');
  upiUrl.searchParams.set('pa', params.sellerUpiId);   // Payee address
  upiUrl.searchParams.set('pn', params.shopName);       // Payee name
  upiUrl.searchParams.set('am', params.amount.toString());
  upiUrl.searchParams.set('cu', 'INR');
  upiUrl.searchParams.set('tn', `AJ's Bazaar Order ${params.orderId}`);
  upiUrl.searchParams.set('tr', params.orderId);        // Transaction ref
  return upiUrl.toString();
}

// Option 2: UPI QR Code — Seller shows QR, customer scans
// Use a QR library to generate QR from the UPI link above
```

---

## 10. Notification System

### 10.1 Notification Triggers

```yaml
Customer Notifications:
  - order_placed:        "Order #AJB-001 placed successfully!"
  - order_accepted:      "Raju Kirana accepted your order. Preparing now..."
  - order_rejected:      "Sorry, Raju Kirana couldn't accept your order. Refund initiated."
  - order_ready:         "Your order is ready for pickup at Raju Kirana!"
  - order_out:           "Your order is out for delivery!"
  - order_delivered:     "Order delivered! Rate your experience."
  - prebooking_confirmed: "Tomorrow's sabzi booking confirmed! Est. ₹145"
  - price_update:        "Sabzi prices updated. Your total: ₹152. Confirm by 8 AM."
  - pickup_reminder:     "Your sabzi is ready! Pickup before 10 AM at Ramesh Sabzi."

Seller Notifications:
  - new_order:           "New order from Sharma ji! ₹340 — Accept/Reject"
  - new_prebooking:      "3 new pre-bookings for tomorrow. View demand →"
  - confirm_prices:      "Time to confirm today's prices. 5 customers waiting."
  - payment_received:    "₹340 received via UPI from Sharma ji"
  - review_received:     "New 5⭐ review: 'Best sabzi in Mhow!'"
  - low_stock:           "Tomato stock low (2 kg left). Update inventory?"

Channel Priority:
  1. Push Notification (FCM) — Primary
  2. WhatsApp Message — For critical updates (order accepted, price confirmation)
  3. SMS — Fallback for non-smartphone users
  4. In-App — Always stored for in-app notification center
```

### 10.2 WhatsApp Integration

```yaml
WhatsApp Business API Templates:

  order_confirmation:
    "🛒 *AJ's Bazaar*
     Order #{{order_number}} confirmed!
     Shop: {{shop_name}}
     Items: {{item_count}} items
     Total: ₹{{total}}
     {{fulfillment_type}}: {{time_estimate}}

     Track: {{tracking_link}}"

  prebooking_price_update:
    "🥬 *Sabzi Price Update*
     Hi {{customer_name}},

     Tomorrow's prices are confirmed:
     {{item_list}}

     New Total: ₹{{final_total}}
     (Estimated: ₹{{estimated_total}})

     ✅ Confirm: {{confirm_link}}
     ❌ Cancel: {{cancel_link}}

     Pickup: {{slot_time}} at {{shop_name}}"
```

---

## 11. Admin Dashboard

### 11.1 Admin Features

```
Admin Dashboard Sections:
├── Overview
│   ├── Total orders today / this week / this month
│   ├── Total revenue & platform commission earned
│   ├── Active sellers & customers count
│   ├── Pre-bookings summary
│   └── Live orders map
│
├── Seller Management
│   ├── Pending verification queue
│   ├── Seller list with status (active/suspended/pending)
│   ├── Seller performance metrics
│   ├── Shop verification (ID proof, shop photos)
│   └── Commission rate management
│
├── Order Monitoring
│   ├── Live order feed
│   ├── Stuck orders (no status update > 30 min)
│   ├── Cancelled orders & reasons
│   └── Order search & filter
│
├── Pre-Booking Analytics
│   ├── Daily vegetable demand heatmap
│   ├── Most booked vegetables
│   ├── Price trend tracking
│   └── No-show tracking
│
├── Financial
│   ├── Daily transaction summary
│   ├── Seller payouts pending
│   ├── Commission report
│   ├── COD collection tracking
│   └── Refund management
│
├── Disputes & Support
│   ├── Open dispute queue
│   ├── Customer complaints
│   ├── Seller issues
│   └── Resolution history
│
└── Settings
    ├── Category management
    ├── Area/locality management (Mhow zones)
    ├── Platform fee configuration
    ├── Notification templates
    └── Feature flags
```

---

## 12. Tech Stack

### 12.1 Recommended Stack

```yaml
Frontend:
  Framework:    Next.js 16 (App Router) — already in use
  UI Library:   React 19
  Styling:      Tailwind CSS 4 — already in use
  State:        Zustand (lightweight, simple)
  Forms:        React Hook Form + Zod validation
  Data Fetch:   TanStack Query (React Query) for caching & real-time
  Maps:         Leaflet.js (free) or Google Maps
  PWA:          next-pwa for installable mobile experience
  Icons:        Lucide React (already used)

Backend:
  Runtime:      Next.js API Routes (initially) → separate Node.js service later
  API Layer:    tRPC (type-safe) or REST with Zod validation
  Database:     PostgreSQL via Supabase (free tier: 500MB, 2 projects)
  Auth:         Supabase Auth (phone OTP built-in)
  File Storage: Supabase Storage or Cloudflare R2 (for product images)
  Caching:      Supabase Realtime + local React Query cache
  Search:       PostgreSQL full-text search (good enough for <10K products)

Payments:
  UPI:          Direct UPI intent links (free, no gateway)
  COD:          Manual tracking in database
  Future:       Razorpay/Cashfree when volume grows

Notifications:
  Push:         Firebase Cloud Messaging (FCM) — free
  WhatsApp:     WhatsApp Business API (via providers like Twilio/Gupshup)
  SMS:          Twilio or MSG91 (Indian provider, cheaper)

DevOps:
  Hosting:      Vercel (free tier, already used)
  Database:     Supabase (free tier)
  CDN/Images:   Cloudflare R2 + Image optimization
  Monitoring:   Vercel Analytics + Supabase Dashboard
  CI/CD:        Vercel auto-deploy from GitHub

Mobile Strategy:
  Phase 1:      PWA (Progressive Web App) — installable, works offline
  Phase 2:      React Native / Expo wrapper if app store presence needed
```

### 12.2 Key Dependencies

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.x",
    "@supabase/auth-helpers-nextjs": "^0.x",
    "@tanstack/react-query": "^5.x",
    "zustand": "^5.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "lucide-react": "latest",
    "leaflet": "^1.x",
    "react-leaflet": "^4.x",
    "qrcode": "^1.x",
    "date-fns": "^3.x"
  }
}
```

---

## 13. Deployment & Infrastructure

### 13.1 Infrastructure Diagram

```
┌─────────────────────────────────────────────┐
│                  VERCEL                       │
│  ┌─────────────────────────────────────────┐ │
│  │  Next.js Application                    │ │
│  │  - SSR Pages (shop, product)            │ │
│  │  - API Routes (/api/bazaar/*)           │ │
│  │  - Static pages (home, about)           │ │
│  │  - Edge functions (geolocation)         │ │
│  └────────────────────┬────────────────────┘ │
└───────────────────────┼──────────────────────┘
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
┌──────────────┐ ┌────────────┐ ┌──────────────┐
│   SUPABASE   │ │ CLOUDFLARE │ │   FIREBASE   │
│              │ │    R2      │ │              │
│ - PostgreSQL │ │            │ │ - FCM Push   │
│ - Auth (OTP) │ │ - Product  │ │   Notifs     │
│ - Realtime   │ │   images   │ │              │
│ - Storage    │ │ - Shop     │ │              │
│              │ │   photos   │ │              │
└──────────────┘ └────────────┘ └──────────────┘
```

### 13.2 Cost Estimate (Starting)

```yaml
Monthly Cost Breakdown (Starting Phase):
  Vercel Free Tier:           ₹0     (100GB bandwidth, serverless)
  Supabase Free Tier:         ₹0     (500MB DB, 50K auth users, 1GB storage)
  Cloudflare R2 Free:         ₹0     (10GB storage, 10M requests)
  Firebase FCM:               ₹0     (unlimited push notifications)
  WhatsApp Business API:      ~₹500  (pay per message, ~500 messages)
  SMS (MSG91):                ~₹300  (for OTP, ~1000 SMS)
  Domain:                     ~₹800/year

  TOTAL (Starting):           ~₹800-1000/month

Scaling Phase (1000+ orders/day):
  Vercel Pro:                 ~₹1,600/month
  Supabase Pro:               ~₹2,000/month
  Additional infra:           ~₹1,000/month

  TOTAL (Scaled):             ~₹5,000-8,000/month
```

---

## 14. Security

### 14.1 Security Measures

```yaml
Authentication:
  - Phone OTP verification (Supabase Auth)
  - JWT tokens with role claims
  - Session management with refresh tokens
  - Rate limiting on OTP requests (5/hour per phone)

Authorization:
  - Row Level Security (RLS) in Supabase
  - Sellers can only modify their own shop/products
  - Customers can only view their own orders
  - Admin-only routes protected by role check

Data Protection:
  - All API calls over HTTPS
  - Sensitive data encrypted at rest (Supabase default)
  - Phone numbers partially masked in UI
  - UPI IDs only shown to order participants
  - No card data stored (UPI handles payment)

Input Validation:
  - Zod schemas for all API inputs
  - SQL injection prevented by Supabase query builder
  - XSS prevented by React's default escaping
  - File upload validation (type, size limits)

Rate Limiting:
  - API: 100 requests/minute per user
  - Search: 30 requests/minute
  - Order placement: 5/minute
  - OTP: 5/hour per phone number

Seller Verification:
  - Phone number verification (mandatory)
  - Shop photo verification (admin review)
  - Aadhaar/PAN optional for higher limits
  - Address verification via geolocation
```

---

## 15. Monetization

### 15.1 Revenue Model

```yaml
Phase 1 (Launch — First 6 months): FREE for all
  - Goal: Onboard 50+ sellers, 500+ customers
  - Zero commission, zero fees
  - Build trust and adoption in Mhow

Phase 2 (Growth): Light Monetization
  - Platform commission: 2-5% per order (seller pays)
  - Delivery convenience fee: ₹10-20 (customer pays)
  - Featured listing: ₹50/day for top placement
  - No commission on pre-bookings (incentivize feature adoption)

Phase 3 (Scale): Full Monetization
  - Tiered commission: 3-8% based on category
  - Premium seller tools: ₹299/month
    - Analytics dashboard
    - Bulk upload
    - Priority support
    - Custom shop URL
  - Advertising: Promoted products in search
  - Subscription boxes: Weekly sabzi basket subscription

Revenue Projections:
  100 orders/day × ₹200 avg × 3% commission = ₹600/day = ~₹18,000/month
  500 orders/day × ₹250 avg × 5% commission = ₹6,250/day = ~₹1,87,500/month
```

---

## 16. Phase-wise Roadmap

### Phase 1: MVP (4-6 weeks)
```
Week 1-2: Foundation
  ☐ Set up Supabase (DB, Auth, Storage)
  ☐ Database schema & migrations
  ☐ Auth flow (Phone OTP login)
  ☐ Basic UI layout (Navbar, Footer, BottomNav)

Week 3-4: Core Marketplace
  ☐ Shop registration & profile
  ☐ Product CRUD (seller)
  ☐ Browse shops & products (customer)
  ☐ Search & category filters
  ☐ Cart & checkout flow
  ☐ COD orders (UPI in Phase 2)
  ☐ Order status management

Week 5-6: Pre-Booking MVP
  ☐ Vegetable availability posting (seller)
  ☐ Pre-booking flow (customer)
  ☐ Price confirmation workflow
  ☐ Basic notifications (in-app)
  ☐ PWA setup (installable)
  ☐ Testing & bug fixes

LAUNCH MVP 🚀
```

### Phase 2: Enhancement (4-6 weeks)
```
  ☐ UPI payment integration
  ☐ Push notifications (FCM)
  ☐ WhatsApp notifications
  ☐ Ratings & reviews
  ☐ Order history & reorder
  ☐ Seller analytics dashboard
  ☐ Geolocation-based shop discovery
  ☐ Image optimization & CDN
  ☐ SEO optimization for shops
```

### Phase 3: Growth (6-8 weeks)
```
  ☐ Admin dashboard
  ☐ Seller verification system
  ☐ Dispute management
  ☐ Subscription vegetable baskets
  ☐ Chat between customer & seller
  ☐ Price comparison across shops
  ☐ Promotional offers system
  ☐ Payout management
  ☐ Advanced analytics
```

### Phase 4: Scale
```
  ☐ Expand to nearby towns (Indore, Pithampur)
  ☐ Delivery boy management
  ☐ React Native mobile app
  ☐ AI-powered recommendations
  ☐ Multi-language support (Hindi UI)
  ☐ Bulk ordering for businesses
```

---

## 17. AI Prompt for Development

Use this prompt when building AJ's Bazaar with an AI assistant:

---

### Master Development Prompt

```
You are building "AJ's Bazaar" — a hyperlocal marketplace for Mhow, India.

PROJECT CONTEXT:
- Part of the "AJ's Chalo Seekhen" ecosystem (Next.js 16, React 19, Tailwind CSS 4)
- Hyperlocal marketplace connecting Mhow shopkeepers, vegetable sellers, and customers
- Inspired by Zepto/Blinkit but designed for small-town India
- Key differentiator: Vegetable pre-booking system

TECH STACK:
- Frontend: Next.js 16 (App Router), React 19, Tailwind CSS 4, Zustand, TanStack Query
- Backend: Supabase (PostgreSQL, Auth with Phone OTP, Storage, Realtime)
- Payments: UPI deep links (free) + Cash on Delivery
- Notifications: Firebase FCM + WhatsApp Business API
- Hosting: Vercel + Supabase + Cloudflare R2

DESIGN PRINCIPLES:
1. Mobile-first PWA — most users are on smartphones
2. Hindi + English bilingual — show Hindi names alongside English
3. Minimal data entry — phone login, photo-based product listing
4. Offline-resilient — handle poor network gracefully
5. Dark theme consistent with existing AJ's branding (black bg, gradient accents)
6. Fast — optimize for 3G/4G Indian mobile networks

USER ROLES:
1. Customer (Grahak) — browses, orders, pre-books vegetables
2. Seller (Dukaandar) — manages shop, products, orders
3. Sabzi Wala — simplified seller focused on vegetable pre-booking
4. Admin — verifies sellers, monitors orders, handles disputes

CORE FLOWS:
1. Customer browses nearby shops → adds to cart → checkout (pickup/delivery) → pays (UPI/COD)
2. Sabzi seller posts tomorrow's vegetables → customer pre-books → morning price confirmation → pickup/delivery
3. Seller manages products, accepts/rejects orders, tracks earnings

ROUTE STRUCTURE:
- /bazaar/* — Customer-facing marketplace
- /seller/* — Seller dashboard
- /admin/bazaar/* — Admin panel

DATABASE: PostgreSQL via Supabase with tables for:
users, addresses, categories, shops, shop_categories, products, product_images,
orders, order_items, order_status_log, vegetable_availability, pre_bookings,
pre_booking_items, payments, reviews, notifications

IMPORTANT RULES:
- Use Supabase client for all DB operations (no raw SQL in frontend)
- Implement Row Level Security (RLS) policies
- All forms validated with Zod schemas
- Use React Query for server state, Zustand for client state
- Components in src/components/bazaar/
- Pages in src/app/bazaar/, src/app/seller/, src/app/admin/bazaar/
- Reuse existing components (Navbar, Footer, ScrollReveal) where possible
- Follow existing code patterns and styling conventions
```

### Feature-Specific Prompts

```
PRE-BOOKING PROMPT:
"Build the vegetable pre-booking system for AJ's Bazaar.
Seller posts tomorrow's vegetable availability (evening, 4-10 PM) with names,
estimated prices, and quantities. Customer browses and books items with quantity
(250g/500g/1kg/2kg/5kg steps), selects pickup slot (6-8 AM / 8-10 AM / 10-12 PM),
chooses pickup or delivery. Next morning (5-7 AM), seller confirms actual market
prices. Customer gets notified and can confirm or cancel. Include the full state
machine: booked → prices_confirmed → customer_confirmed → preparing → ready → completed."

SELLER ONBOARDING PROMPT:
"Build the seller registration flow for AJ's Bazaar. Steps:
1. Phone OTP verification
2. Basic info (name, shop name)
3. Shop type selection (kirana, sabzi, dairy, etc.)
4. Shop photos (upload 1-5 photos)
5. Location (auto-detect + manual address with area/mohalla in Mhow)
6. Timings (opening/closing, off days)
7. Delivery settings (radius, charges, min order)
8. UPI ID (optional, for receiving payments)
The flow should be mobile-friendly with step progress indicator."

SHOP DISCOVERY PROMPT:
"Build the shop discovery page for AJ's Bazaar. Show:
1. Search bar at top
2. Category grid (sabzi, kirana, dairy, bakery, etc. with icons)
3. 'Pre-book Sabzi' banner (CTA to vegetable pre-booking)
4. Nearby shops list (sorted by distance) with shop card showing:
   name, type, rating, distance, delivery info, open/closed status
5. Filter by: category, delivery available, open now, rating
6. Use geolocation API for distance calculation
All within the existing dark theme design system."
```

---

## Appendix A: Mhow-Specific Considerations

```yaml
Local Areas (for delivery zones):
  - Nai Sadak
  - Chawni (Cantonment)
  - Station Road
  - Shivaji Chowk
  - Gandhi Chowk
  - Simrol Road
  - Rau-Mhow Road
  - Kishanganj
  - Manpur Road
  - Dr. Ambedkar Nagar

Local Context:
  - Primary language: Hindi (UI should support Hindi labels)
  - Most popular categories: Sabzi, Kirana, Dairy, Medical
  - Peak sabzi buying: 6-10 AM
  - Most sellers close by: 9-10 PM
  - UPI adoption: Very high (GPay, PhonePe dominant)
  - Internet: 4G available, but speed varies
  - Target demographics: Middle-class families, students, working professionals
```

## Appendix B: Sample Data for Testing

```json
{
  "sample_shops": [
    {
      "name": "Raju Kirana Store",
      "name_hindi": "राजू किराना स्टोर",
      "type": "kirana",
      "area": "Nai Sadak",
      "products": ["Atta 5kg", "Toor Dal 1kg", "Refined Oil 1L", "Sugar 1kg", "Rice 5kg"]
    },
    {
      "name": "Ramesh Sabzi Wala",
      "name_hindi": "रमेश सब्ज़ी वाला",
      "type": "sabzi",
      "area": "Shivaji Chowk",
      "products": ["Tamatar", "Pyaaz", "Aloo", "Hari Mirch", "Dhaniya", "Palak", "Gobhi"]
    },
    {
      "name": "Gupta Dairy",
      "name_hindi": "गुप्ता डेयरी",
      "type": "dairy",
      "area": "Station Road",
      "products": ["Doodh 1L", "Dahi 500g", "Paneer 200g", "Ghee 500g", "Butter 100g"]
    },
    {
      "name": "Sharma Medical",
      "name_hindi": "शर्मा मेडिकल",
      "type": "medical",
      "area": "Gandhi Chowk",
      "products": ["OTC medicines", "First aid", "Baby care", "Personal care"]
    }
  ],
  "sample_vegetables": [
    { "name": "Tamatar (Tomato)", "hindi": "टमाटर", "price_range": "30-60/kg" },
    { "name": "Pyaaz (Onion)", "hindi": "प्याज", "price_range": "20-40/kg" },
    { "name": "Aloo (Potato)", "hindi": "आलू", "price_range": "20-35/kg" },
    { "name": "Hari Mirch (Green Chili)", "hindi": "हरी मिर्च", "price_range": "40-80/kg" },
    { "name": "Dhaniya (Coriander)", "hindi": "धनिया", "price_range": "10-20/bunch" },
    { "name": "Palak (Spinach)", "hindi": "पालक", "price_range": "20-40/bunch" },
    { "name": "Gobhi (Cauliflower)", "hindi": "गोभी", "price_range": "30-60/piece" },
    { "name": "Bhindi (Okra)", "hindi": "भिंडी", "price_range": "40-80/kg" },
    { "name": "Baingan (Brinjal)", "hindi": "बैंगन", "price_range": "30-50/kg" },
    { "name": "Lauki (Bottle Gourd)", "hindi": "लौकी", "price_range": "20-40/piece" }
  ]
}
```

---

*Document created: 17 March 2026*
*Project: AJ's Bazaar — Part of AJ's Chalo Seekhen Ecosystem*
*Status: Architecture Complete — Ready for Development*
