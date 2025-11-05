# Design Guidelines for 민길아토익학원 Website

## Design Approach

**Selected Approach:** Hybrid - Educational Platform with Korean Market Aesthetics

Drawing inspiration from successful Korean educational platforms and international course marketplaces (Udemy, Coursera), we'll create a trustworthy, professional design that prioritizes credibility and clear information hierarchy while maintaining visual appeal.

**Core Principles:**
- Professional credibility through structured layouts
- Clear information hierarchy for course discovery
- Trust-building through social proof (testimonials, scores)
- Korean-optimized typography and readability

## Typography System

### Font Families
- **Primary Korean:** Noto Sans KR (Google Fonts)
- **Secondary/English:** Inter (Google Fonts)
- Limit to these 2 families for optimal performance

### Type Scale
- **Hero Headings:** text-5xl lg:text-6xl, font-bold
- **Section Headings:** text-3xl lg:text-4xl, font-bold
- **Subsection Headings:** text-2xl lg:text-3xl, font-semibold
- **Card Titles:** text-xl lg:text-2xl, font-semibold
- **Body Text:** text-base lg:text-lg, font-normal
- **Small Text/Captions:** text-sm, font-normal
- **Buttons/CTAs:** text-base lg:text-lg, font-semibold

### Korean Typography Considerations
- Increased line-height for Korean text: leading-relaxed (1.625) for body, leading-tight (1.25) for headings
- Slightly wider letter-spacing for headlines: tracking-tight
- Optimal reading width: max-w-3xl for Korean text blocks

## Layout System

### Spacing Primitives
Standardize on Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24, 32**

**Common Patterns:**
- Component padding: p-6 md:p-8
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-6 md:gap-8
- Grid gaps: gap-4 md:gap-6 lg:gap-8
- Button padding: px-8 py-4
- Card padding: p-6 md:p-8

### Container Strategy
- **Full-width sections:** w-full with inner max-w-7xl mx-auto px-4 md:px-6
- **Content sections:** max-w-6xl mx-auto px-4 md:px-6
- **Text-heavy content:** max-w-4xl mx-auto px-4

### Grid Systems
- **Course Cards:** grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
- **Instructor Profiles:** grid grid-cols-1 lg:grid-cols-2 gap-12
- **Testimonials:** grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- **Score Gallery:** grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4

## Component Library

### Navigation
- Fixed header with logo left, navigation center/right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20 on desktop, h-16 on mobile
- Navigation items with hover underline effect
- CTA button in navigation (e.g., "수강신청")

### Hero Section
**Layout:** Full-width background image with centered content overlay
- Min-height: min-h-[600px] lg:min-h-[700px]
- Content positioning: Centered both vertically and horizontally
- Text overlay with semi-transparent backdrop blur
- Primary CTA button with blurred background (backdrop-blur-sm)
- Supporting text: Academy tagline or key differentiator

**Image Description:** Professional education environment - modern classroom or students studying with visible achievement/success theme. Bright, aspirational mood.

### Course Section
**Layout:** 3-column grid on desktop (responsive to 1 column on mobile)

Each course card includes:
- Icon or small image at top (150x150px, rounded corners)
- Course name as heading (TOEIC, TOEIC Speaking, OPIc)
- 3-4 bullet points of key features
- Target score range or proficiency level
- "자세히 보기" (Learn More) button
- Subtle border with shadow on hover

### Instructor Profiles
**Layout:** 2-column layout with alternating image/text positions

**Instructor Cards:**
- Large profile photo (400x500px, professional headshot)
- Name and title in large heading
- Credentials list (education, experience, specializations)
- Teaching philosophy or approach (2-3 sentences)
- Achievements or certifications
- Quote from instructor in emphasized styling

**Image Descriptions:**
- Director Mingila: Professional headshot, confident and approachable
- SUNNY (Speaking Specialist): Energetic, friendly professional photo

### Student Testimonials
**Layout:** 3-column masonry or card grid

Each testimonial includes:
- Student name (can be partially anonymized: 김○○)
- Course taken and duration
- Before/After scores (if applicable)
- Review text (2-4 sentences)
- Star rating or simple positive indicator
- Small avatar or placeholder icon

### Score Achievement Gallery
**Layout:** 4-column grid on desktop (2 on tablet, 1 on mobile)

Each score card:
- Blurred or anonymized score report image (portrait orientation)
- Student identifier (김○○, 23세 등)
- Score improvement stat (e.g., "650 → 890")
- Course duration
- Hover effect: slight zoom and shadow enhancement

**Image Descriptions:** Authentic TOEIC/OPIc score reports (can be mock-ups with realistic formatting). Focus on score improvements. Ensure student privacy with blurring/anonymization.

### Contact Section
**Layout:** Centered information blocks

Information includes:
- Academy name as heading
- Physical address with map embed (Kakao Map or Google Maps)
- Phone number (large, clickable tel: link)
- Email address (clickable mailto: link)
- KakaoTalk channel button with icon (prominent CTA styling, includes backdrop blur on hero if placed over image)
- Operating hours
- Directions or nearby landmarks

### Footer
**Layout:** Full-width with centered content

Includes:
- Academy logo and name
- Quick navigation links (courses, instructors, testimonials)
- Contact information (condensed)
- Business registration info
- Social links if applicable
- Copyright notice
- Vertical spacing: py-12 md:py-16

## Key Features Section
**Layout:** Icon + text grid (3 columns on desktop)

Highlight academy differentiators:
- Small class sizes
- Personalized curriculum
- Native speaker instruction (for SUNNY)
- Score guarantee programs
- Flexible scheduling
- Learning management system access

Each feature with icon (use Heroicons), title, and 1-2 sentence description.

## Responsive Behavior

### Breakpoints
- Mobile: base (< 768px)
- Tablet: md (768px - 1023px)
- Desktop: lg (1024px+)

### Mobile Optimizations
- Single column layouts for all multi-column sections
- Larger touch targets (minimum 44x44px)
- Hamburger navigation
- Stacked instructor profiles
- Reduced font sizes (scale down by one step)
- Generous padding for readability

## Animation Guidelines

**Minimal, purposeful animations only:**
- Subtle fade-in on scroll for sections (use Intersection Observer)
- Card hover effects: slight scale (scale-105) and shadow enhancement
- Button hover: subtle background shift
- No parallax, no complex scroll-triggered animations
- Loading states for images (skeleton screens)

## Accessibility

- Semantic HTML structure (header, nav, main, section, footer)
- Alt text for all images (Korean descriptions)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states for all interactive elements
- Color contrast meeting WCAG AA standards (will be ensured in color selection)

## Images Summary

**Hero Section:** 1 large background image - modern classroom/study environment, aspirational
**Instructor Profiles:** 2 professional headshots (Mingila, SUNNY)
**Course Icons:** Use Heroicons for course type indicators
**Score Gallery:** 8-12 anonymized score report images
**Map:** Embedded Kakao or Google Maps for location

All images should convey professionalism, success, and trustworthiness appropriate for an educational institution.