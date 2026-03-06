const experienceData = [
  {
    role: "Backend Developer",
    company: "Rey.ID",
    period: "09/2024 - Present",
    highlights: [
      "Developed server-side applications using Node.js and Express framework",
      "Collaborated with QA and Frontend teams to design RESTful APIs and gRPC services",
      "Maintained microservices-based applications with scalable, modular solutions",
    ],
  },
  {
    role: "Intern Backend Developer",
    company: "Elemes ID",
    period: "12/2023 - 05/2024",
    highlights: [
      "Backend developer for various company projects using Golang",
      "Responsible for creating RESTful APIs for applications",
    ],
  },
  {
    role: "Backend Developer",
    company: "Bangkit Academy — Cloud Computing Path",
    period: "02/2023 - 07/2023",
    highlights: [
      "Capstone Project: Vistr — Tourism recommendation app",
      "Created RESTful APIs and managed server infrastructure on Google Cloud",
    ],
  },
  {
    role: "Fullstack Web Developer",
    company: "Freelance",
    period: "2021 - 2023",
    highlights: [
      "Built survey web application for Trade Department Balikpapan City (Laravel + React)",
      "Developed Simpas — research management system for Institut Teknologi Kalimantan",
    ],
  },
  {
    role: "Professor's Assistant",
    company: "Kalimantan Institute of Technology",
    period: "2020 - 2022",
    highlights: [
      "Teaching Assistant for Programming and Algorithm course",
      "Designed course materials and helped students grasp core programming topics",
    ],
  },
];

function ExperienceItem({ role, company, period, highlights }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div className="experience-info">
          <h3 className="experience-role">{role}</h3>
          <p className="experience-company">{company}</p>
        </div>
        <span className="experience-period">{period}</span>
      </div>
      <ul className="experience-highlights">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section animate-fadeUp delay-3">
      <p className="section-label">// Experience</p>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <ExperienceItem
            key={index}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            highlights={exp.highlights}
          />
        ))}
      </div>
    </section>
  );
}
