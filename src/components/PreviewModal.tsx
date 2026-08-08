import { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaMapMarkerAlt, FaClock, FaUsers, FaTrophy } from "react-icons/fa";
import "./styles/PreviewModal.css";

interface ModalProps {
  item: any;
  onClose: () => void;
  // Legacy compat
  data?: any;
  type?: "project" | "hackathon";
}

const PreviewModal = ({ item, data, onClose, type: typeProp }: ModalProps) => {
  const modalData = item || data;
  const type = typeProp || (modalData?.type === "hackathon" ? "hackathon" : "project");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    // Lock body scroll when modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!modalData) return null;

  // Get all valid photos for hackathons
  const photos = (modalData.photos || []).filter((p: any) => p.url && p.url.trim() !== "");

  return (
    <div className="preview-modal-overlay" onClick={onClose}>
      <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="preview-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Header */}
        <div className="preview-modal-header">
          <h2>{modalData.title}</h2>
          <div className="preview-meta">
            {type === "project" ? (
              <>
                <span className="preview-tag">{modalData.category}</span>
                <span className="preview-tag status">{modalData.status}</span>
              </>
            ) : (
              <>
                <span className="preview-tag">{modalData.role}</span>
                <span className="preview-tag status">{modalData.status}</span>
                {modalData.result && <span className="preview-tag result"><FaTrophy /> {modalData.result}</span>}
              </>
            )}
          </div>

          {/* Hackathon quick info bar */}
          {type === "hackathon" && (
            <div className="preview-quick-info">
              {modalData.organizedBy && (
                <span className="quick-info-item">
                  <FaUsers /> {modalData.organizedBy}
                </span>
              )}
              {modalData.location && (
                <span className="quick-info-item">
                  <FaMapMarkerAlt /> {modalData.location}
                </span>
              )}
              {modalData.duration && (
                <span className="quick-info-item">
                  <FaClock /> {modalData.duration}
                </span>
              )}
              {modalData.teamSize && (
                <span className="quick-info-item">
                  <FaUsers /> {modalData.teamSize}
                </span>
              )}
              {modalData.year && (
                <span className="quick-info-item">
                  📅 {modalData.year}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="preview-modal-body">

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
            {(modalData.description || modalData.shortDesc) && (
              <div className="preview-section">
                <h3>Overview</h3>
                <p>{modalData.description || modalData.shortDesc}</p>
              </div>
            )}

            {/* Problem Statement */}
            {modalData.problem && (
              <div className="preview-section">
                <h3>🎯 Problem Statement</h3>
                <p>{modalData.problem}</p>
              </div>
            )}

            {/* Solution */}
            {modalData.solution && (
              <div className="preview-section">
                <h3>💡 Solution</h3>
                <p>{modalData.solution}</p>
              </div>
            )}

            {/* Experience (hackathon) */}
            {modalData.experience && (
              <div className="preview-section">
                <h3>🏕️ Experience</h3>
                <p>{modalData.experience}</p>
              </div>
            )}

            {/* Challenges (hackathon) */}
            {modalData.challenges && (
              <div className="preview-section">
                <h3>⚡ Challenges</h3>
                <p>{modalData.challenges}</p>
              </div>
            )}

            {/* Key Insights */}
            {modalData.insights && modalData.insights.length > 0 && (
              <div className="preview-section">
                <h3>📊 Key Insights</h3>
                <ul>
                  {modalData.insights.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings */}
            {modalData.learnings && (
              <div className="preview-section">
                <h3>📚 Learnings</h3>
                {typeof modalData.learnings === 'string' ? (
                  <p>{modalData.learnings}</p>
                ) : (
                  <div className="learnings-grid">
                    {modalData.learnings.technical && (
                      <div className="learning-column">
                        <h4>🔧 Technical</h4>
                        <ul>
                          {modalData.learnings.technical.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {modalData.learnings.softSkills && (
                      <div className="learning-column">
                        <h4>🤝 Soft Skills</h4>
                        <ul>
                          {modalData.learnings.softSkills.map((item: string, i: number) => (
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
            {modalData.metrics && (
              <div className="preview-section">
                <h3>📈 Metrics</h3>
                <div className="metrics-grid">
                  {Object.entries(modalData.metrics).map(([key, value]) => (
                    <div className="metric-card" key={key}>
                      <span className="metric-value">{String(value)}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {(modalData.tools || modalData.techStack || modalData.tech) && (
              <div className="preview-section">
                <h3>🛠️ Tech Stack</h3>
                <div className="preview-tech-stack">
                  {(modalData.tools || modalData.techStack || modalData.tech || []).map((t: string, i: number) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with links */}
        <div className="preview-modal-footer">
          {modalData.github && (
            <a href={modalData.github} target="_blank" rel="noreferrer" className="preview-link-btn">
              <FaGithub /> View Source
            </a>
          )}
          {modalData.live && (
            <a href={modalData.live} target="_blank" rel="noreferrer" className="preview-link-btn primary">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
