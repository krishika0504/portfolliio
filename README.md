# Developer Portfolio

Modern, responsive developer portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- React Icons

## Sections

- Hero (full screen, animated intro)
- About (scroll reveal)
- Skills (staggered animated pills)
- Projects (responsive card grid with lift effect)
- Experience (timeline cards)
- Contact (email + social links)
- Sticky Navbar with active section highlight
- Footer

## Run The Project

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

4. Production build:

```bash
npm run build
npm run start
```

## Tailwind Setup

Tailwind is configured for App Router and components:

- Config: `tailwind.config.js`
- Global styles: `app/globals.css`
- Directives included:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind content paths include:

- `./app/**/*.{js,ts,jsx,tsx,mdx}`
- `./components/**/*.{js,ts,jsx,tsx,mdx}`
- `./pages/**/*.{js,ts,jsx,tsx,mdx}`

## Framer Motion Integration

Framer Motion is used in all sections for:

- Initial load fade + slide in Hero
- Scroll-based reveal (`whileInView`) for each section
- Staggered list animations for Skills and Projects
- Hover micro-interactions (cards, pills, buttons)
- Optional parallax movement in Hero using `useScroll` + `useTransform`

Reusable variants are defined in:

- `styles/motion.js`

## Project Structure

```text
app/
  globals.css
  layout.js
  page.js
components/
  About.js
  Contact.js
  Experience.js
  Footer.js
  Hero.js
  Navbar.js
  Projects.js
  Skills.js
styles/
  motion.js
```

## Notes

- Smooth scroll is enabled on the root layout (`scroll-smooth`).
- The visual theme uses black backgrounds with white/gray text and subtle glow/blur accents.
- Replace placeholder links (GitHub, LinkedIn, email) with your real details.
