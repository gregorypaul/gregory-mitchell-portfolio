import styles from "./FeaturedProject.module.css"
import { Code2 } from 'lucide-react';
import ProjectLinks from "../ProjectLinks/ProjectLinks";

function FeaturedProject({ project, index }) {

    const projectNumber = String(index + 1).padStart(2, "0")
    const { align } = project;
    const contentClass = align === "left" ? styles.rowLeft : styles.rowRight;    
    return (

        <div className={styles.projectRow}>

            <div className={`${styles.content} ${contentClass}`}>

                <div className={styles.imageColumn}>

                    <div className={styles.imageWrapper}>
                        <img src={project.image} alt={project.title} />
                    </div>

                </div>

                <div className={styles.textColumn}>

                    <div className={styles.projectMeta}>
                        <Code2 className={styles.codeIcon} />
                        <span className={styles.projectNumber}>{projectNumber}</span>
                    </div>

                    <h3 className={styles.projectTitle}>
                        {project.title}
                    </h3>

                    <p className={styles.description}>
                        {project.description}
                    </p>

                    <div className={styles.techStack}>
                        {project.tech.map((tech) => (
                            <span key={tech} className="tech">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <ProjectLinks
                        github={project.github}
                        demo={project.demo}
                        demoLabel={project.demoLabel}
                        caseStudy={project.caseStudy}
                    />

                </div>
                <div className={styles.bottomAccent}></div>

            </div>
            

        </div>

            
    )
}

export default FeaturedProject