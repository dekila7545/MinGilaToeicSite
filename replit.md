# Overview

This is a marketing website for 민길아토익학원 (Mingila TOEIC Academy), a Korean language test preparation academy specializing in TOEIC, TOEIC Speaking, and OPIc exams. The site is a single-page application built with React that showcases courses, instructors, student testimonials, score achievements, and contact information.

The application is designed as a modern, professional educational platform targeting Korean students seeking English proficiency test preparation. It features a clean, accessible interface optimized for Korean typography and reading patterns.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management

**UI Component System:**
- shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives as the foundation for complex interactive components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system defined in `design_guidelines.md` emphasizing Korean market aesthetics

**Styling Approach:**
- CSS variables for theme customization (light/dark mode support)
- Korean-optimized typography using Noto Sans KR and Inter fonts
- Responsive design with mobile-first breakpoints
- Glassmorphism effects and animated backgrounds for visual appeal

**Component Architecture:**
- Presentational components in `/client/src/components/` (CourseCard, TestimonialCard, etc.)
- Page-level components in `/client/src/pages/`
- Reusable UI primitives in `/client/src/components/ui/`
- Example components in `/client/src/components/examples/` for development reference

## Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the Node.js backend
- ESM (ES Modules) throughout the codebase
- HTTP server creation with Node's built-in `http` module

**Development Environment:**
- Vite middleware integration for seamless full-stack development
- Custom logging middleware for API request tracking
- Raw body parsing for potential webhook integrations

**Data Storage:**
- In-memory storage implementation (`MemStorage`) as the initial data layer
- Storage interface defined for future database integration
- User schema defined with Drizzle ORM for PostgreSQL (prepared but not yet connected)

**Current State:**
The backend is minimal with placeholder routes. The storage layer uses an in-memory Map, suggesting this is an early-stage project where database connectivity will be added later.

## Database Schema

**ORM and Tooling:**
- Drizzle ORM configured for PostgreSQL
- Drizzle Kit for schema migrations
- Neon Database serverless driver (@neondatabase/serverless)
- Zod integration for runtime validation via drizzle-zod

**Schema Definition:**
Currently defines a single `users` table with:
- `id`: UUID primary key with automatic generation
- `username`: Unique text field
- `password`: Text field for authentication

**Migration Strategy:**
- Migrations stored in `/migrations` directory
- Database URL expected via `DATABASE_URL` environment variable
- Schema push command available via `npm run db:push`

**Note:** The database appears configured but not actively used in the current application, which is purely presentational without authentication or dynamic data.

## Build and Deployment

**Build Process:**
- Frontend: Vite builds React app to `/dist/public`
- Backend: esbuild bundles server code to `/dist/index.js`
- Both builds are ESM format with external package dependencies

**Development vs Production:**
- Development: Vite dev server with HMR, Replit-specific plugins for debugging
- Production: Compiled static assets served via Express

**Asset Management:**
- Static images stored in `/attached_assets` directory
- Vite alias `@assets` for easy asset imports
- Generated placeholder images for scores and instructor photos

## External Dependencies

**Third-Party UI Libraries:**
- Radix UI component primitives (accordion, dialog, dropdown, tooltip, etc.)
- Embla Carousel for image galleries
- Lucide React for iconography
- React Icons for brand icons (KakaoTalk)
- date-fns for date manipulation
- cmdk for command palette functionality

**Development Tools:**
- Replit-specific Vite plugins for runtime error overlay, cartographer, and dev banner
- PostCSS with Tailwind CSS and Autoprefixer

**External Services (Configured):**
- KakaoTalk channel integration for customer communication
- Kakao Maps for location display
- Google Fonts for Noto Sans KR and Inter typefaces

**Session Management:**
- connect-pg-simple for PostgreSQL session storage (configured but not currently used)

**Potential Future Integrations:**
The presence of raw body parsing middleware and session store suggests planned features for:
- User authentication
- Form submissions
- Contact/enrollment systems