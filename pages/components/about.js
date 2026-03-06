export default function About() {
  return (
    <section className="section animate-fadeUp delay-1">
      <p className="section-label">// About Me</p>
      <div className="about-grid">
        <div className="about-summary">
          <p className="text-body">
            Backend developer specializing in designing. Proficient in{" "}
            <strong>Node.js (Express)</strong> and <strong>Go</strong>, with
            hands-on experience across multiple Go frameworks including Chi,
            Fiber, and Gin. Applies production-grade{" "}
            <strong>observability practices</strong> for logging, monitoring,
            and debugging distributed systems. Also comfortable working with{" "}
            <strong>React</strong> and <strong>Vite</strong> when frontend work
            needs to get done.
          </p>
        </div>
        <div className="about-stack">
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
            &nbsp;&nbsp;<span className="key">"databases"</span>:{" "}
            <span className="val">["PostgreSQL", "MySQL", "Redis"],</span>
            <br />
            &nbsp;&nbsp;<span className="key">"frontend"</span>:{" "}
            <span className="val">["React", "Vite"],</span>
            <br />
            &nbsp;&nbsp;<span className="key">"observability"</span>:{" "}
            <span className="val">["APM", "Logging", "Tracing"]</span>
            <br />
            <span className="bracket">{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
