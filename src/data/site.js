/**
 * PUBLIC CONTACT — single source for email, phone, and profile links.
 *
 * Taken from Gregory Mitchell's resume. Confirm before this is treated as
 * the live public contact:
 * - Email on the resume is greg.mitchell@gregory-mitchell.com
 *   (not gregory@example.com, and not gregory@gregory-mitchell.com).
 * - Phone on the resume is 941-405-6126. It is published here so local
 *   businesses can call. Remove CONTACT_PHONE if he does not want it public.
 * - LinkedIn path on the resume: linkedin.com/in/gregory-mitchell-dev
 * - Code lives on github.com/gregorypaul (not gregorypauldesignsllcpu).
 */
export const siteConfig = {
  name: "Gregory Mitchell",
  email: "greg.mitchell@gregory-mitchell.com",
  phoneDisplay: "(941) 405-6126",
  phoneTel: "+19414056126",
  phoneSchema: "+1-941-405-6126",
  city: "Lake Elsinore",
  region: "California",
  area: "Inland Empire",
  github: "https://github.com/gregorypaul",
  linkedin: "https://www.linkedin.com/in/gregory-mitchell-dev",
  siteUrl: "https://gregory-mitchell.com/",
};

export function mailtoHref(subject) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${siteConfig.email}${query}`;
}
