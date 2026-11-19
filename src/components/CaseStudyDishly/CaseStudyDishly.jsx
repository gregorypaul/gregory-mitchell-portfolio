import styles from "./CaseStudyDishly.module.css";

export default function CaseStudyDishly() {
    return (
        <section className={styles.caseStudy} id="case-study-dishly">

            <div className="headerWrapper">
                <span className="command">$ open case-study/dishly</span>
                <h2 className="title">Dishly Case Study</h2>
                <p className="subtitle">
                    A Laravel 10 recipe site with MySQL, Filament, and TheMealDB. This matches the live app and the public repository.
                </p>
            </div>

            <div className={styles.wrapper}>

                <div className={styles.hero}>
                    <div className={styles.heroText}>
                        <h3>A Laravel recipe application</h3>
                        <p>
                            Dishly stores recipes in MySQL, imports them from TheMealDB, and serves Blade pages with Tailwind CSS and Alpine.js. Accounts, ratings, and a Filament admin panel are part of the same Laravel app.
                        </p>
                    </div>

                    <div className={styles.heroImage}>
                        <img src="/projects/dishly-homepage-thumb.webp" alt="Dishly homepage" />
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>01 Overview</h3>

                    <p>
                        The public site is server-rendered Laravel 10 and PHP. Visitors browse recipes by category, open a recipe, and rate it after they sign in.
                    </p>

                    <p>
                        The repository is github.com/gregorypaul/Dishly. The live app is dishly.gregory-mitchell.com.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>02 What shipped</h3>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h4>Recipe browsing</h4>
                            <p>Category filters, pagination, and a grid or list layout over MySQL records.</p>
                        </div>

                        <div className={styles.card}>
                            <h4>Recipe pages</h4>
                            <p>Ingredients, steps, a rating, and related recipes.</p>
                        </div>

                        <div className={styles.card}>
                            <h4>Accounts</h4>
                            <p>Laravel login, registration, and password reset. Signed-in users can rate a recipe and submit one.</p>
                        </div>

                        <div className={styles.card}>
                            <h4>Admin</h4>
                            <p>Filament 3 screens for recipe and user records.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>03 Stack</h3>

                    <div className={styles.solutionBox}>
                        <p>
                            An Artisan command imports meals from TheMealDB into MySQL. The public interface is Blade, Tailwind CSS, and Alpine.js, built with Vite. Authentication is Laravel&apos;s own login and registration.
                        </p>

                        <div className={styles.tags}>
                            <span>Laravel 10</span>
                            <span>MySQL</span>
                            <span>Filament</span>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>04 Implementation</h3>

                    <div className={styles.implList}>
                        <div className={styles.implItem}>
                            <strong>Public pages</strong>
                            <p>Blade templates, Tailwind CSS, and Alpine.js.</p>
                        </div>

                        <div className={styles.implItem}>
                            <strong>Data</strong>
                            <p>MySQL, filled by the TheMealDB import command.</p>
                        </div>

                        <div className={styles.implItem}>
                            <strong>Accounts</strong>
                            <p>Laravel login, registration, and password reset.</p>
                        </div>

                        <div className={styles.implItem}>
                            <strong>Admin</strong>
                            <p>Filament 3 for recipes and users.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>05 In the repository</h3>

                    <div className={styles.resultsGrid}>
                        <div><h2>10</h2><p>Laravel</p></div>
                        <div><h2>SQL</h2><p>MySQL</p></div>
                        <div><h2>Admin</h2><p>Filament 3</p></div>
                        <div><h2>API</h2><p>TheMealDB</p></div>
                    </div>

                    <ul className={styles.resultsList}>
                        <li>PHP 8.1, as required by the Composer file</li>
                        <li>Vite builds the Tailwind assets</li>
                        <li>Code: github.com/gregorypaul/Dishly</li>
                    </ul>
                </div>

                <div className={styles.insight}>
                    <h4>Key Insight</h4>
                    <p>
                        The shipped product is one Laravel application. Recipes live in MySQL after the TheMealDB import, and the public pages are Blade templates in that same app.
                    </p>
                </div>

                <div className="project-links">
                    <a href="https://github.com/gregorypaul/Dishly" target="_blank" rel="noopener noreferrer">Code</a>
                    <a href="https://dishly.gregory-mitchell.com" target="_blank" rel="noopener noreferrer" className="demo">Live Demo</a>
                </div>

            </div>
        </section>
    );
}
