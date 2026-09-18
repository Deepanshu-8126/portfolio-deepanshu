import "./styles/Landing.css";
import { config } from "../config";

const Landing = () => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        {/* LEFT — Name */}
        <div className="landing-intro">
          <p className="landing-greeting">Data Analyst & AI/ML Engineer</p>
          <h1 className="landing-name">
            {firstName}
            {lastName && <> <span>{lastName}</span></>}
          </h1>
          <p className="landing-tagline">
            BCA Student @ MIET College, Kumaon University
          </p>
          <div className="landing-cta-row">
            <a href="#work" className="landing-btn-primary">
              View Projects ↓
            </a>
            <a href="#contact" className="landing-btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT — Info block with clickable interactive cards */}
        <div className="landing-info">
          <a href="#about" className="landing-info-row landing-info-interactive" title="Click to view full background">
            <span className="landing-info-label">Location</span>
            <span className="landing-info-val">
              India <span className="landing-row-arrow">↗</span>
            </span>
          </a>
          <a href="#about" className="landing-info-row landing-info-interactive" title="Click to explore skills & focus">
            <span className="landing-info-label">Specialization</span>
            <span className="landing-info-val">
              Data Science & AI <span className="landing-row-arrow">↗</span>
            </span>
          </a>
          <a href="#about" className="landing-info-row landing-info-interactive" title="Click to view education">
            <span className="landing-info-label">Education</span>
            <span className="landing-info-val">
              BCA 2024–2027 <span className="landing-row-arrow">↗</span>
            </span>
          </a>
          <a href="#contact" className="landing-info-row landing-info-interactive landing-available-row" title="Click to get in touch">
            <span className="landing-info-label">Status</span>
            <span className="landing-info-val landing-available">
              <span className="landing-dot"></span> Open to Work <span className="landing-row-arrow">→</span>
            </span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Landing;
