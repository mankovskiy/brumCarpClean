/**
 * ============================================================
 *  FRESHLINE CLEANING — SITE CONFIGURATION
 * ============================================================
 *  Edit this file to update contact details, content, images,
 *  and text across the entire website.
 *
 *  After editing, run: npm run build
 * ============================================================
 */

// ------------------------------------------------------------
//  CONTACT DETAILS
//  Change these to update every phone/email/link on the site.
// ------------------------------------------------------------

export const PHONE_RAW     = '+447000000000';          // used in tel: links
export const PHONE_DISPLAY = '+44 7000 000000';        // shown on screen
export const EMAIL         = 'hello@example.com';
export const FACEBOOK_URL  = 'https://facebook.com/';  // your Facebook page URL

// WhatsApp message sent when someone taps a WhatsApp button
export const WA_MESSAGE = 'Hi, I would like a quote for carpet or upholstery cleaning. I can send photos.';

// Derived WhatsApp URL — no need to edit this
export const WA_URL = `https://wa.me/${PHONE_RAW.replace('+', '')}?text=${encodeURIComponent(WA_MESSAGE)}`;

// Derived Telegram URL — no need to edit this
export const TG_URL = `https://t.me/${PHONE_RAW.replace('+', '')}`;


// ------------------------------------------------------------
//  SEO & METADATA
// ------------------------------------------------------------

export const SITE_URL         = 'https://freshlinecleaning.co.uk/';
export const SITE_NAME        = 'FreshLine Cleaning';
export const META_TITLE       = 'FreshLine Cleaning | Carpet & Upholstery Cleaning in Birmingham';
export const META_DESCRIPTION = 'Professional carpet and upholstery cleaning across Birmingham and the West Midlands. Carpets, sofas, mattresses, stairs and end-of-tenancy cleans. Pet & child-safe products. Quick WhatsApp quotes.';
export const OG_IMAGE_URL     = 'https://freshlinecleaning.co.uk/og-image.jpg'; // 1200×630px image in /public/


// ------------------------------------------------------------
//  BUSINESS INFO (used in schema.org structured data)
// ------------------------------------------------------------

export const BUSINESS = {
  name:        SITE_NAME,
  phone:       PHONE_RAW,
  email:       EMAIL,
  city:        'Birmingham',
  region:      'West Midlands',
  postcode:    'B1',
  country:     'GB',
  lat:          52.4862,
  lng:          -1.8904,
  priceRange:  '££',
};


// ------------------------------------------------------------
//  NAVIGATION LINKS
//  Shared by the header nav and the footer nav.
// ------------------------------------------------------------

export const NAV_LINKS = [
  { href: '#services',     label: 'Services'        },
  { href: '#before-after', label: 'Before & After'  },
  { href: '#reviews',      label: 'Reviews'         },
  { href: '#areas',        label: 'Areas'           },
  { href: '#faq',          label: 'FAQ'             },
  { href: '#contact',      label: 'Contact'         },
];


// ------------------------------------------------------------
//  HERO SECTION
// ------------------------------------------------------------

export const HERO = {
  // Background photo — replace with your own image URL or a path like /images/hero.jpg
  image: 'https://images.pexels.com/photos/4686826/pexels-photo-4686826.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  heading: 'Professional Carpet & Upholstery Cleaning in Birmingham',
  subheading: 'Carpets, sofas, mattresses, stairs and end-of-tenancy cleaning. Send us photos on WhatsApp for a fast, no-obligation quote.',
  trustPoints: [
    'Local Birmingham service',
    'Fast drying',
    'Pet & child friendly',
    'Weekends available',
  ],
};


// ------------------------------------------------------------
//  SERVICES
//  Add, remove or edit service cards here.
// ------------------------------------------------------------

