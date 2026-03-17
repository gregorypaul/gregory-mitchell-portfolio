import styles from "./Projects.module.css"
import projects from "../../data/projects"
import FeaturedProject from "../FeaturedProject/FeaturedProject"
import ProjectCard from "../ProjectCard/ProjectCard";
import { Star } from 'lucide-react';

function Projects() {

    const featuredProjects = projects.filter(project => project.featured)
    const otherProjects = projects.filter(project => !project.featured)

  return (
    <section className={styles.projects} id="projects">

            <div className="headerWrapper">
                <span className="command">$ ls ./projects</span>

                <h2 className="title"><Star /> Featured Work</h2>

                <p className="subtitle">
                    A selection of projects showcasing my expertise in building
                    scalable, performant applications.
                </p>
            </div>

            <div className={styles.projectList}>
                {featuredProjects.map((project, index) => (
                    <FeaturedProject
                        key={project.title}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
            <div className={styles.otherHeaderWrapper}>
                <span className="command">$ ls ./other/projects</span>

                <h2 className="title">Other Work</h2>

                <p className="subtitle">
                    A collection of smaller applications, experiments, and client work
                    built while exploring different technologies and solving real-world problems.
                </p>
            </div>
            <div className={styles.projectRow}>
                <div className={styles.content}>

                    <div className={`other ${styles.otherProjectList}`}>
                        {otherProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </section>
  )
}

export default Projects