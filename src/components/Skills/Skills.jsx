import styles from './Skills.module.css'
import SkillCard from '../SkillCard/SkillCard'
import skillCategories from '../../data/skillCategories'
function Skills() {
    return (
        <section className={styles.skills} id="skills">
            <div className="headerWrapper">
                <span className="command">$ npm list --global</span>

                <h2 className="title">Skills & Tech</h2>

                <p className="subtitle">
                    A comprehensive toolkit for building modern, scalable applications.
                </p>
            </div>
            <div className={styles.skillsRow}>
                <div className={styles.content}>
                    <div className={`skills ${styles.skillsList}`}>
                        {skillCategories.map((categories) => (
                            <SkillCard 
                                categories={categories} 
                                key={categories.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills