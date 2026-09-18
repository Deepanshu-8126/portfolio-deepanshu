import "./styles/Hackathons.css";
import { config } from "../config";
import { Link } from "react-router-dom";
import { MdFolderZip, MdArrowForward } from "react-icons/md";

const Hackathons = () => {
  return (
    <>
      <div className="hackathons-section" id="Hackathons">
        <div className="hackathons-container section-container">
          <div className="hackathons-header">
            <span className="hackathons-label">COMPETITIONS & BUILDS</span>
            <h2>Featured Hackathons</h2>
          </div>

          <div className="hackathons-grid">
            {config.hackathons.slice(0, 5).map((hackathon, index) => (
              <Link
                to={`/hackathons/${hackathon.id}`}
                className="hackathons-box"
                key={hackathon.id}
              >
                <div className="hackathon-card-header">
                  <span className="hackathon-card-folder">
                    <MdFolderZip /> HACKATHON_0{index + 1}
                  </span>
                  <span className="hackathon-card-category">{hackathon.category}</span>
                </div>

                <div className="hackathons-info">
                  <h3>{hackathon.title}</h3>
                  <p className="hackathon-description">
                    {hackathon.description || "Competitive build event demonstrating rapid prototyping & innovation."}
                  </p>
                </div>

                <div className="hackathon-tech-tags">
                  {(hackathon.technologies || "").split(",").map((tech: string, i: number) => (
                    <span key={i} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>

                <div className="hackathon-card-footer">
                  <span className="open-hackathon-btn">
                    View Story <MdArrowForward />
                  </span>
                </div>
              </Link>
            ))}

            <div className="hackathons-box hackathons-box-cta">
              <div className="see-all-Hackathonss">
                <h3>More Events</h3>
                <p>Always participating in hackathons and competitive builds.</p>
                <span className="see-all-btn">
                  Stay Tuned ⟶
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hackathons;
