export default function BottomSection() {
  return (
    <section className="section animate-fadeUp delay-5">
      <div className="bottom-grid">
        {/* Education */}
        <div className="bottom-block">
          <p className="section-label">// Education</p>
          <div className="edu-block">
            <span className="edu-year">2020 - 2024</span>
            <div className="edu-content">
              <h3>Kalimantan Institute of Technology</h3>
              <p>Bachelor of Informatics Engineering</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bottom-block">
          <p className="section-label">// Get In Touch</p>
          <div className="contact-compact">
            <a href="mailto:ansarfadillah17@gmail.com" className="email-link">
              ansarfadillah17@gmail.com
            </a>
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
        </div>
      </div>
    </section>
  );
}
