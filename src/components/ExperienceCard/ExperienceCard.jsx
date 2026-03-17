import styles from './ExperienceCard.module.css'
import { Code2, Briefcase, Calendar, TrendingUp } from 'lucide-react';

function ExperienceCard({experience}) {
    const {
        title,
        description,
        period,
        company,
        technologies,
        achievements,

    } = experience
    return (
        <article className={styles.card}>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleHeaderLeft}>
                        <div className={styles.titleCompanyHeader}>
                            <Briefcase className={styles.briefCase}/>
                            <h3>{title}</h3>
                        </div>
                        <p className={styles.titleCompanyHeaderText}>{company}</p>
                    </div>
                    <div className={styles.titleHeaderRight}>
                        <div className={`card ${styles.tech}`}>
                            <Calendar className={styles.calendar}/>
                            <span>{period}</span>
                        </div>
                    </div>
                </div>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.achievements}>
                    <div className={styles.trending}>
                        <TrendingUp className={styles.trendingUp}/>
                        <span>Key Achievements</span>
                    </div>
                    <ul>
                    {achievements.map((achievement, i) => (
                        <li key={i}>
                            <span>▹</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className={styles.techStack}>
                    {technologies.map((item) => (
                        <span key={item} className="tech">
                            {item}
                        </span>
                    ))}
                </div>

            </div>

        </article>
    )
}

export default ExperienceCard