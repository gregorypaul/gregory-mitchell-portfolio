import styles from './SkillCard.module.css'

function SkillCard({categories}) {
    const {
        category,
        icon: Icon, 
        skills
    } = categories

    return (
        <article className={styles.card}>
            <div className={styles.content}>
                <div className={styles.flexContainer}>
                    <Icon size={24}/>
                    <h3 style={{fontFamily: 'monospace', marginBottom: 0, fontSize: 20 + 'px', fontWeight: 400 }}>{category}</h3>
                </div>
                <div className={styles.techStack}>
                    {skills.map((skill) => (
                        <span key={skill} className="tech">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default SkillCard