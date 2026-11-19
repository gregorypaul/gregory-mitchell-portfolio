import styles  from './Experience.module.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import experience, { education } from '../../data/experiences'

function Experience() {
    return(
        <section className={styles.experience} id="experience">
            <div className="headerWrapper">
                <span className="command">$ cat ./experience.log</span>

                <h2 className="title">Experience</h2>

                <p className="subtitle">
                    Roles and dates as they appear on my resume.
                </p>
            </div>
            <div className={styles.experienceRow}>
                <div className={styles.content}>
                    <div className={`experience ${styles.experienceList}`}>
                        {experience.map((experiences) => (
                            <ExperienceCard 
                                experience={experiences} 
                                key={experiences.id}
                            />
                        ))}
                    </div>

                    <div className={styles.education}>
                        <h3>Education</h3>
                        <ul>
                            {education.map((item) => (
                                <li key={item.credential}>
                                    <strong>{item.credential}</strong>
                                    <span>
                                        {item.school}
                                        {item.period ? ` · ${item.period}` : ""}
                                        {item.detail ? ` · ${item.detail}` : ""}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience