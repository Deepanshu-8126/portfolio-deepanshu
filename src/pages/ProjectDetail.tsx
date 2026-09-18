import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { config } from "../config";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const project = config.projects.find(
    (p: any) => p.id?.toLowerCase() === id?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <Link to="/myworks" className="detail-back-link">
            <FaArrowLeft /> Back to All Projects
          </Link>
          <div className="detail-not-found">
            <h2>Project Not Found</h2>
            <p>The project "{id}" could not be found in the archive.</p>
            <Link to="/myworks" className="detail-action-btn primary">
              Browse All Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        {/* Back Link */}
        <Link to="/myworks" className="detail-back-link">
          <FaArrowLeft /> Back to All Projects
        </Link>

        {/* Header */}
        <div className="detail-header">
          <span className="detail-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.description || project.shortDesc}</p>

          <div className="detail-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="detail-btn">
                <FaGithub /> GitHub Source
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="detail-btn primary">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Problem Statement */}
        {project.problem && (
          <div className="detail-block">
            <h3>Problem Statement</h3>
            <p>{project.problem}</p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div className="detail-block">
            <h3>Analytical & Engineering Solution</h3>
            <p>{project.solution}</p>
          </div>
        )}

        {/* Team Collaboration */}
        {project.collaboration && (
          <div className="detail-block">
            <h3>👥 Teamwork & Engineering Collaboration</h3>
            <p>{project.collaboration.summary}</p>
            {project.collaboration.roles && project.collaboration.roles.length > 0 && (
              <ul className="detail-insights-list" style={{ marginTop: "16px" }}>
                {project.collaboration.roles.map((role: string, i: number) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Visual Showcase & Screenshots */}
        {((project.screenshots && project.screenshots.length > 0) || (project.photos && project.photos.length > 0)) && (
          <div className="detail-block">
            <h3>🖼️ Project Architecture & Visual Showcase</h3>
            <div className="detail-gallery-grid">
              {(project.screenshots || project.photos).map((shot: any, i: number) => {
                const url = typeof shot === "string" ? shot : shot.url;
                const caption = typeof shot === "string" ? "" : shot.caption;
                return (
                  <div className="detail-gallery-item" key={i}>
                    <img src={url} alt={caption || `Showcase ${i + 1}`} loading="lazy" />
                    {caption && <span className="detail-gallery-caption">{caption}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="detail-block">
            <h3>Project Metrics</h3>
            <div className="detail-metrics-grid">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div className="detail-metric-card" key={key}>
                  <span className="detail-metric-val">{String(value)}</span>
                  <span className="detail-metric-lbl">{key}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Insights */}
        {project.insights && project.insights.length > 0 && (
          <div className="detail-block">
            <h3>Key Insights Uncovered</h3>
            <ul className="detail-insights-list">
              {project.insights.map((insight: string, i: number) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools & Tech */}
        {(project.tools || project.tech) && (
          <div className="detail-block">
            <h3>Tools & Technologies</h3>
            <div className="detail-tags-list">
              {(project.tools || project.tech || []).map((t: string, i: number) => (
                <span key={i} className="detail-tag">{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className="detail-block">
            <h3>Key Takeaway</h3>
            <p className="detail-quote">"{project.learnings}"</p>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="detail-footer">
          <Link to="/myworks" className="detail-btn">
            ← Back to Archive
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
