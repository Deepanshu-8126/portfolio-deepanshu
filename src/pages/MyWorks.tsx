import { Link } from "react-router-dom";
import { config } from "../config";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => (
          <Link 
            to={`/projects/${project.id}`}
            className="myworks-card" 
            key={project.id} 
            style={{ cursor: "pointer", textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div className="myworks-card-number">0{index + 1}</div>
            <div className="myworks-card-image">
              <img src={project.image} alt={project.title} />
              <div className="myworks-card-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="myworks-card-info">
              <h3>{project.title}</h3>
              <p className="myworks-card-category">{project.category}</p>
              <p className="myworks-card-description">{project.description}</p>
              <p className="myworks-card-tech">{project.technologies}</p>
              
              {/* Quick action links */}
              <div className="myworks-card-links" onClick={(e) => e.preventDefault()}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="myworks-link-btn">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="myworks-link-btn primary">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
