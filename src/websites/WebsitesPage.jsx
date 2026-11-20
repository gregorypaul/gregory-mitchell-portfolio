import SummitSample from "./SummitSample.jsx";
import CaseStudy from "./CaseStudy.jsx";
import headshotWebp from "../assets/websites/gregory-mitchell-320.webp";
import headshotJpg from "../assets/websites/gregory-mitchell-320.jpg";
import heroShot640 from "../assets/websites/summit-home-desktop-640.webp";
import heroShot1200 from "../assets/websites/summit-home-desktop-1200.webp";
import {
  aboutParagraphs,
  aboutTitle,
  experienceIntro,
  experienceTitle,
  navLinks,
  packages,
  priceNote,
  problems,
  proofPoints,
  questions,
  reviewOffer,
  reviewSubject,
  serviceArea,
  serviceAreaCities,
  steps,
} from "./content.js";
import { mailtoHref, siteConfig, smsHref, telHref } from "../data/site.js";

function Icon({ children }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <Icon>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z" />
    </Icon>
  );
}

function TextIcon() {
  return (
    <Icon>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Icon>
  );
}

function MailIcon() {
  return (
    <Icon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

function ContactActions() {
  return (
    <div className="actions">
      <a className="btn btnPrimary" href={telHref()}>
        <PhoneIcon />
        <span className="btnText">
          <span className="btnLabel">Call</span>
          <span className="btnDetail">{siteConfig.phoneDisplay}</span>
        </span>
      </a>
      <a className="btn btnGhost" href={smsHref()}>
        <TextIcon />
        <span className="btnText">
          <span className="btnLabel">Text</span>
          <span className="btnDetail">{siteConfig.phoneDisplay}</span>
        </span>
      </a>
      <a className="btn btnGhost" href={mailtoHref(reviewSubject)}>
        <MailIcon />
        <span className="btnText">
          <span className="btnLabel">Email</span>
          <span className="btnDetail">Email me</span>
        </span>
      </a>
    </div>
  );
}

function ProblemIcon({ index }) {
  const tiles = ["tileBlue", "tileLavender", "tilePeach", "tileBlue", "tileLavender"];
  const paths = [
    "M4 15a8 8 0 1 1 16 0M12 15l3.2-4.2M8 19h8",
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z",
    "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zm6 10l.8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13zM6 14l.7 1.8L8.5 16.5 6.7 17.2 6 19l-.7-1.8L3.5 16.5l1.8-.7L6 14z",
    "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    "M12 21s7-4.4 7-10a7 7 0 1 0-14 0c0 5.6 7 10 7 10zM12 11.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z",
  ];

  return (
    <span className={`problemTile ${tiles[index]}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d={paths[index]} />
      </svg>
    </span>
  );
}

function PageLinks({ className }) {
  return (
    <ul className={className}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}

function PageHeader() {
  return (
    <header className="siteHeader">
      <div className="wrap bar">
        <a className="brand" href="#top">
          <span className="brandName">{siteConfig.name}</span>
          <span className="brandMeta">Websites for local businesses</span>
        </a>
        <details className="menu">
          <summary>Menu</summary>
          <nav aria-label="On this page">
            <PageLinks className="menuList" />
          </nav>
        </details>
        <nav className="desktopNav" aria-label="On this page">
          <PageLinks className="desktopList" />
        </nav>
        <a className="headerCall" href={telHref()} aria-label={`Call ${siteConfig.phoneDisplay}`}>
          <span className="callShort">Call</span>
          <span className="callFull">Call {siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}

function WebsitesPage() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <div className="glows" aria-hidden="true">
        <span className="blob blobBlue" />
        <span className="blob blobViolet" />
        <span className="blob blobPeach" />
      </div>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <PageHeader />
      <main id="main" tabIndex={-1}>
        <section className="section hero" id="top">
          <div className="wrap heroGrid">
            <div className="heroCopy">
              <p className="eyebrow">Websites for Inland Empire businesses</p>
              <h1>Your website should bring you customers, not lose them.</h1>
              <p className="lede">
                I build and fix websites for local businesses so they load fast, work on phones, show up on Google, and turn visitors into calls. Local web designer in {siteConfig.city}, 10+ years of experience.
              </p>
              <p className="serviceArea">Serving {serviceArea}.</p>
              <div className="heroActions">
                <a className="btn btnPrimary" href={telHref()}>
                  Call or text {siteConfig.phoneDisplay}
                </a>
                <a className="btn btnGhost" href="#sample">
                  See a before & after
                </a>
              </div>
            </div>
            <figure className="heroVisual">
              <img
                src={heroShot1200}
                srcSet={`${heroShot640} 640w, ${heroShot1200} 1200w`}
                sizes="(min-width: 900px) 520px, 92vw"
                alt="Desktop homepage of the Summit Air Heating & Cooling sample site, a demo business"
                width={1200}
                height={916}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="reviewStrip" id="free-review" aria-labelledby="free-review-title">
          <div className="wrap reviewStripInner">
            <h2 id="free-review-title">{reviewOffer.title}</h2>
            <p className="offerText">{reviewOffer.text}</p>
            <ContactActions />
            <p className="reassure">
              I answer the phone and read every email myself. No call centers, no sales team.
            </p>
          </div>
        </section>

        <CaseStudy />

        <SummitSample />

        <section className="section bandWhite" id="problems">
          <div className="wrap">
            <div className="sectionHead problemHead">
              <h2>Why your website isn't bringing in calls</h2>
              <p className="sectionIntro">
                These are the most common problems I see on local business sites, and each one costs you customers. Here's what I fix.
              </p>
            </div>
            <ul className="problemList">
              {problems.map((problem, index) => (
                <li key={problem.title} className="problem">
                  <ProblemIcon index={index} />
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </li>
              ))}
              <li className="problem problemCta">
                <h3>Not sure what's wrong?</h3>
                <a className="problemCtaBtn" href="#review">
                  Get a free 15-minute website review
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="wrap">
            <div className="sectionHead">
              <h2>Simple, upfront pricing</h2>
              <p className="sectionIntro">
                Starting prices for a typical small business site. After your free 15-minute website review you get a fixed quote, so you know the exact price before I start. No surprise bills.
              </p>
            </div>
            <ul className="packageGrid">
              {packages.map((item, index) => (
                <li key={item.name} className={index === 1 ? "package packagePopular" : "package"}>
                  {index === 1 ? <p className="popularLabel">Most popular</p> : null}
                  <h3>{item.name}</h3>
                  <p className="priceBlock">
                    <span className="priceLabel">Starting at</span>
                    <span className="price">
                      {item.price}
                      {item.unit ? <span className="priceUnit">{item.unit}</span> : null}
                    </span>
                  </p>
                  <p>{item.summary}</p>
                  <ul className="points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="btn btnPrimary" href={item.href}>
                    {item.cta}
                  </a>
                </li>
              ))}
            </ul>
            <p className="priceNote">{priceNote}</p>
          </div>
        </section>

        <section className="section bandWhite" id="process">
          <div className="wrap">
            <div className="sectionHead">
              <h2>How it works</h2>
              <p className="sectionIntro">
                Four simple steps. You know the price before any work starts.
              </p>
            </div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title} className="step">
                  <span className="stepNumber" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>
                    {step.href ? <a href={step.href}>{step.title}</a> : step.title}
                  </h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="featureRow">
              <div className="featureCopy">
                <h2 id="about-title">{aboutTitle}</h2>
                <div className="aboutCopy">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <figure className="featureVisual">
                <picture>
                  <source srcSet={headshotWebp} type="image/webp" />
                  <img
                    className="headshot"
                    src={headshotJpg}
                    alt={siteConfig.name}
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </figure>
            </div>
            <div className="experienceBlock" id="proof">
              <h3>{experienceTitle}</h3>
              <p className="sectionIntro">{experienceIntro}</p>
            </div>
            <ul className="proofList">
                {proofPoints.map((item) => (
                  <li key={item.title} className="proof">
                    <h4>{item.title}</h4>
                    <p className="proofMeta">{item.meta}</p>
                    <p>{item.text}</p>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section className="section bandWhite" id="questions">
          <div className="wrap">
            <div className="sectionHead">
              <h2>Common questions</h2>
              <p className="sectionIntro">Quick answers. Anything else, just call or text.</p>
            </div>
            <div className="faq">
              {questions.map((item) => (
                <details key={item.question}>
                  <summary>
                    <h3>{item.question}</h3>
                  </summary>
                  <p className="faqAnswer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section ctaBand" id="review">
          <div className="wrap ctaInner">
            <h2>Get your free 15-minute website review</h2>
            <p>
              Text or email me your website address. I'll look at it, alone or with you on a quick call, and tell you exactly what I'd fix first. It's free, and there's no obligation.
            </p>
            <ContactActions />
          </div>
        </section>
      </main>
      <footer className="siteFooter">
        <div className="wrap footerGrid">
          <div className="footerBrand">
            <p className="footerName">{siteConfig.name}</p>
            <p>
              {siteConfig.city}, {siteConfig.region}
            </p>
            <p>Websites for small businesses in {serviceAreaCities}, and the Inland Empire.</p>
          </div>
          <ul className="footerContact">
            <li>
              <a href={telHref()}>Call {siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={smsHref()}>Text {siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={mailtoHref(reviewSubject)}>{siteConfig.email}</a>
            </li>
          </ul>
        </div>
        <div className="wrap footerBottom">
          <p>
            © {year} {siteConfig.name}
          </p>
          <a href="../">Developer portfolio</a>
        </div>
      </footer>
    </div>
  );
}

export default WebsitesPage;
