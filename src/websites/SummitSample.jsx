import styles from "./SummitSample.module.css";
import { DEMO_URL } from "../data/site.js";
import { sampleCallouts, sampleCopy } from "./content.js";
import homeDesktop1200Webp from "../assets/websites/summit-home-desktop-1200.webp";
import homeDesktop640Webp from "../assets/websites/summit-home-desktop-640.webp";
import homeDesktop1200Jpg from "../assets/websites/summit-home-desktop-1200.jpg";
import homeMobile600Webp from "../assets/websites/summit-home-mobile-600.webp";
import homeMobile300Webp from "../assets/websites/summit-home-mobile-300.webp";
import homeMobile600Jpg from "../assets/websites/summit-home-mobile-600.jpg";
import homeMobile300Jpg from "../assets/websites/summit-home-mobile-300.jpg";
import service1200Webp from "../assets/websites/summit-service-1200.webp";
import service640Webp from "../assets/websites/summit-service-640.webp";
import service1200Jpg from "../assets/websites/summit-service-1200.jpg";

const HOME_DESKTOP = { width: 1200, height: 916 };
const HOME_MOBILE = { width: 600, height: 1298 };
const SERVICE_PAGE = { width: 1200, height: 916 };

function liveDemoUrl(value) {
  if (typeof value !== "string") return null;
  const url = value.trim();
  return url === "" ? null : url;
}

function Shot({ webpSet, jpgSet, src, alt, width, height, sizes }) {
  return (
    <picture>
      <source type="image/webp" srcSet={webpSet} sizes={sizes} />
      {jpgSet ? <source type="image/jpeg" srcSet={jpgSet} sizes={sizes} /> : null}
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
    </picture>
  );
}

function NotSecureIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2.6 1.6 21.4h20.8L12 2.6zm0 6.1c.5 0 .9.4.9.9v5.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9V9.6c0-.5.4-.9.9-.9zM12 17.2a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3z"
      />
    </svg>
  );
}

function OutdatedSite() {
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.earpiece} />
      <div className={styles.screen}>
        <div className={styles.chrome}>
          <span className={styles.notSecure}>
            <NotSecureIcon />
            Not secure
          </span>
          <span className={styles.url}>http://ourcompany-site.com</span>
        </div>
        <div className={styles.crop}>
          <div className={styles.oldSite}>
            <p className={styles.oldWelcome}>WELCOME TO OUR WEBSITE!!!</p>
            <p className={styles.oldMarquee}>*** NEW *** Please sign our guestbook ***</p>
            <div className={styles.oldNav}>
              <span>Home</span>
              <span>About Us</span>
              <span>Products</span>
              <span>Guestbook</span>
              <span>Links</span>
              <span>Contact</span>
            </div>
            <div className={styles.oldRainbow} />
            <p className={styles.oldConstruct}>UNDER CONSTRUCTION</p>
            <div className={styles.oldTable}>
              <p className={styles.oldCompany}>OUR COMPANY</p>
              <p>
                Welcome, visitor. This is the online brochure for our company. The page was
                built for a desktop monitor.
              </p>
              <p>Please view this site on a computer. Phones have to scroll sideways.</p>
              <p className={styles.oldPhoneLine}>Phone: (555) 010-0199</p>
              <p>Fax: (555) 010-0198</p>
              <p>Email: info@ourcompany-site.com</p>
              <p>Hours: Monday to Friday, 9am to 5pm. Leave a message if nobody picks up.</p>
              <p className={styles.oldCounter}>You are visitor number 000184</p>
              <p className={styles.oldButton}>Enter site</p>
              <p className={styles.oldIe}>Best viewed in Internet Explorer at 800x600.</p>
            </div>
            <p className={styles.oldFoot}>
              Copyright 2004 Our Company. All rights reserved. Last updated 03/14/2004.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummitSample() {
  const liveDemo = liveDemoUrl(DEMO_URL);

  return (
    <section className="section" id="local-sample" aria-labelledby="sample-title">
      <div className="wrap">
        <div className="sectionHead">
          <h2 id="sample-title">{sampleCopy.sectionTitle}</h2>
          <p className="sectionIntro">{sampleCopy.sectionIntro}</p>
        </div>
        <div className={styles.compare}>
          <figure className={styles.before}>
            <p className={styles.badge}>Before</p>
            <h3 className={styles.slotTitle}>{sampleCopy.beforeTitle}</h3>
            <OutdatedSite />
            <p className={styles.plainNote}>{sampleCopy.beforeNote}</p>
          </figure>
          <div className={styles.after}>
            <p className={styles.badge}>After</p>
            <h3 className={styles.slotTitle}>{sampleCopy.afterTitle}</h3>
            <p className={styles.plainNote}>{sampleCopy.afterNote}</p>
            {liveDemo ? (
              <p className={styles.demoLink}>
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                  {sampleCopy.demoLink}
                </a>
              </p>
            ) : null}
            <div className={styles.shots}>
              <figure className={styles.shot}>
                <figcaption className={styles.shotCaption}>{sampleCopy.desktopCaption}</figcaption>
                <Shot
                  webpSet={`${homeDesktop640Webp} 640w, ${homeDesktop1200Webp} 1200w`}
                  src={homeDesktop1200Jpg}
                  alt="Desktop homepage of the Summit Air Heating & Cooling sample site, a demo business"
                  width={HOME_DESKTOP.width}
                  height={HOME_DESKTOP.height}
                  sizes="(min-width: 860px) 560px, 54vw"
                />
              </figure>
              <figure className={styles.shot}>
                <figcaption className={styles.shotCaption}>{sampleCopy.phoneCaption}</figcaption>
                <Shot
                  webpSet={`${homeMobile300Webp} 300w, ${homeMobile600Webp} 600w`}
                  jpgSet={`${homeMobile300Jpg} 300w, ${homeMobile600Jpg} 600w`}
                  src={homeMobile600Jpg}
                  alt="Phone homepage of the Summit Air Heating & Cooling sample site, a demo business, with a call button"
                  width={HOME_MOBILE.width}
                  height={HOME_MOBILE.height}
                  sizes="(min-width: 860px) 220px, 42vw"
                />
              </figure>
            </div>
            <figure className={styles.serviceShot}>
              <figcaption className={styles.shotCaption}>{sampleCopy.serviceCaption}</figcaption>
              <Shot
                webpSet={`${service640Webp} 640w, ${service1200Webp} 1200w`}
                src={service1200Jpg}
                alt="Services page of the Summit Air Heating & Cooling sample site, a demo business"
                width={SERVICE_PAGE.width}
                height={SERVICE_PAGE.height}
                sizes="(min-width: 860px) 780px, 92vw"
              />
            </figure>
          </div>
        </div>
        <div className={styles.changed}>
          <h3>{sampleCopy.changedTitle}</h3>
          <ul className={styles.callouts}>
            {sampleCallouts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.changedNote}>{sampleCopy.changedNote}</p>
        </div>
      </div>
    </section>
  );
}

export default SummitSample;
