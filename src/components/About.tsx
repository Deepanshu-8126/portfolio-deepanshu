import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">

        {/* ── Photo column ── */}
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img
              src="/images/deepanshu.jpeg"
              alt="Deepanshu Kapri"
              className="about-photo"
            />
          </div>
          <div className="about-photo-caption">
            <span className="about-photo-dot"></span>
            Deepanshu Kapri
          </div>
        </div>

        {/* ── Info column ── */}
        <div className="about-me">
          <p className="about-section-label">About Me</p>

          <h2 className="about-headline">
            BCA Student building real-world<br />
            Data Analytics & AI/ML projects.
          </h2>

          <p className="about-body">
            I'm a 3rd-year BCA student at MIET College, Kumaun University,
            passionate about turning raw data into meaningful insights.
            I work with Python, SQL, Pandas, and visualization tools to
            explore and analyze real datasets — learning by doing, not
            just by watching tutorials.
          </p>

          {/* Education block */}
          <div className="about-edu">
            <div className="about-edu-row">
              <div className="about-edu-left">
                <span className="about-edu-degree">Bachelor of Computer Applications (BCA)</span>
                <span className="about-edu-college">MIET College, Kumaun University</span>
              </div>
              <div className="about-edu-right">
                <span className="about-edu-year">2024 – 2027</span>
              </div>
            </div>
          </div>

          {/* Skills list */}
          <div className="about-skills">
            {["Python", "SQL", "Pandas", "NumPy", "Power BI", "Matplotlib", "Scikit-learn", "Tableau"].map((s) => (
              <span key={s} className="about-skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
