import styles  from './Experience.module.css'
import { Briefcase, Calendar, TrendingUp } from 'lucide-react'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import experience from '../../data/experiences'

function Experience() {
    return(
        <section className={styles.experience} id="experience">
            <div className="headerWrapper">
                <span className="command">$ cat ./experience.log</span>

                <h2 className="title">Experience</h2>

                <p className="subtitle">
                    My journey through the tech industry, building products and leading teams..
                </p>
            </div>
            <div className={styles.experienceRow}>
                <div className={styles.content}>
                    <div className={`experience ${styles.experienceList}`}>
                        {experience.map((experiences) => (
                            <ExperienceCard 
                                experience={experiences} 
                                key={experiences.title}
                                index={experiences.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience