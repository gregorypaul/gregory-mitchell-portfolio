import { ExternalLink, Github } from "lucide-react";

function isHttpUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url);
}

function ProjectLinks({ github, demo, demoLabel = "Live Demo", caseStudy }) {
  const showGithub = isHttpUrl(github);
  const showDemo = isHttpUrl(demo);
  const showCaseStudy = typeof caseStudy === "string" && caseStudy.length > 0;

  if (!showGithub && !showDemo && !showCaseStudy) {
    return null;
  }

  return (
    <div className="project-links">
      {showGithub && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Github size={16} aria-hidden="true" />
          Code
        </a>
      )}
      {showDemo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="demo">
          <ExternalLink size={16} aria-hidden="true" />
          {demoLabel}
        </a>
      )}
      {showCaseStudy && <a href={caseStudy}>Case study</a>}
    </div>
  );
}

export default ProjectLinks;
