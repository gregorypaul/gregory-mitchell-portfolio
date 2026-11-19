import styles from "./Contact.module.css";
import { mailtoHref, siteConfig } from "../../data/site";

function Contact() {
    return (
        <section className={styles.contact} id="contact">

            {/* SYSTEM HEADER (consistent across sections) */}
            <div className="headerWrapper">
                <span className="command">$ contact --init</span>

                <h2 className="title">Get In Touch</h2>

                <p className="subtitle">
                    Let’s build something meaningful together.
                </p>
            </div>

            {/* CTA BLOCK (custom emphasis) */}
            <div className={styles.contactRow}>
                <div className={styles.content}>

                    <div className={styles.ctaBlock}>

                        <h3 className={styles.ctaHeading}>
                            Let&apos;s Build Something Amazing
                        </h3>

                        <p className={styles.ctaText}>
                            For a remote contract or a local website, email is the direct line.
                            I read it myself.
                        </p>

                        <p className={styles.details}>
                            <a href={mailtoHref("Portfolio inquiry")}>{siteConfig.email}</a>
                            <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
                        </p>

                        <a
                            href={mailtoHref("Portfolio inquiry")}
                            className={styles.ctaButton}
                        >
                            Get in Touch
                        </a>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default Contact;