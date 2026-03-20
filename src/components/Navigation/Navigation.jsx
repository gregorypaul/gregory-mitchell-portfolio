import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.inner}>

                    <div className={styles.logo}>
                        <span className={styles.prompt}>›_</span>
                        <span className={styles.name}>gregory.dev</span>
                    </div>

                    <div className={styles.links}>
                        <a href="#projects">./projects</a>
                        <a href="#experience">./experience</a>
                        <a href="#skills">./skills</a>

                        <a href="#contact" className={styles.contact}>
                            Contact
                        </a>
                    </div>

                </div>
            </nav>
    );
}

export default Navigation;