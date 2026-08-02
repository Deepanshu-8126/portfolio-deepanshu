import { useParams, Link } from "react-router-dom";
import hackathonsData from "../data/hackathons.json";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaUsers, FaTrophy } from "react-icons/fa";
import "./ProjectDetail.css";

const HackathonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const hackathon = (hackathonsData as any[]).find((h: any) => h.id === id);

  if (!hackathon) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <h2>Hackathon Not Found</h2>
          <p>The hackathon you're looking for doesn't exist.</p>
          <Link to="/" className="detail-back-btn">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const photos = (hackathon.photos || []).filter((p: any) => p.url && p.url.trim() !== "");

  return (
    <div className="detail-page">
      <div className="detail-container">
        {/* Back Button */}
        <Link to="/" className="detail-back-link">
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Header */}
        <div className="detail-header">
          <h1>{hackathon.title}</h1>
          <div className="detail-badges">
            <span className="detail-badge primary">{hackathon.role}</span>
            <span className={`detail-badge ${hackathon.status === 'Winner' ? 'success' : 'secondary'}`}>
              {hackathon.status}
            </span>
            {hackathon.result && (
              <span className="detail-badge gold"><FaTrophy /> {hackathon.result}</span>
            )}
          </div>
        </div>

        {/* Event Context */}
        <div className="detail-card">
          <h2 className="detail-card-title cyan">Event Context</h2>
          <div className="detail-info-grid">
            <div className="detail-info-item">
              <FaUsers className="detail-info-icon" />
              <span className="detail-info-label">Organized By</span>
              <span className="detail-info-value">{hackathon.organizedBy}</span>
            </div>
            <div className="detail-info-item">
              <FaMapMarkerAlt className="detail-info-icon" />
              <span className="detail-info-label">Location</span>
              <span className="detail-info-value">{hackathon.location}</span>
            </div>
            <div className="detail-info-item">
              <FaClock className="detail-info-icon" />
              <span className="detail-info-label">Duration</span>
              <span className="detail-info-value">{hackathon.duration}</span>
            </div>
            <div className="detail-info-item">
              <FaUsers className="detail-info-icon" />
              <span className="detail-info-label">Team Size</span>
              <span className="detail-info-value">{hackathon.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {hackathon.techStack && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">🛠️ Tech Stack</h2>
            <div className="detail-tech-list">
              {hackathon.techStack.map((tech: string) => (
                <span key={tech} className="detail-tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Experience Story */}
        {hackathon.experience && (
          <div className="detail-card">
            <h2 className="detail-card-title cyan">🏕️ Experience Story</h2>
            <p>{hackathon.experience}</p>
          </div>
        )}

        {/* Challenges */}
        {hackathon.challenges && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">⚡ Challenges</h2>
            <p>{hackathon.challenges}</p>
          </div>
        )}

        {/* Learnings */}
        {hackathon.learnings && (
          <div className="detail-card">
            <h2 className="detail-card-title cyan">📚 Key Learnings</h2>
            <div className="detail-learnings-grid">
              {hackathon.learnings.technical && (
                <div className="detail-learning-col">
                  <h3>🔧 Technical Learnings</h3>
                  <ul className="detail-list">
                    {hackathon.learnings.technical.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {hackathon.learnings.softSkills && (
                <div className="detail-learning-col">
                  <h3>🤝 Soft Skills</h3>
                  <ul className="detail-list">
                    {hackathon.learnings.softSkills.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Result */}
        {hackathon.result && (
          <div className="detail-card">
            <h2 className="detail-card-title cyan">🏆 Result & Highlights</h2>
            <p className="detail-result">{hackathon.result}</p>
          </div>
        )}

        {/* Photo Gallery */}
        {photos.length > 0 && (
          <div className="detail-card">
            <h2 className="detail-card-title purple">📸 Mission Photos</h2>
            <div className="detail-photo-grid">
              {photos.map((photo: any, i: number) => (
                <div className="detail-photo-item" key={i}>
                  <img src={photo.url} alt={photo.caption || `Photo ${i + 1}`} />
                  {photo.caption && <span className="detail-photo-caption">{photo.caption}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="detail-bottom-nav">
          <Link to="/" className="detail-action-btn github">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetail;
