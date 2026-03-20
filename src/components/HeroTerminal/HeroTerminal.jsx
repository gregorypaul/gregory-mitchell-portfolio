import styles from "./HeroTerminal.module.css";
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import ParallaxLayer from "../ParallaxLayer/ParallaxLayer";
import FloatingParticles from "../FloatingParticles/FloatingParticles";
import { useRef } from "react";

export default function HeroTerminal() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleText, setVisibleText] = useState("");
    const command = "whoami";
    const parallaxRef = useRef(null);
    const heroRef = useRef(null);
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsLoaded(true);
        });

        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setVisibleText(command.slice(0, index + 1));
            index++;

            if (index === command.length) {
                clearInterval(interval);
            }
        }, 120);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

    const handleScroll = () => {
        if (!parallaxRef.current) return;

        const scrolled = window.scrollY;

        parallaxRef.current.style.transform =
            `translateY(${scrolled * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section ref={heroRef} className={styles.hero}>            
            <div className={`${styles.heroInner} ${isLoaded ? styles.isLoaded : ""}`}>
                <ParallaxLayer scroll speed={0.2} fill>
                    <div className={styles.grid}></div>
                </ParallaxLayer>

                <div className={styles.backgroundGlow}></div>

                {!isMobile && <FloatingParticles styles={styles} />}
                <ParallaxLayer mouse={isActive} strenth="30">
                    <div className={styles.content} ref={parallaxRef}>
                        <div
                            className={`${styles.commandLine} ${styles.reveal}`}
                            style={{ "--delay": "0ms" }}
                        >
                            <span className={styles.prompt}>$</span>
                            <span className={styles.command}>
                                {visibleText}
                                <span className={styles.cursor}></span>
                            </span>
                        </div>

                        <h1
                            className={`${styles.heading} ${styles.reveal}`}
                            style={{ "--delay": "120ms" }}
                        >
                            Gregory Mitchell
                        </h1>

                        <p
                            className={`${styles.description} ${styles.reveal}`}
                            style={{ "--delay": "220ms" }}
                        >
                            Full-stack engineer building scalable products
                            and developer tools.
                        </p>

                        <div
                            className={`${styles.socials} ${styles.reveal}`}
                            style={{ "--delay": "320ms" }}
                        >
                            <a href="#" className={styles.socialIcon}>
                                <Github size={20} />
                            </a>

                            <a href="#" className={styles.socialIcon}>
                                <Linkedin size={20} />
                            </a>

                            <a href="#" className={styles.socialIcon}>
                                <Mail size={20} />
                            </a>
                        </div>

                        <button
                            className={`${styles.cta} ${styles.reveal}`}
                            style={{ "--delay": "380ms" }}
                        >
                            <span>View Projects →</span>
                        </button>
                    </div>
                </ParallaxLayer>

                <div className={styles.scrollIndicator}>
                    <ChevronDown className={styles.arrow} />
                </div>

                <div className={styles.heroFade}></div>
            </div>
        </section>
    );
}