export const SERVICES = [
  {
    title:       'Carpet Cleaning',
    description: 'Hot-water extraction deep cleaning for all carpet types. Removes embedded dirt, allergens and tough stains.',
    image:       'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
    imageAlt:    'Clean, freshly vacuumed carpet in a living room',
    tag:         'Most popular', // set to null to hide the badge
    eager:       true,           // true = loads immediately (use for the first 3 cards only)
  },
  {
    title:       'Sofa & Upholstery',
    description: 'Specialist cleaning for sofas, armchairs and fabric furniture. Safe across all upholstery types.',
    image:       'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
    imageAlt:    'Clean grey fabric sofa in a modern living room',
    tag:         null,
    eager:       true,
  },
  {
    title:       'Mattress Cleaning',
    description: "Hygienic deep-clean to remove dust mites, stains and odours. For a healthier night's sleep.",
    image:       'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
    imageAlt:    'Clean white mattress with fresh bedding on a bed frame',
    tag:         null,
    eager:       true,
  },
  {
    title:       'Stairs & Landing',
    description: 'Specialist stair attachments tackle heavy-traffic areas and tight spaces other cleaners miss.',
    image:       'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
    imageAlt:    'Carpeted staircase in a residential home',
    tag:         null,
    eager:       false,
  },
  {
    title:       'End of Tenancy',
    description: "Professional end-of-tenancy carpet cleaning to meet letting agency standards and protect your deposit.",
    image:       'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
    imageAlt:    'Empty living room ready for end-of-tenancy inspection',
    tag:         'Landlords & tenants',
    eager:       false,
  },
  {
    title:       'Pet Stain & Odour',
    description: 'Enzyme-based treatment that neutralises pet urine odours and stains at the source — not just the surface.',
    image:       'https://images.pexels.com/photos/1741236/pexels-photo-1741236.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
    imageAlt:    'Clean carpet in a home with pets',
    tag:         null,
    eager:       false,
  },
];


// ------------------------------------------------------------
//  BEFORE & AFTER PHOTOS
//  Replace image URLs with your own before/after photos.
//  Local images go in /public/images/ and use paths like /images/before-1.jpg
// ------------------------------------------------------------

export const BEFORE_AFTER = [
  {
    label:    'Living Room Carpet',
    location: 'Kings Norton, Birmingham',
    before: {
      src: 'https://images.pexels.com/photos/4246097/pexels-photo-4246097.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
      alt: 'Stained and dirty carpet before professional cleaning',
    },
    after: {
      src: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
      alt: 'Clean, fresh carpet after professional cleaning',
    },
  },
  {
    label:    'Fabric Sofa',
    location: 'Harborne, Birmingham',
    before: {
      src: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
      alt: 'Stained fabric sofa before upholstery cleaning',
    },
    after: {
      src: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
      alt: 'Clean fabric sofa after upholstery cleaning',
    },
  },
  {
    label:    'Stair Carpet',
    location: 'Selly Oak, Birmingham',
    before: {
      src: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
      alt: 'Worn and dirty stair carpet before cleaning',
    },
    after: {
      src: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=700&h=440&fit=crop',
      alt: 'Clean, refreshed stair carpet after professional cleaning',
    },
  },
];


// ------------------------------------------------------------
//  HOW IT WORKS (process steps)
// ------------------------------------------------------------

export const PROCESS_STEPS = [
  {
    title:       'Send Photos on WhatsApp',
    description: 'Take a few photos of the areas you want cleaned and send them to us. This lets us give you an accurate, fair quote.',
  },
  {
    title:       'Receive a Clear Quote',
    description: 'We review your photos and come back quickly with a transparent price. No hidden extras, no pressure.',
  },
  {
    title:       'We Clean at Your Home',
    description: 'We arrive on time with all our own professional equipment and take care of everything.',
  },
  {
    title:       'Enjoy Fresh Results',
    description: 'Carpets are dry within a few hours. Then just enjoy a noticeably cleaner, fresher home.',
  },
];


// ------------------------------------------------------------
//  WHY CHOOSE US
// ------------------------------------------------------------

export const WHY_US = {
  stats: [
    { value: '500+',     label: 'Happy customers' },
    { value: '5★',       label: 'Average rating'  },
    { value: 'Same day', label: 'Quotes'          },
  ],
  image: 'https://images.pexels.com/photos/4107274/pexels-photo-4107274.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  imageAlt: 'Professional cleaning technician using hot-water extraction equipment on a carpet',
  features: [
    { title: 'Professional Equipment',  description: 'Powerful hot-water extraction machines — the industry gold standard for deep, thorough results.' },
    { title: 'Careful Stain Treatment', description: 'Every stain is pre-treated with appropriate solutions before the main clean.' },
    { title: 'Clear, Honest Pricing',   description: 'No hidden fees. You see the price before we start — quoted via WhatsApp from your photos.' },
    { title: 'Local & Reliable',        description: 'A local Birmingham business. We show up on time, every time, and take pride in our work.' },
    { title: 'Friendly, Tidy Service',  description: 'Shoe covers, respectful of your home, no mess left behind. We treat your home as our own.' },
    { title: 'Flexible Appointments',   description: 'Early mornings, evenings, weekends — we work around you, not the other way round.' },
  ],
};


