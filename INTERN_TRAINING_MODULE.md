# Chalo Seekhen — Full-Stack Intern Training Module (3 Months)

> **Stack:** Next.js 16 | React 19 | TypeScript | Tailwind CSS 4
> **Target:** College students & fresh graduates
> **End Goal:** Independently build & ship a LearnX module (Vaani, Prajna, Karma, etc.)

---

## Overview

| Phase | Duration | Theme | Outcome |
|-------|----------|-------|---------|
| **Phase 1** | Week 1–4 | Foundation & Fundamentals | Can build static + dynamic pages with Next.js |
| **Phase 2** | Week 5–8 | Full-Stack & Real Features | Can build API routes, DB integration, auth flows |
| **Phase 3** | Week 9–12 | Module Ownership & Ship It | Independently contributes to a live LearnX module |

---

## Phase 1 — Foundation & Fundamentals (Week 1–4)

### Week 1: Setup, Git & Web Basics

**Learning Goals:**
- Dev environment setup (VS Code, Node.js, Git, pnpm/npm)
- Git workflow — clone, branch, commit, push, pull request
- HTML & CSS refresher (only if needed)
- Intro to the Chalo Seekhen ecosystem — what each module does, why it exists

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Onboarding & ecosystem walkthrough | Set up dev environment, clone repo, run `npm run dev` |
| Tue | Git fundamentals | Create a branch, make a change, raise a PR |
| Wed | HTML/CSS refresher | Build a simple profile card in plain HTML/CSS |
| Thu | Intro to responsive design | Make the profile card responsive (mobile/tablet/desktop) |
| Fri | Week review + quiz | Present learnings, code review session |

**Mini Project:** Build a static "About Me" page and deploy on Vercel.

---

### Week 2: JavaScript & TypeScript Essentials

**Learning Goals:**
- JS fundamentals — variables, functions, arrays, objects, destructuring, spread
- Async JS — promises, async/await, fetch API
- TypeScript basics — types, interfaces, generics, type narrowing

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | JS fundamentals (variables, functions, loops) | Solve 10 coding problems |
| Tue | Arrays & objects (map, filter, reduce, destructuring) | Build a student data filter utility |
| Wed | Async JS (promises, async/await, fetch) | Fetch data from a public API and display it |
| Thu | TypeScript basics (types, interfaces) | Convert the JS utility to TypeScript |
| Fri | TypeScript advanced (generics, unions, type guards) | Type-safe API response handler |

**Mini Project:** Build a CLI quiz app in TypeScript (topic: LearnX module names & descriptions).

---

### Week 3: React Fundamentals

**Learning Goals:**
- Components, JSX, props, children
- State management with `useState`, `useReducer`
- Side effects with `useEffect`
- Event handling, conditional rendering, lists & keys

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Components, JSX, props | Build a reusable `ModuleCard` component (like the ones on the homepage) |
| Tue | State with `useState` | Add interactivity — toggle "Coming soon" / "Active" badge |
| Wed | `useEffect` & data fetching | Fetch and display a list of modules from a JSON file |
| Thu | Forms & event handling | Build a "Module Feedback" form |
| Fri | Composition & reusability | Refactor — create a shared `Badge`, `Card`, `Button` component library |

**Mini Project:** Build a "Module Explorer" — a searchable/filterable grid of all 12 LearnX modules.

---

### Week 4: Next.js Core Concepts

