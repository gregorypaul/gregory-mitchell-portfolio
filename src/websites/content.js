import experiences from "../data/experiences";
import { siteConfig } from "../data/site";

/**
 * Plain-language copy for the local-business page.
 * Proof points are checked against src/data/experiences.js.
 * "10+ years" matches src/data/hero.js. Do not raise that number here.
 */

function job(company) {
  const match = experiences.find((item) => item.company === company);
  if (!match) {
    throw new Error(`Missing experience record for ${company}`);
  }
  return match;
}

function requireText(record, pattern, label) {
  const haystack = [record.title, record.description, ...record.achievements].join("\n");
  if (!pattern.test(haystack)) {
    throw new Error(`${label} is not in the experience data for ${record.company}.`);
  }
}

const iqpc = job("IQPC");
const prn = job("PRN Vision Group");
const freelance = job("Freelance");

requireText(iqpc, /more than seven years/i, "More than seven years at IQPC");
requireText(freelance, /Bootstrap 3 to Bootstrap 5/, "Bootstrap 3 to 5 migration");
requireText(prn, /WooCommerce/, "WooCommerce");
requireText(prn, /Cybersource/, "Cybersource");
requireText(prn, /NetSuite/, "NetSuite");

export const reviewSubject = "Free 15-minute website review";

export const serviceAreaCities = "Lake Elsinore, Murrieta, Temecula, Menifee, Corona";

export const serviceArea = `${serviceAreaCities}, and the rest of the Inland Empire`;

export const reviewOffer = {
  title: "Get a free 15-minute website review",
  text: "No cost, no pressure. I'll look at your site with you (or on my own if you just text me the link) and tell you the 3 things I'd fix first to get you more calls.",
};

export const aboutTitle = "Who you'll work with";

export const aboutParagraphs = [
  `I'm Gregory, a web designer and developer in ${siteConfig.city}. I've spent 10+ years building websites, including 7+ years leading the web team at IQPC.`,
  "You work with me directly from first call to launch. No agency, no hand-offs, no getting passed to a junior.",
  "I live and work here in the Inland Empire.",
];

export const experienceTitle = "Experience you can count on";

export const experienceIntro =
  "Before working with local businesses, I spent years running websites that couldn't afford to go down.";

export const eventsCompare = {
  caption:
    "Before and after: an internal events system I redesigned at IQPC, used daily by staff.",
  beforeAlt:
    "The older IQPC events admin, showing the filters and the first rows of the events list",
  afterAlt:
    "The redesigned IQPC events admin, with the same filters and events list in a cleaner layout",
};

export const sampleCopy = {
  sectionTitle: "What a difference a modern site makes",
  sectionIntro:
    "On the left, a typical outdated small-business site. On the right, the kind of site I build: fast, clear, and made to get calls.",
  beforeTitle: "Before: a typical outdated site (illustration)",
  beforeNote:
    'Illustration, not a real business. Tiny text, no tap-to-call, scrolls sideways on a phone, and a "Not secure" warning that scares customers off.',
  afterTitle: "After: Summit Air Heating & Cooling",
  afterNote: "A sample business I built to show what your site could look like.",
  desktopCaption: "On a computer",
  phoneCaption: "On a phone",
  serviceCaption: "Services page: each service gets its own page",
  changedTitle: "What your customers get",
  changedNote:
    "Built the way Google likes: clear pages, local wording, fast loading, and phone-friendly.",
  demoLink: "Try the live demo on your phone →",
};

export const sampleCallouts = [
  "One-tap calling",
  "Loads fast on phones",
  "Services easy to find",
  "Built to be found on Google",
];

