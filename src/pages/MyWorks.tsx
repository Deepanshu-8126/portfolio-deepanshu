import { Link } from "react-router-dom";
import { config } from "../config";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-container">
        <div className="myworks-header">
          <Link to="/" className="myworks-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <span className="myworks-label">PROJECT ARCHIVE</span>
          <h1>All Data Projects</h1>
          <p className="myworks-sub">
            Exploratory Data Analysis, Analytics Dashboards, and Machine Learning Projects
          </p>
        </div>

        <div className="myworks-grid">
          {config.projects.map((project, index) => (
            <div className="myworks-card" key={project.id}>
              <div className="myworks-card-top">
                <span className="myworks-card-num">0{index + 1}</span>
                <span className="myworks-card-cat">{project.category}</span>
              </div>

              <div className="myworks-card-body">
                <h3>
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p>{project.description}</p>
                <div className="myworks-card-tags">
                  {(project.technologies || "").split(",").map((tech: string, i: number) => (
                    <span key={i} className="myworks-tag">{tech.trim()}</span>
                  ))}
                </div>
              </div>

              <div className="myworks-card-footer">
                <Link to={`/projects/${project.id}`} className="myworks-link-btn primary">
                  View Details →
                </Link>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="myworks-link-btn">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="myworks-link-btn">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
