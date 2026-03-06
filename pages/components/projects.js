import projects from "../../public/lib/project.json";

function ProjectCard({ name, description, languages, url }) {
  return (
    <div className="project-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-title"
      >
        {name} →
      </a>
      <p className="project-card-desc">{description}</p>
      <div className="tech-pills">
        {languages.map((lang, index) => (
          <span key={index} className={index < 2 ? "pill pill-primary" : "pill"}>
            {lang}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section animate-fadeUp delay-4">
      <p className="section-label">// Latest Projects</p>
      <p className="text-muted mb-6" style={{ marginBottom: "1.5rem" }}>
        A selection of projects I've contributed to as a backend or frontend developer.
      </p>
      <div className="projects-grid">
        {projects.data.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            languages={project.languages}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}
