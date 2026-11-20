import experiences from "../data/experiences";
import { mailtoHref } from "../data/site";

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

export const reviewSubject = "Free website review";

export const serviceArea =
  "Lake Elsinore, Murrieta, Temecula, Menifee, Corona, and the rest of the Inland Empire";

export const navLinks = [
  { href: "#problems", label: "Problems" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "How it works" },
  { href: "#proof", label: "My work" },
  { href: "#questions", label: "Questions" },
  { href: "#review", label: "Free review" },
];

export const problems = [
  {
    title: "Slow site",
    text: "People leave when a page takes too long to open. I find what is slowing it down and fix it.",
  },
  {
    title: "Broken on phones",
    text: "Text runs off the screen, buttons are hard to tap, or a menu will not open. Most customers are on a phone. The site has to work there.",
  },
  {
    title: "Looks outdated",
    text: "An old design can make a busy business look closed. A refresh can make the site feel current and still sound like you.",
  },
  {
    title: "Hard to update",
    text: "Changing a phone number, a price, or a photo should be simple. Small edits should not turn into a project.",
  },
  {
    title: "Not showing up on Google",
    text: "Neighbors search for what you do and find someone else. I fix the basics: a clear page, the right words, a fast load, and a site that works on a phone. I do not promise the top spot.",
  },
];

export const packages = [
  {
    name: "Speed & Mobile Fix",
    price: "$650",
    unit: "",
    summary: "For a site you already have that loads slowly or falls apart on a phone.",
    points: [
      "Speed up a slow site",
      "Fix layouts that break on phones",
      "Repair buttons, menus, and forms that are hard to use",
      "Leave the rest of the site in place",
    ],
    cta: "Email about this fix",
    href: mailtoHref("Speed and mobile fix"),
  },
  {
    name: "Website Refresh / Redesign",
    price: "$1,800",
    unit: "",
    summary: "For a site that looks old, is hard to follow, or no longer fits the business.",
    points: [
      "A current look that still sounds like your business",
      "Clear pages for what you offer and how to reach you",
      "Easy to read on a phone",
      "Your words and your photos",
    ],
    cta: "Email about a redesign",
    href: mailtoHref("Website refresh or redesign"),
  },
  {
    name: "Monthly Care Plan",
    price: "$150",
    unit: "/mo",
    summary: "For after the site is live, when you want someone to keep an eye on it.",
    points: [
      "Updates",
      "Backups",
      "Security",
      "Small edits, such as text and photos",
    ],
    cta: "Email about monthly care",
    href: mailtoHref("Monthly care plan"),
  },
];

export const steps = [
  {
    title: "Free 15-minute site review",
    href: "#review",
    text: "Send the link, or we look at the site together. I tell you what is getting in the way of customers.",
  },
  {
    title: "Fixed quote",
    text: "You get a price and a plain list of what is included before any work starts.",
  },
  {
    title: "Build",
    text: "I do the work and check in using normal language.",
  },
  {
    title: "Launch",
    text: "The site goes live. You get the files and the logins, and you know how to reach me after.",
  },
];

function jobMeta(record) {
  return [record.title, record.company, record.location, record.period].filter(Boolean).join(" · ");
}

export const proofPoints = [
  {
    title: "More than seven years leading full-stack work",
    meta: jobMeta(iqpc),
    text: "At IQPC I built and maintained large live websites, including the pages customers saw and the tools staff used to update them.",
  },
  {
    title: "Moved live screens from Bootstrap 3 to Bootstrap 5",
    meta: jobMeta(freelance),
    text: "I updated parts of a production admin site from Bootstrap 3 to Bootstrap 5. That is the layout system the site was built with. The change made those older screens work on current phones and browsers without throwing the site away.",
  },
  {
    title: "WooCommerce, Cybersource, and NetSuite",
    meta: jobMeta(prn),
    text: "At PRN Vision Group I kept a WooCommerce store running. WooCommerce is the store software. Cybersource took the card payments, and orders synced into NetSuite, the system the business used to track them.",
  },
];

export const questions = [
  {
    question: "How much does it cost?",
    answer:
      "A speed and mobile fix starts at $650. A website refresh or redesign starts at $1,800. Monthly care starts at $150 a month and covers updates, backups, security, and small edits. The 15-minute review is free. After that you get a fixed quote, so the price is agreed before the work starts.",
  },
  {
    question: "How long does it take?",
    answer:
      "The review itself is 15 minutes. A small fix takes less time than a full redesign. Your quote says what the work includes and when it should be ready, and you see that before you decide.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. You own the site, the words, and the photos you provide. When the work is done you get the files and the logins. If the site stays on WordPress, Wix, or Squarespace, the account should be in your name.",
  },
  {
    question: "Can you work with my existing WordPress, Wix, or Squarespace site?",
    answer:
      "Yes. I can work on the site you already have. I have maintained WordPress and WooCommerce stores in production, including card payments and order sync. I can also update a Wix or Squarespace site. If the tool itself is the problem, we can talk about a rebuild during the review.",
  },
  {
    question: "What about hosting?",
    answer:
      "You can keep the hosting you already pay for. I work with the host your site is on. If you do not have hosting yet, we will pick a simple option during the review. The monthly care plan covers updates, backups, security, and small edits. It is separate from your hosting bill.",
  },
];