export const navLinks = [
  { href: "#problems", label: "What I fix" },
  { href: "#sample", label: "Before & after" },
  { href: "#packages", label: "Prices" },
  { href: "#process", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#questions", label: "FAQ" },
  { href: "#review", label: "Free review" },
];

export const problems = [
  {
    title: "It's slow.",
    text: "If your site takes more than a few seconds to load, people hit back and call the next business. I find what's slowing it down and fix it.",
  },
  {
    title: "It's hard to use on a phone.",
    text: "Text runs off the screen, buttons are too small, the menu won't open. Most of your customers find you on their phone, so that's where the site has to work, with a big tap-to-call button.",
  },
  {
    title: "It looks outdated.",
    text: "An old site makes a busy business look closed, or out of date. I'll give it a clean, modern look that still feels like your business.",
  },
  {
    title: "You can't update it.",
    text: "Changing your hours, a price, or a photo shouldn't take a week. I set it up so you can make simple edits yourself, or text me and I'll do it.",
  },
  {
    title: "Customers can't find you on Google.",
    text: "People nearby search for what you do and call your competitor. I set up the basics Google looks for: clear service pages, the right local words, fast loading, and a phone-friendly site. Nobody can honestly guarantee #1, and I won't, but I'll give you a real shot at it.",
  },
];

export const packages = [
  {
    name: "Site fix / tune-up",
    price: "$600",
    unit: "",
    summary: "Keep your current site, just make it fast and easy to use on a phone.",
    points: [
      "Faster loading",
      "Layout fixed on phones and tablets",
      "Working buttons, menus, and contact forms",
      "Big tap-to-call button",
      "Your design and content stay the same",
    ],
    cta: "Ask about this fix",
    href: "#review",
  },
  {
    name: "New website or redesign",
    price: "$1,800",
    unit: "",
    summary:
      "A modern site that looks trustworthy, works on every phone, and is built to get you calls. For a new business or a site that looks dated.",
    points: [
      "Modern design that fits your business",
      "Up to 5 pages",
      "A page for each main service, written so Google understands it",
      "Tap-to-call, click-to-text, and a contact form",
      "Fast and phone-friendly",
      "Google Business Profile setup",
      "Usually live in about a week",
    ],
    cta: "Ask about a new site",
    href: "#review",
  },
  {
    name: "Care plan",
    price: "$79",
    unit: "/month",
    summary:
      "I keep your site updated, backed up, and secure, so you never have to think about it.",
    points: [
      "Software and plugin updates",
      "Regular backups",
      "Security monitoring",
      "Small edits: text me a change and I'll make it",
      "Cancel anytime",
    ],
    cta: "Ask about monthly care",
    href: "#review",
  },
];

export const priceNote =
  "Fixed price agreed up front. You own your site and logins. You approve the design before it goes live.";

export const steps = [
  {
    title: "Free 15-minute website review",
    href: "#review",
    text: "Text me your website, or we'll look at it together on a call. I'll tell you what's costing you customers.",
  },
  {
    title: "Fixed quote",
    text: "You get one price and a plain-English list of what's included. Nothing starts until you say yes.",
  },
  {
    title: "I build it",
    text: "I do the work and keep you updated in plain English, with no tech jargon. You see it and approve it before it goes live.",
  },
  {
    title: "Launch",
    text: "Your new site goes live. You get all the files and logins, and you can always call or text me afterward.",
  },
];

function jobMeta(record) {
  const title = record.company === "IQPC" ? "Web team lead" : record.title;
  return [title, record.company, record.location, record.period].filter(Boolean).join(" · ");
}

export const proofPoints = [
  {
    title: "7+ years leading a web team",
    meta: jobMeta(iqpc),
    text: "At IQPC, I led the team that built and ran their busy public websites and the tools their staff used to update them.",
  },
  {
    title: "Brought an old site up to date without starting over",
    meta: jobMeta(freelance),
    text: "I updated an older business website so it worked on today's phones and browsers, without the cost of rebuilding it from scratch. That's the same kind of work a site fix does for you.",
  },
  {
    title: "Kept an online store taking orders",
    meta: jobMeta(prn),
    text: "At PRN Vision Group I ran their WordPress online store, including card payments and sending orders into the system they used to track them. If you sell online, I've done it.",
  },
];

export const questions = [
  {
    question: "How much does it cost?",
    answer:
      "A site fix or tune-up starts at $600. A new website or redesign starts at $1,800. That includes up to 5 pages, Google Business Profile setup, and a site that's usually live in about a week. The care plan is $79 a month. You can cancel anytime. It covers updates, backups, security monitoring, and small edits. The free 15-minute website review comes first. After that you get a fixed quote, so the price is agreed before any work starts. No hourly billing surprises.",
  },
  {
    question: "How long does it take?",
    answer:
      "The review itself is 15 minutes. A new website or redesign is usually live in about a week. A site fix or tune-up is often faster. How long it takes depends mostly on how quickly I get your photos and info, and your quote includes the date.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. You own the site, the words, and the photos you provide. When the work is done you get the files and the logins. If the site is on WordPress, Wix, or Squarespace, I set the account up in your name.",
  },
  {
    question: "Can you work with my existing WordPress, Wix, or Squarespace site?",
    answer:
      "Yes. I can work on the site you already have. I've run WordPress sites and online stores for years, and I can update Wix and Squarespace sites too. If the platform itself is holding you back, I'll tell you honestly during the review.",
  },
  {
    question: "What about hosting?",
    answer:
      "You can keep the hosting you already pay for. If you don't have hosting yet, I'll recommend a simple, affordable option. The care plan is separate from your hosting bill.",
  },
  {
    question: "Do I have to write everything?",
    answer:
      "No. Tell me about your business and I'll write the first draft for you to approve.",
  },
  {
    question: "Can you help with my Google Business Profile?",
    answer:
      "Yes. Google Business Profile setup is included with a new website or redesign. If you already have a site, I can still help you set the profile up. We'll cover that in the free 15-minute website review.",
  },
  {
    question: "I don't have a website yet. Can you build one?",
    answer:
      "Yes. I build new sites and redesign existing ones. The new website or redesign package includes up to 5 pages, Google Business Profile setup, and is usually live in about a week.",
  },
];