**Learning Goals:**
- App Router (file-based routing, layouts, pages, loading, error boundaries)
- Server Components vs Client Components
- `Link`, `Image`, `metadata` — Next.js built-ins
- Tailwind CSS 4 for styling

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | App Router — pages, layouts, nested routes | Create `/modules`, `/modules/[slug]` routes |
| Tue | Server Components vs Client Components (`"use client"`) | Refactor Module Explorer — server-fetch the list, client-handle the search |
| Wed | Next.js `<Link>`, `<Image>`, metadata, fonts | Add navigation, optimized images, SEO metadata |
| Thu | Tailwind CSS 4 — utility-first styling, responsive, dark mode | Style the Module Explorer with Tailwind (match Chalo Seekhen's dark theme) |
| Fri | Week 4 review + Phase 1 assessment | Present the Module Explorer, code review, feedback |

**Phase 1 Capstone:** Deploy the Module Explorer on Vercel. It should have:
- All 12 modules displayed in a grid
- Search & filter by category
- Individual module detail pages (`/modules/vaani`, `/modules/prajna`, etc.)
- Dark theme matching Chalo Seekhen's design
- Fully responsive

---

## Phase 2 — Full-Stack & Real Features (Week 5–8)

### Week 5: API Routes & Backend Basics

**Learning Goals:**
- Next.js Route Handlers (`app/api/...`)
- REST API design (GET, POST, PUT, DELETE)
- Request validation (Zod)
- Error handling patterns

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Route Handlers — GET & POST | Build `GET /api/modules` and `POST /api/modules/feedback` |
| Tue | Dynamic routes & params | Build `GET /api/modules/[slug]` |
| Wed | Request validation with Zod | Validate feedback form submissions server-side |
| Thu | Error handling & status codes | Add proper error responses (400, 404, 500) |
| Fri | API testing with Thunder Client / Postman | Test all endpoints, document with examples |

**Mini Project:** Build a "Module Feedback API" — users submit feedback for any module, stored in-memory first.

---

### Week 6: Database & ORM

**Learning Goals:**
- Database fundamentals (relational vs document)
- Prisma ORM — schema, migrations, CRUD
- Connecting Next.js to a database (PostgreSQL or MongoDB)
- Data modeling for the LearnX ecosystem

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Database concepts + Prisma setup | Install Prisma, connect to a local/cloud DB |
| Tue | Schema design | Model `User`, `Module`, `Feedback`, `Progress` |
| Wed | CRUD operations with Prisma | Wire up API routes to real DB (replace in-memory) |
| Thu | Relations & queries | Fetch modules with their feedback, user progress |
| Fri | Seeding & migrations | Seed all 12 modules, write migration scripts |

**Mini Project:** Persist the Module Feedback system to a real database.

---

### Week 7: Authentication & Authorization

**Learning Goals:**
- Auth concepts (sessions, tokens, JWT, OAuth)
- NextAuth.js (Auth.js) integration
- Protected routes & middleware
- Role-based access (student, admin, mentor)

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Auth concepts + NextAuth setup | Add Google OAuth sign-in |
| Tue | Session management | Display user info, protect dashboard routes |
| Wed | Middleware & protected API routes | Only authenticated users can submit feedback |
| Thu | Role-based access | Admin can view all feedback, student sees only their own |
| Fri | Auth edge cases | Handle expired sessions, unauthorized access, error states |

**Mini Project:** Add login/signup to the Module Explorer. Only logged-in users can submit feedback. Admin panel to view all feedback.

---

### Week 8: Server Actions, Caching & Performance

**Learning Goals:**
- Server Actions (form mutations without API routes)
- Caching strategies (static, dynamic, ISR, on-demand revalidation)
- Loading states, Suspense, streaming
- Performance optimization (lazy loading, code splitting)

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Server Actions — form submissions | Convert feedback form to use Server Actions |
| Tue | Caching & revalidation | Cache module list, revalidate on new feedback |
| Wed | Loading UI, Suspense, streaming | Add skeleton loaders, streaming for slow data |
| Thu | Performance audit | Lighthouse audit, fix issues, optimize images/fonts |
| Fri | Phase 2 assessment | Present full-stack app, code review, feedback |

**Phase 2 Capstone:** A full-stack "Module Explorer + Feedback" app with:
- Auth (Google login)
- Database-backed modules & feedback
- Admin panel
- Server Actions for mutations
- Optimized performance (Lighthouse score 90+)
- Deployed on Vercel

---

## Phase 3 — Module Ownership & Ship It (Week 9–12)

### Week 9: Codebase Deep-Dive & Module Assignment

**Learning Goals:**
- Understand the Chalo Seekhen production codebase
- Code conventions, folder structure, component patterns
- Learn how existing modules are structured
- Get assigned a specific module to own

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Codebase walkthrough with mentor | Read through the codebase, map the architecture |
| Tue | Component library & design system | Understand shared components, theming, patterns |
| Wed | Existing module deep-dive | Study one working module end-to-end |
| Thu | Module assignment + spec review | Receive module spec, ask clarifying questions |
| Fri | Technical design document | Write a 1-page plan: pages, components, APIs, data model |

**Module Assignment Options:**
| Module | Domain | Complexity |
|--------|--------|------------|
| Vaani | Vocabulary builder | Medium |
| Pratibimb | Self-reflection journal | Medium |
| Karma | Discipline & value tracking | Medium |
| Prayas | Practice & values exercises | Medium |
| Mitra | Peer learning/matching | High |
| Nirmaan | Creation & innovation tools | High |

---

### Week 10: Build Sprint 1 — Core Features

**Learning Goals:**
- Translate spec into working code
- Build the core user flow (2–3 main screens)
- Integrate with shared auth, DB, and component library
- Write clean, reviewable code

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Setup module structure | Create routes, layouts, base components |
| Tue | Core feature 1 | Build the primary user-facing screen |
| Wed | Core feature 2 | Build the secondary interaction/data entry screen |
| Thu | API & database | Wire up backend — API routes or Server Actions + DB |
| Fri | Code review + iteration | PR review with mentor, address feedback |

**Deliverable:** Working prototype of the module with 2–3 core screens.

---

### Week 11: Build Sprint 2 — Polish & Edge Cases

**Learning Goals:**
- Handle edge cases and error states
- Add loading/empty/error UI states
- Mobile responsiveness
- Basic testing (optional: Jest, Playwright)

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Edge cases & validation | Handle empty states, invalid inputs, errors |
| Tue | Responsive design pass | Test on mobile, tablet, desktop — fix breakpoints |
| Wed | UI polish & animations | Micro-interactions, transitions, final styling |
| Thu | Testing (if time allows) | Write 3–5 key tests (unit or integration) |
| Fri | Code review + iteration | Second PR review, final feedback |

**Deliverable:** Production-ready module with polished UI, error handling, and responsive design.

---

### Week 12: Deploy, Demo & Retrospective

**Learning Goals:**
- Production deployment workflow
- Demo presentation skills
- Retrospective & self-assessment
- Career roadmap planning

**Daily Breakdown:**
| Day | Topic | Task |
|-----|-------|------|
| Mon | Final bug fixes & testing | Last round of fixes based on QA |
| Tue | Deployment to production | Deploy module to the live Chalo Seekhen platform |
| Wed | Demo prep | Prepare a 10-min demo presentation |
| Thu | **Demo Day** | Present module to the team — what you built, challenges, learnings |
| Fri | Retrospective & next steps | Self-assessment, feedback from mentors, career planning |

**Final Deliverable:** A fully functional, deployed LearnX module that real users can interact with.

---

## Weekly Rituals

| Ritual | Frequency | Duration | Purpose |
|--------|-----------|----------|---------|
| Daily standup | Daily | 15 min | Share progress, blockers |
| Code review | 2x/week | 30 min | Learn from feedback |
| 1:1 with mentor | Weekly | 30 min | Guidance, career advice |
| Friday showcase | Weekly | 45 min | Demo weekly work, peer feedback |
| Sprint retrospective | Bi-weekly | 30 min | What went well, what to improve |

---

## Evaluation Criteria

### Phase 1 (Week 1–4) — Foundation

| Criteria | Weight |
|----------|--------|
| Git workflow (clean commits, PRs) | 15% |
| TypeScript proficiency | 20% |
| React component design | 30% |
| Next.js understanding (routing, SSR/CSR) | 25% |
| Communication & participation | 10% |

### Phase 2 (Week 5–8) — Full-Stack

| Criteria | Weight |
|----------|--------|
| API design & implementation | 25% |
| Database modeling & queries | 25% |
| Auth implementation | 20% |
| Performance & best practices | 20% |
| Code quality & review responsiveness | 10% |

### Phase 3 (Week 9–12) — Ownership

| Criteria | Weight |
|----------|--------|
| Module functionality (does it work?) | 30% |
| Code quality & architecture | 25% |
| UI/UX polish & responsiveness | 20% |
| Independence & problem-solving | 15% |
| Demo & communication | 10% |

---

## Recommended Resources

### Official Docs (Primary)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)

### Video Courses
- **Next.js** — Vercel's official Next.js tutorial (free)
- **React** — React.dev "Learn React" interactive tutorial (free)
- **TypeScript** — Matt Pocock's "Total TypeScript" (beginner series is free)

### Practice
- [LeetCode](https://leetcode.com) — JS/TS problems (easy level)
- [Frontend Mentor](https://frontendmentor.io) — UI challenges
- [Project-based learning](https://github.com/practical-tutorials/project-based-learning) — Build real things

---

## Intern Checklist — What You Should Be Able to Do by the End

- [ ] Set up a Next.js project from scratch
- [ ] Build responsive UI with Tailwind CSS
- [ ] Use TypeScript confidently (types, interfaces, generics)
- [ ] Create server & client components appropriately
- [ ] Build REST APIs with Route Handlers
- [ ] Use Server Actions for form mutations
- [ ] Integrate a database with Prisma
- [ ] Implement authentication with NextAuth
- [ ] Write clean, reviewable code with proper Git workflow
- [ ] Debug issues independently using DevTools, logs, and docs
- [ ] Deploy to Vercel
- [ ] Own and ship a complete LearnX module

---

*Created for the Chalo Seekhen internship program — building the future of holistic education, one module at a time.*
