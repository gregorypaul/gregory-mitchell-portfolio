import styles from "./Footer.module.css";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerRow}>
                <div className={styles.content}>

                    <div className={styles.grid}>

                        {/* LEFT */}
                        <div className={styles.brand}>
                            <div className={styles.logo}>
                                <span className={styles.prompt}>›_</span>
                                <span className={styles.name}>gregory.dev</span>
                            </div>

                            <p className={styles.description}>
                                Full-Stack Developer crafting scalable solutions to complex problems.
                            </p>
                        </div>

                        {/* NAV */}
                        <div className={styles.nav}>
                            <h4 className={styles.heading}>NAVIGATE</h4>

                            <div className={styles.links}>
                                <a href="#projects">./projects</a>
                                <a href="#case-study-dishly">./casestudy</a>
                                <a href="#experience">./experience</a>
                                <a href="#skills">./skills</a>
                                <a href="#contact" className={styles.contact}>./contact</a>
                            </div>
                        </div>

                        {/* CONNECT */}
                        <div className={styles.connect}>
                            <h4 className={styles.heading}>CONNECT</h4>

                            <div className={styles.icons}>
                                <a href="https://github.com/gregorypaul" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/gregory-mitchell-dev#" target="_blank" rel="noopener noreferrer">
                                    <Linkedin size={20} />
                                </a>
                                <a href="?subject=Portfolio Inquiry&body=Hi Gregory,%0D%0A%0D%0AI came across your portfolio and would love to connect." className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className={styles.bottomRow}>
                <div className={styles.content}>

                    <div className={styles.bottom}>

                        <p>
                            © {new Date().getFullYear()} Gregory Mitchell • Built with 💙 and React
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