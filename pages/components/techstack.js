export default function TechStack() {
  return (
    <section className="section animate-fadeUp delay-2">
      <p className="section-label">// Technical Stack</p>
      <div className="stack-block">
        <span className="comment">// stack.json</span>
        <br />
        <span className="bracket">{"{"}</span>
        <br />
        &nbsp;&nbsp;<span className="key">"backend"</span>:{" "}
        <span className="val">["Node.js", "Express", "Go"],</span>
        <br />
        &nbsp;&nbsp;<span className="key">"go_frameworks"</span>:{" "}
        <span className="val">["Chi", "Fiber", "Gin"],</span>
        <br />
        &nbsp;&nbsp;<span className="key">"frontend"</span>:{" "}
        <span className="val">["React", "Vite"],</span>
        <br />
        &nbsp;&nbsp;<span className="key">"databases"</span>:{" "}
        <span className="val">["PostgreSQL", "MySQL", "Redis"],</span>
        <br />
        &nbsp;&nbsp;<span className="key">"observability"</span>:{" "}
        <span className="val">["APM", "Logging", "Tracing"],</span>
        <br />
        &nbsp;&nbsp;<span className="key">"focus"</span>:{" "}
        <span className="val">["RESTful APIs", "Scalable Systems"]</span>
        <br />
        <span className="bracket">{"}"}</span>
      </div>
    </section>
  );
}
