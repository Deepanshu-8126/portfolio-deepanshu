import { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaMapMarkerAlt, FaClock, FaUsers, FaTrophy } from "react-icons/fa";
import "./styles/PreviewModal.css";

interface ModalProps {
  data: any;
  onClose: () => void;
  type: "project" | "hackathon";
}

const PreviewModal = ({ data, onClose, type }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!data) return null;

  // Get all valid photos for hackathons
  const photos = (data.photos || []).filter((p: any) => p.url && p.url.trim() !== "");

  return (
    <div className="preview-modal-overlay" onClick={onClose}>
      <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="preview-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        {/* Header */}
        <div className="preview-modal-header">
          <h2>{data.title}</h2>
          <div className="preview-meta">
            {type === "project" ? (
              <>
                <span className="preview-tag">{data.category}</span>
                <span className="preview-tag status">{data.status}</span>
              </>
            ) : (
              <>
                <span className="preview-tag">{data.role}</span>
                <span className="preview-tag status">{data.status}</span>
                {data.result && <span className="preview-tag result"><FaTrophy /> {data.result}</span>}
              </>
            )}
          </div>

          {/* Hackathon quick info bar */}
          {type === "hackathon" && (
            <div className="preview-quick-info">
              {data.organizedBy && (
                <span className="quick-info-item">
                  <FaUsers /> {data.organizedBy}
                </span>
              )}
              {data.location && (
                <span className="quick-info-item">
                  <FaMapMarkerAlt /> {data.location}
                </span>
              )}
              {data.duration && (
                <span className="quick-info-item">
                  <FaClock /> {data.duration}
                </span>
              )}
              {data.teamSize && (
                <span className="quick-info-item">
                  <FaUsers /> {data.teamSize}
                </span>
              )}
              {data.year && (
                <span className="quick-info-item">
                  📅 {data.year}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="preview-modal-body">
          
          {/* Main Image (project) */}
          {type === "project" && data.image && (
            <div className="preview-image-container">
              <img src={data.image} alt={data.title} />
            </div>
          )}

          {/* Photo Gallery (hackathon) */}
          {type === "hackathon" && photos.length > 0 && (
            <div className="preview-photo-gallery">
              <h3>📸 Event Photos</h3>
              <div className="photo-grid">
                {photos.map((photo: any, i: number) => (
                  <div className="photo-item" key={i}>
                    <img src={photo.url} alt={photo.caption || `Photo ${i + 1}`} />
                    {photo.caption && <span className="photo-caption">{photo.caption}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="preview-details">
            {/* Description */}
            {data.description && (
              <div className="preview-section">
                <h3>Overview</h3>
                <p>{data.description}</p>
              </div>
            )}

            {/* Problem Statement */}
            {data.problem && (
              <div className="preview-section">
                <h3>🎯 Problem Statement</h3>
                <p>{data.problem}</p>
              </div>
            )}
            
            {/* Solution */}
            {data.solution && (
              <div className="preview-section">
                <h3>💡 Solution</h3>
                <p>{data.solution}</p>
              </div>
            )}

            {/* Experience (hackathon) */}
            {data.experience && (
              <div className="preview-section">
                <h3>🏕️ Experience</h3>
                <p>{data.experience}</p>
              </div>
            )}

            {/* Challenges (hackathon) */}
            {data.challenges && (
              <div className="preview-section">
                <h3>⚡ Challenges</h3>
                <p>{data.challenges}</p>
              </div>
            )}

            {/* Key Insights */}
            {data.insights && data.insights.length > 0 && (
              <div className="preview-section">
                <h3>📊 Key Insights</h3>
                <ul>
                  {data.insights.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings */}
            {data.learnings && (
              <div className="preview-section">
                <h3>📚 Learnings</h3>
                {typeof data.learnings === 'string' ? (
                  <p>{data.learnings}</p>
                ) : (
                  <div className="learnings-grid">
                    {data.learnings.technical && (
                      <div className="learning-column">
                        <h4>🔧 Technical</h4>
                        <ul>
                          {data.learnings.technical.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {data.learnings.softSkills && (
                      <div className="learning-column">
                        <h4>🤝 Soft Skills</h4>
                        <ul>
                          {data.learnings.softSkills.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Metrics (project) */}
            {data.metrics && (
              <div className="preview-section">
                <h3>📈 Metrics</h3>
                <div className="metrics-grid">
                  {Object.entries(data.metrics).map(([key, value]) => (
                    <div className="metric-card" key={key}>
                      <span className="metric-value">{String(value)}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="preview-section">
              <h3>🛠️ Tech Stack</h3>
              <div className="preview-tech-stack">
                {(data.tools || data.techStack || data.tech || []).map((t: string, i: number) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer with links */}
        <div className="preview-modal-footer">
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer" className="preview-link-btn">
              <FaGithub /> View Source
            </a>
          )}
          {data.live && (
            <a href={data.live} target="_blank" rel="noreferrer" className="preview-link-btn primary">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
