const skillsData = [
  {
    label: "Primary",
    title: "Backend Engineering",
    description:
      "Design and development of scalable, maintainable server-side systems and RESTful APIs.",
    primaryPills: ["Node.js", "Go"],
    secondaryPills: ["Express", "REST APIs"],
  },
  {
    label: "Frameworks",
    title: "Go Ecosystem",
    description:
      "Multi-framework experience enabling flexibility across different project architectures and requirements.",
    primaryPills: ["Chi", "Fiber", "Gin"],
    secondaryPills: [],
  },
  {
    label: "Observability",
    title: "Monitoring & Debugging",
    description:
      "Hands-on experience with application performance monitoring, logging pipelines, and distributed tracing in production environments.",
    primaryPills: ["APM Tools", "Logging"],
    secondaryPills: ["Tracing", "Metrics"],
  },
  {
    label: "Supplementary",
    title: "Frontend Integration",
    description:
      "Working knowledge of modern frontend tooling to support full-stack collaboration and end-to-end delivery.",
    primaryPills: ["React", "Vite"],
    secondaryPills: [],
  },
];

function SkillCard({ label, title, description, primaryPills, secondaryPills }) {
  return (
    <div className="skill-card">
      <p className="skill-card-label">{label}</p>
      <h3 className="heading-section">{title}</h3>
      <p className="text-muted">{description}</p>
      <div className="tech-pills">
        {primaryPills.map((pill) => (
          <span key={pill} className="pill pill-primary">
            {pill}
          </span>
        ))}
        {secondaryPills.map((pill) => (
          <span key={pill} className="pill">
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section animate-fadeUp delay-3">
      <p className="section-label">// Core Competencies</p>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.title}
            label={skill.label}
            title={skill.title}
            description={skill.description}
            primaryPills={skill.primaryPills}
            secondaryPills={skill.secondaryPills}
          />
        ))}
      </div>
    </section>
  );
}
