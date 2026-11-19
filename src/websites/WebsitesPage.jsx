import BeforeAfter from "./BeforeAfter.jsx";
import {
  navLinks,
  packages,
  problems,
  proofPoints,
  questions,
  reviewSubject,
  serviceArea,
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

function ContactActions({ tone = "onLight" }) {
  const className = tone === "onDark" ? "btn btnLight" : "btn btnPrimary";

  return (
    <div className="actions">
      <a className={className} href={telHref()}>
        <PhoneIcon />
        <span className="btnText">
          <span className="btnLabel">Call</span>
          <span className="btnDetail">{siteConfig.phoneDisplay}</span>
        </span>
      </a>
      <a className={className} href={smsHref()}>
        <TextIcon />
        <span className="btnText">
          <span className="btnLabel">Text</span>
          <span className="btnDetail">{siteConfig.phoneDisplay}</span>
        </span>
      </a>
      <a className={className} href={mailtoHref(reviewSubject)}>
        <MailIcon />
        <span className="btnText">
          <span className="btnLabel">Email</span>
          <span className="btnDetail">{siteConfig.email}</span>
        </span>
      </a>
    </div>
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
      <a className="skip" href="#main">
        Skip to content
      </a>
      <PageHeader />
      <main id="main" tabIndex={-1}>
        <section className="section hero" id="top">
          <div className="wrap heroGrid">
            <p className="eyebrow">
              {siteConfig.city}, {siteConfig.region}
            </p>
            <h1>Your website should bring you customers, not lose them.</h1>
            <p className="lede">
              Local web developer in {siteConfig.city}, with 10+ years of experience.
            </p>
            <ContactActions />
            <p className="reassure">I answer the phone and read the email myself.</p>
            <p className="serviceArea">For business owners in {serviceArea}.</p>
          </div>
        </section>

        <section className="section bandWhite" id="problems">
          <div className="wrap">
            <div className="sectionHead">
              <h2>Problems I fix</h2>
              <p className="sectionIntro">
                These are the problems local owners ask me about. If the site is getting in the way, this is the work.
              </p>
            </div>
            <ul className="problemList">
              {problems.map((problem) => (
                <li key={problem.title} className="problem">
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="wrap">
            <div className="sectionHead">
              <h2>Three packages</h2>
              <p className="sectionIntro">
                Starting prices for a typical small site. The free review turns into a fixed quote before any work starts.
              </p>
            </div>
            <ul className="packageGrid">
              {packages.map((item) => (
                <li key={item.name} className="package">
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
          </div>
        </section>

        <section className="section bandWhite" id="process">
          <div className="wrap">
            <div className="sectionHead">
              <h2>How it works</h2>
              <p className="sectionIntro">
                Four steps. You know the price before I start.
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

        <section className="section" id="proof">
          <div className="wrap">
            <div className="sectionHead">
              <h2>Work I have done</h2>
              <p className="sectionIntro">
                I live in {siteConfig.city}. This is work from jobs I have held, on websites that were already live.
              </p>
            </div>
            <ul className="proofList">
              {proofPoints.map((item) => (
                <li key={item.title} className="proof">
                  <h3>{item.title}</h3>
                  <p className="proofMeta">{item.meta}</p>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            {/* TODO: Pass real before/after images once a client approves. */}
            <BeforeAfter />
          </div>
        </section>

        <section className="section bandWhite" id="questions">
          <div className="wrap">
            <div className="sectionHead">
              <h2>Common questions</h2>
              <p className="sectionIntro">
                A few answers before you get in touch.
              </p>
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
            <h2>Get a free website review</h2>
            <p>
              Send me your site address. I will spend 15 minutes looking at it and tell you what I would fix. The review is free.
            </p>
            <ContactActions tone="onDark" />
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
            <p>For business owners in {serviceArea}.</p>
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
