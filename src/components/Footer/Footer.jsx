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

                            <a href="#projects">./projects</a>
                            <a href="#experience">./experience</a>
                            <a href="#skills">./skills</a>
                        </div>

                        {/* CONNECT */}
                        <div className={styles.connect}>
                            <h4 className={styles.heading}>CONNECT</h4>

                            <div className={styles.icons}>
                                <a href="#"><Github /></a>
                                <a href="#"><Linkedin /></a>
                                <a href="#"><Twitter /></a>
                                <a href="#"><Mail /></a>
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