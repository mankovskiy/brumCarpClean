# FreshLine Cleaning — Website

Carpet & Upholstery Cleaning in Birmingham.
Built with [Astro](https://astro.build). Static, no backend — deployable to Netlify, Cloudflare Pages, or GitHub Pages.

---

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Building for Production

```bash
npm run build
```

Output goes into the `dist/` folder. Upload that folder to any static host.

---

## How to Edit Content

**All text content, contact details, and images live in one file:**

```
src/data/site.ts
```

Open that file and you will find clearly labelled sections for everything:

- Phone number and email
- WhatsApp message text (the pre-filled message customers see)
- Facebook URL
- Hero heading and trust points
- Service cards
- Before & After photos
- How It Works steps
- Why Choose Us features and stats
- Customer reviews
- Areas covered
- FAQ questions and answers

Change a value there and it updates everywhere on the site automatically.

### Changing Contact Details

Open `src/data/site.ts` and edit these lines near the top:

```ts
export const PHONE_RAW     = '+447000000000';   // used in tel: links
export const PHONE_DISPLAY = '+44 7000 000000'; // shown to visitors
export const EMAIL         = 'hello@example.com';
export const FACEBOOK_URL  = 'https://facebook.com/';
```

### Changing the WhatsApp Message

The pre-filled WhatsApp message is also in `src/data/site.ts`:

```ts
export const WA_MESSAGE = 'Hi, I would like a quote for carpet or upholstery cleaning. I can send photos.';
```

Edit the text and the WhatsApp link updates everywhere automatically.

### Replacing Images

All image URLs are in `src/data/site.ts` inside the relevant content object.
For example, to replace a service card photo, find `SERVICES` and change the `image` URL.

To use your own local images:
1. Place the file in `public/images/` (create the folder if it doesn't exist)
2. Reference it as `/images/your-file.jpg` in `site.ts`

For best performance, use JPEG or WebP at 800px wide or larger.

### Editing Service Cards

Find `SERVICES` in `src/data/site.ts`. Each card looks like:

```ts
{
  title: 'Carpet Cleaning',
  description: 'Deep steam cleaning...',
  tag: 'Most popular',
  image: 'https://...',
  imageAlt: 'Description of image',
},
```

Add, remove or reorder the objects to change the cards shown on the site.

### Editing Reviews

Find `REVIEWS` in `src/data/site.ts`. Each review looks like:

```ts
{
  name: 'Sarah M.',
  location: 'Solihull',
  service: 'Carpet Cleaning',
  rating: 5,
  text: 'The review text goes here...',
  initial: 'S',
  avatarBg: '#2563eb',
},
```

### Editing FAQ

Find `FAQS` in `src/data/site.ts`. Each entry is:

```ts
{ q: 'Question here?', a: 'Answer here.' },
```

### Editing Areas Covered

Find `AREAS` in `src/data/site.ts`. It is a simple list of strings:

```ts
export const AREAS = [
  'Birmingham City Centre',
  'Solihull',
  ...
];
```

---

## Deploying

### Netlify
Drag the `dist/` folder to https://app.netlify.com/drop, or connect the repo with:
- Build command: `npm run build`
- Publish directory: `dist`

### Cloudflare Pages
- Build command: `npm run build`
- Build output directory: `dist`

### GitHub Pages
Use the `dist/` folder as the source, or follow the
[Astro GitHub Actions guide](https://docs.astro.build/en/guides/deploy/github/).

---

## Adding a Real OG Image

1. Create a 1200×630 image and save it as `public/og-image.jpg`
2. In `src/data/site.ts`, update `OG_IMAGE_URL` to point to the live URL of that image

---

## File Structure

```
src/
  data/
    site.ts             <- ALL editable content and contact details live here
  layouts/
    Layout.astro        <- SEO, meta tags, Open Graph, schema.org JSON-LD
  components/
    Nav.astro           <- Sticky responsive navigation
    Hero.astro          <- Hero section with CTAs
    Services.astro      <- Service cards
    BeforeAfter.astro   <- Before & after photo gallery
    Process.astro       <- Four-step how it works
    WhyUs.astro         <- Why choose us section
    Reviews.astro       <- Customer testimonials
    Areas.astro         <- Areas covered map section
    FAQ.astro           <- Accordion FAQ
    Contact.astro       <- Contact CTA section
    Footer.astro        <- Footer
  pages/
    index.astro         <- Assembles all sections into the page
public/
  favicon.svg
  robots.txt
  sitemap.xml
```
