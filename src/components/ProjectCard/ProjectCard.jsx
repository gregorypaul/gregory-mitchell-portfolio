import styles from "./ProjectCard.module.css"
import { ExternalLink, Github } from "lucide-react"

function ProjectCard({ project }) {

    const {
        title,
        description,
        image,
        tech,
        github,
        demo
    } = project

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
                    {description.slice(0, 100) }...
                </p>

                <div className={styles.techStack}>
                    {tech.map((item) => (
                        <span key={item} className="tech">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    <a href={github} target="_blank" rel="noreferrer">
                        <Github size={16} />
                        Code
                    </a>

                    <a href={demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} />
                        Demo
                    </a>
                </div>

            </div>

        </article>
    )
}

export default ProjectCard