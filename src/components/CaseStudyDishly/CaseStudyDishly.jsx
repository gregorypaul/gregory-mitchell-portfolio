import styles from "./CaseStudyDishly.module.css";

export default function CaseStudyDishly() {
    return (
        <section className={styles.caseStudy} id="case-study-dishly">

            <div className="headerWrapper">
                <span className="command">$ open case-study/dishly</span>
                <h2 className="title">Dishly Case Study</h2>
                <p className="subtitle">
                    Building a scalable recipe platform with a controlled data layer.
                </p>
            </div>

            <div className={styles.wrapper}>

                {/* HERO */}
                <div className={styles.hero}>
                    <div className={styles.heroText}>
                        <h3>From Prototype to Scalable Platform</h3>
                        <p>
                            Dishly evolved from an API-driven prototype into a full-stack
                            application with authentication, persistent data, and scalable architecture.
                        </p>
                    </div>

                    <div className={styles.heroImage}>
                        <img src="/projects/dishly-homepage-thumb.webp" alt="Dishly" />
                    </div>
                </div>

                {/* OVERVIEW */}
                <div className={styles.section}>
                    <h3>01 Overview</h3>

                    <p>
                        Dishly began as a simple recipe viewer using a third-party API.
                        As the project evolved, limitations around performance and scalability became clear.
                    </p>

                    <p>
                        The goal of Dishly 2.0 was to rebuild the system with a controlled data layer,
                        improved architecture, and real-world features like authentication and persistence.
                    </p>
                </div>

                {/* PROBLEM */}
                <div className={styles.section}>
                    <h3>02 Problem</h3>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h4>API Rate Limits</h4>
                            <p>Frequent failures due to strict third-party throttling.</p>
                        </div>

                        <div className={styles.card}>
                            <h4>No Backend</h4>
                            <p>No persistence or user data management.</p>
                        </div>

                        <div className={styles.card}>
                            <h4>Limited Features</h4>
                            <p>No favorites, collections, or personalization.</p>
                        </div>

                        <div className={styles.card}>
                            <h4>Scalability</h4>
                            <p>Architecture could not support future growth.</p>
                        </div>
                    </div>
                </div>

                {/* SOLUTION */}
                <div className={styles.section}>
                    <h3>03 Solution</h3>

                    <div className={styles.solutionBox}>
                        <p>
                            I introduced a Supabase-backed data layer and pre-populated a SQL database
                            with ~300 recipes. This removed dependency on external APIs while maintaining
                            an API-driven architecture and improving reliability.
                        </p>

                        <div className={styles.tags}>
                            <span>Auth</span>
                            <span>Database</span>
                            <span>API Layer</span>
                        </div>
                    </div>
                </div>

                {/* IMPLEMENTATION */}
                <div className={styles.section}>
                    <h3>04 Implementation</h3>

                    <div className={styles.implList}>
                        <div className={styles.implItem}>
                            <strong>Component Architecture</strong>
                            <p>Reusable React components with modular structure.</p>
                        </div>

                        <div className={styles.implItem}>
                            <strong>Backend Services</strong>
                            <p>Supabase with PostgreSQL and authentication.</p>
                        </div>

                        <div className={styles.implItem}>
                            <strong>Styling</strong>
                            <p>CSS Modules for scoped styling.</p>
                        </div>

                        <div className={styles.implItem}>
                            <strong>State</strong>
                            <p>Context API with custom hooks.</p>
                        </div>
                    </div>
                </div>

                {/* RESULTS */}
                <div className={styles.section}>
                    <h3>05 Results</h3>

                    <div className={styles.resultsGrid}>
                        <div><h2>300+</h2><p>Recipes Cached</p></div>
                        <div><h2>0</h2><p>API Failures</p></div>
                        <div><h2>3x</h2><p>Faster Queries</p></div>
                        <div><h2>95%</h2><p>Lighthouse</p></div>
                    </div>

                    <ul className={styles.resultsList}>
                        <li>Consistent performance with local data</li>
                        <li>Improved user engagement</li>
                        <li>Scalable foundation for growth</li>
                    </ul>
                </div>

                {/* INSIGHT */}
                <div className={styles.insight}>
                    <h4>Key Insight</h4>
                    <p>
                        The biggest improvement came from controlling the data layer.
                        By removing dependency on external constraints, the system became
                        more reliable, scalable, and easier to extend.
                    </p>
                </div>

            </div>
        </section>
    );
}