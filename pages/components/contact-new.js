export default function Contact() {
  return (
    <section className="section animate-fadeUp delay-5">
      <p className="section-label">// Get In Touch</p>
      <div className="contact-content">
        <p className="text-body" style={{ marginBottom: "1.5rem" }}>
          I'm always open to discussing new projects, opportunities, or just
          having a chat about technology and backend systems.
        </p>
        <div className="contact-email">
          <a href="mailto:ansarfadillah17@gmail.com" className="email-link">
            ansarfadillah17@gmail.com
          </a>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/ansxy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ansar-fadillah-a09ba1189/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/ansarfadillah_/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
