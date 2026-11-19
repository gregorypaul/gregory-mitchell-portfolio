import styles from "./ProjectCard.module.css"
import ProjectLinks from "../ProjectLinks/ProjectLinks"

function ProjectCard({ project }) {

    const {
        title,
        description,
        image,
        tech,
        github,
        demo,
        demoLabel,
        caseStudy,
    } = project

    const summary = description.length > 140
        ? `${description.slice(0, 140).trim()}…`
        : description

    return (
        <article className={styles.card}>

            <div className={styles.imageWrapper}>
                <img src={image} alt={title} />
            </div>

            <div className={styles.content}>

                <h3 className={styles.title}>
                    {title}
                </h3>

                <p className={styles.description}>
                    {summary}
                </p>

                <div className={styles.techStack}>
                    {tech.map((item) => (
                        <span key={item} className="tech">
                            {item}
                        </span>
                    ))}
                </div>

                <ProjectLinks
                    github={github}
                    demo={demo}
                    demoLabel={demoLabel}
                    caseStudy={caseStudy}
                />

            </div>

        </article>
    )
}

export default ProjectCard