import styles from "./Services.module.css";
import services from "../../data/services";
import { mailtoHref, siteConfig } from "../../data/site";

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="headerWrapper">
        <span className="command">$ ./services --region &quot;Inland Empire&quot;</span>
        <h2 className="title">Services for local businesses</h2>
        <p className="subtitle">
          Website help for shops and offices in Lake Elsinore and across the Inland Empire. Tell me what the site does today and what is broken. There is no price list on this page.
        </p>
        <a className={styles.localLink} href={siteConfig.websitesPath}>
          For local businesses →
        </a>
      </div>

      <div className={styles.row}>
        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.cardTitle}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>

        <div className={styles.cta}>
          <p>Send the site address and a short note about what you need.</p>
          <a className={styles.button} href={mailtoHref("Inland Empire website")}>
            Email about a website
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
