import styles from "./Footer.module.css";
import { Github, Linkedin, Mail } from "lucide-react";
import { mailtoHref, siteConfig } from "../../data/site";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerRow}>
                <div className={styles.content}>

                    <div className={styles.grid}>

                        <div className={styles.brand}>
                            <div className={styles.logo}>
                                <span className={styles.prompt}>›_</span>
                                <span className={styles.name}>gregory.dev</span>
                            </div>

                            <p className={styles.description}>
                                Frontend-focused full-stack developer in Lake Elsinore, California. Remote contracts and Inland Empire website work.
                            </p>
                        </div>

                        <div className={styles.nav}>
                            <h4 className={styles.heading}>NAVIGATE</h4>

                            <div className={styles.links}>
                                <a href="#projects">./projects</a>
                                <a href="#case-study-dishly">./casestudy</a>
                                <a href="#services">./services</a>
                                <a href="#experience">./experience</a>
                                <a href="#skills">./skills</a>
                                <a href="#contact">./contact</a>
                            </div>
                        </div>

                        <div className={styles.connect}>
                            <h4 className={styles.heading}>CONNECT</h4>

                            <div className={styles.icons}>
                                <a href={siteConfig.github} className={styles.socialIcon} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github size={20} />
                                </a>
                                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href={mailtoHref("Portfolio inquiry")} className={styles.socialIcon} aria-label={`Email ${siteConfig.email}`}>
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.bottomRow}>
                <div className={styles.content}>

                    <div className={styles.bottom}>

                        <p>
                            © {new Date().getFullYear()} Gregory Mitchell · Lake Elsinore, CA
                        </p>

                        <span className={styles.command}>
                            $ echo "Always learning, always building"
                        </span>

                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
