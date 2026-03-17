import { useInView } from "react-intersection-observer"
import ProjectCard from "../ProjectCard/ProjectCard"
import styles from "../Projects/Projects.module.css"

function AnimatedProjectCard({ project, index }) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <div
            ref={ref}
            className={inView ? styles.cardVisible : styles.cardHidden}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <ProjectCard project={project} />
        </div>
    )
}

export default AnimatedProjectCard