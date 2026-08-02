import { useParams, Link } from "react-router-dom";
import { config } from "../config";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = config.projects.find((p: any) => p.id === id);

  if (!project) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/myworks" className="detail-back-btn">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        {/* Back Button */}
        <Link to="/myworks" className="detail-back-link">
          <FaArrowLeft /> Back to All Projects
        </Link>

        {/* Header */}
        <div className="detail-header">
          <h1>{project.title}</h1>
          <div className="detail-badges">
            <span className="detail-badge primary">{project.category}</span>
            <span className="detail-badge success">{project.status}</span>
          </div>

          {/* Action Buttons */}
          <div className="detail-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="detail-action-btn github">
                <FaGithub /> View Code on GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="detail-action-btn live">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="detail-image-hero">
            <img src={project.image} alt={project.title} />
          </div>
        )}

        {/* Problem Statement */}
        {project.problem && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">🎯 Problem Statement</h2>
            <p>{project.problem}</p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div className="detail-card">
            <h2 className="detail-card-title cyan">💡 My Solution</h2>
            <p>{project.solution}</p>
          </div>
        )}

        {/* Metrics */}
        {project.metrics && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">📈 Project Metrics</h2>
            <div className="detail-metrics-grid">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div className="detail-metric" key={key}>
                  <span className="detail-metric-value">{String(value)}</span>
                  <span className="detail-metric-label">{key}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {(project.tools || project.tech) && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">🛠️ Tools & Technologies</h2>
            <div className="detail-tech-list">
              {(project.tools || project.tech || []).map((tool: string) => (
                <span key={tool} className="detail-tech-badge">{tool}</span>
              ))}
            </div>
          </div>
        )}

        {/* Key Insights */}
        {project.insights && project.insights.length > 0 && (
          <div className="detail-card">
            <h2 className="detail-card-title cyan">📊 Key Insights</h2>
            <ul className="detail-list">
              {project.insights.map((insight: string, i: number) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">📚 What I Learned</h2>
            <p className="detail-quote">"{project.learnings}"</p>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="detail-bottom-nav">
          <Link to="/myworks" className="detail-action-btn github">
            ← Browse All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
