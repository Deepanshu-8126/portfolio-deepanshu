import { useParams, Link } from "react-router-dom";
import hackathonsData from "../data/hackathons.json";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaUsers, FaTrophy } from "react-icons/fa";
import "./ProjectDetail.css";

const HackathonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const hackathon = (hackathonsData as any[]).find(
    (h: any) => h.id?.toLowerCase() === id?.toLowerCase()
  );

  if (!hackathon) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <Link to="/" className="detail-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="detail-not-found">
            <h2>Hackathon Not Found</h2>
            <p>The hackathon event you're looking for doesn't exist.</p>
            <Link to="/" className="detail-btn primary">← Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const photos = (hackathon.photos || []).filter((p: any) => p.url && p.url.trim() !== "");

  return (
    <div className="detail-page">
      <div className="detail-container">
        {/* Back Link */}
        <Link to="/" className="detail-back-link">
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Header */}
        <div className="detail-header">
          <span className="detail-category">{hackathon.role || "Participant"}</span>
          <h1>{hackathon.title}</h1>
          <p className="detail-summary">{hackathon.description}</p>

          <div className="detail-actions">
            {hackathon.status && (
              <span className="detail-btn primary">
                {hackathon.status}
              </span>
            )}
            {hackathon.result && (
              <span className="detail-btn">
                <FaTrophy /> {hackathon.result}
              </span>
            )}
          </div>
        </div>

        {/* Event Context Table */}
        <div className="detail-block">
          <h3>Event Overview</h3>
          <div className="detail-metrics-grid">
            {hackathon.organizedBy && (
              <div className="detail-metric-card">
                <FaUsers style={{ color: "#4a90e2", marginBottom: 6 }} />
                <span className="detail-metric-lbl">Organizer</span>
                <span className="detail-metric-val" style={{ fontSize: 16, marginTop: 4 }}>
                  {hackathon.organizedBy}
                </span>
              </div>
            )}
            {hackathon.location && (
              <div className="detail-metric-card">
                <FaMapMarkerAlt style={{ color: "#4a90e2", marginBottom: 6 }} />
                <span className="detail-metric-lbl">Location</span>
                <span className="detail-metric-val" style={{ fontSize: 16, marginTop: 4 }}>
                  {hackathon.location}
                </span>
              </div>
            )}
            {hackathon.duration && (
              <div className="detail-metric-card">
                <FaClock style={{ color: "#4a90e2", marginBottom: 6 }} />
                <span className="detail-metric-lbl">Duration</span>
                <span className="detail-metric-val" style={{ fontSize: 16, marginTop: 4 }}>
                  {hackathon.duration}
                </span>
              </div>
            )}
            {hackathon.teamSize && (
              <div className="detail-metric-card">
                <FaUsers style={{ color: "#4a90e2", marginBottom: 6 }} />
                <span className="detail-metric-lbl">Team Size</span>
                <span className="detail-metric-val" style={{ fontSize: 16, marginTop: 4 }}>
                  {hackathon.teamSize}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        {hackathon.techStack && (
          <div className="detail-block">
            <h3>Tech Stack Used</h3>
            <div className="detail-tags-list">
              {hackathon.techStack.map((tech: string, i: number) => (
                <span key={i} className="detail-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Experience Story */}
        {hackathon.experience && (
          <div className="detail-block">
            <h3>Experience Story</h3>
            <p>{hackathon.experience}</p>
          </div>
        )}

        {/* Challenges */}
        {hackathon.challenges && (
          <div className="detail-block">
            <h3>Key Challenges Overcome</h3>
            <p>{hackathon.challenges}</p>
          </div>
        )}

        {/* Learnings */}
        {hackathon.learnings && (
          <div className="detail-block">
            <h3>Key Takeaways</h3>
            {typeof hackathon.learnings === "string" ? (
              <p className="detail-quote">"{hackathon.learnings}"</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {hackathon.learnings.technical && (
                  <div>
                    <strong style={{ color: "#f5f5f0", display: "block", marginBottom: 8 }}>
                      Technical Skills:
                    </strong>
                    <ul className="detail-insights-list">
                      {hackathon.learnings.technical.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {hackathon.learnings.softSkills && (
                  <div>
                    <strong style={{ color: "#f5f5f0", display: "block", marginBottom: 8 }}>
                      Soft Skills:
                    </strong>
                    <ul className="detail-insights-list">
                      {hackathon.learnings.softSkills.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Photo Gallery - Clean grid layout */}
        {photos.length > 0 && (
          <div className="detail-block">
            <h3>Event Photos</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 16 }}>
              {photos.map((photo: any, i: number) => (
                <div key={i} style={{ border: "1px solid #222", overflow: "hidden", background: "#0d0d0d" }}>
                  <img
                    src={photo.url}
                    alt={photo.caption || `Photo ${i + 1}`}
                    style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                  />
                  {photo.caption && (
                    <span style={{ display: "block", padding: "8px 12px", fontSize: 11, color: "#888", fontFamily: "JetBrains Mono" }}>
                      {photo.caption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="detail-footer">
          <Link to="/" className="detail-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetail;
