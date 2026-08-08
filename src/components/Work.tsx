import "./styles/Work.css";
import { useState } from "react";
import { config } from "../config";
import { Link } from "react-router-dom";
import { MdFolderOpen, MdArrowForward } from "react-icons/md";
import PreviewModal from "./PreviewModal";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <div className="work-header">
            <span className="work-label">PORTFOLIO ARCHIVE</span>
            <h2>Featured Projects</h2>
          </div>

          <div className="work-grid">
            {config.projects.slice(0, 5).map((project, index) => (
              <div
                className="work-box"
                key={project.id}
                onClick={() => setSelectedProject({ ...project, type: "project" })}
              >
                <div className="work-card-header">
                  <span className="work-card-folder">
                    <MdFolderOpen /> PROJECT_0{index + 1}
                  </span>
                  <span className="work-card-category">{project.category}</span>
                </div>

                <div className="work-info">
                  <h3>{project.title}</h3>
                  <p className="work-description">
                    {project.description || "High-performance data analysis and insights generation."}
                  </p>
                </div>

                <div className="work-tech-tags">
                  {(project.technologies || "").split(",").map((tech: string, i: number) => (
                    <span key={i} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>

                <div className="work-card-footer">
                  <span className="open-project-btn">
                    View Details <MdArrowForward />
                  </span>
                </div>
              </div>
            ))}

            <div className="work-box work-box-cta">
              <div className="see-all-works">
                <h3>All Projects</h3>
                <p>Explore the complete archive of data builds, notebooks, and analyses.</p>
                <Link to="/myworks" className="see-all-btn">
                  View Full Archive ⟶
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <PreviewModal
          item={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Work;