// ------------------------------------------------------------
//  CUSTOMER REVIEWS
//  Add or edit reviews here. avatarBg is the avatar circle colour.
// ------------------------------------------------------------

export const REVIEWS = [
  {
    name:      'Sarah M.',
    location:  'Kings Norton',
    rating:    5,
    text:      "My living room carpet hasn't looked this good since it was new. Arrived on time, very professional, and the price matched the quote exactly. Will definitely be using again.",
    service:   'Carpet Cleaning',
    initial:   'S',
    avatarBg:  '#1d4ed8',
  },
  {
    name:      'James T.',
    location:  'Selly Oak',
    rating:    5,
    text:      'Had my 3-piece suite cleaned before the family came to stay. The results were incredible — all the old stains and pet odours completely gone. The team left no mess whatsoever.',
    service:   'Sofa Cleaning',
    initial:   'J',
    avatarBg:  '#0f766e',
  },
  {
    name:      'Priya K.',
    location:  'Harborne',
    rating:    5,
    text:      'Used FreshLine for an end-of-tenancy clean. The carpets passed the landlord inspection with no issues. Quick WhatsApp quote, easy to book, and brilliant results. Highly recommend.',
    service:   'End of Tenancy',
    initial:   'P',
    avatarBg:  '#7c3aed',
  },
  {
    name:      'David H.',
    location:  'Edgbaston',
    rating:    5,
    text:      "We have two dogs so the carpets needed some serious attention! After the treatment you'd never know we have pets. Great value, very thorough. Thank you so much.",
    service:   'Pet Stain & Odour',
    initial:   'D',
    avatarBg:  '#b45309',
  },
];


// ------------------------------------------------------------
//  AREAS COVERED
//  Add or remove areas from this list.
// ------------------------------------------------------------

export const AREAS = [
  'Birmingham',
  'Kings Norton',
  'Northfield',
  'Selly Oak',
  'Stirchley',
  'Harborne',
  'Edgbaston',
  'Moseley',
  'Hall Green',
  'Acocks Green',
  'Solihull',
  'Shirley',
  'Sutton Coldfield',
  'West Bromwich',
  'Redditch',
  'Bromsgrove',
];


// ------------------------------------------------------------
//  FAQ
//  Add or edit questions and answers here.
// ------------------------------------------------------------

export const FAQS = [
  {
    q: 'How long does carpet cleaning take?',
    a: "A standard room typically takes 20–40 minutes. A full-house clean (lounge, stairs, 3 bedrooms) usually takes 2–3 hours. We'll give you a more accurate estimate when you send us your photos on WhatsApp.",
  },
  {
    q: 'How long do carpets take to dry?',
    a: 'Most carpets are dry within 2–4 hours. Opening windows and using central heating or a fan speeds things up considerably. Our powerful extraction equipment removes most of the moisture during cleaning — far faster than older wet methods.',
  },
  {
    q: 'Can you remove pet odours?',
    a: 'Yes. We use specialist enzyme-based solutions that neutralise pet urine and odours at the source, not just masking them. Most pet odour jobs are resolved in a single visit.',
  },
  {
    q: 'Do you clean sofas and mattresses?',
    a: 'Absolutely — upholstery cleaning including sofas, armchairs and mattresses is one of our most popular services. We adapt our method to each fabric type to ensure a safe and effective clean.',
  },
  {
    q: 'Do I need to move furniture?',
    a: "Moving smaller items helps us achieve the best results. We'll move lightweight furniture ourselves. For large heavy pieces we clean around the edges. Just let us know your situation when you book.",
  },
  {
    q: 'Do you cover my area?',
    a: 'We cover Birmingham and surrounds including Kings Norton, Northfield, Selly Oak, Stirchley, Harborne, Edgbaston, Solihull, Redditch, West Bromwich, Sutton Coldfield and more. Message us on WhatsApp with your postcode to confirm.',
  },
];
