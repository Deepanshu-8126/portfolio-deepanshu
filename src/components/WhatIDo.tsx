import "./styles/WhatIDo.css";

const services = [
  {
    num: "01",
    title: "Exploratory Data Analysis (EDA)",
    desc: "Uncovering hidden patterns, anomalies, and statistical insights from raw datasets using Pandas, NumPy, and visualization tools.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    num: "02",
    title: "Data Visualization & BI Dashboards",
    desc: "Transforming complex metrics into actionable visual stories through interactive Power BI dashboards and clean analytical reports.",
    tools: ["Power BI", "Tableau", "Excel", "SQL"]
  },
  {
    num: "03",
    title: "Predictive Analytics & Machine Learning",
    desc: "Building foundational machine learning models to forecast trends, classify data, and assist in evidence-based decision making.",
    tools: ["Scikit-Learn", "Python", "Jupyter", "SQL"]
  }
];

const WhatIDo = () => {
  return (
    <div className="what-ido-section" id="whatido">
      <div className="what-ido-container">
        <div className="what-ido-header">
          <span className="what-ido-label">FOCUS AREAS</span>
          <h2>What I Do</h2>
        </div>

        <div className="what-ido-grid">
          {services.map((item) => (
            <div className="what-ido-card" key={item.num}>
              <div className="what-ido-card-num">{item.num}</div>
              <h3 className="what-ido-card-title">{item.title}</h3>
              <p className="what-ido-card-desc">{item.desc}</p>
              <div className="what-ido-card-tags">
                {item.tools.map((t, idx) => (
                  <span key={idx} className="what-ido-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
