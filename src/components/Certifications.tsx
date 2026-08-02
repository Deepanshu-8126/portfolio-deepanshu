import { useState } from "react";
import { config } from "../config";
import "./styles/Certifications.css";
import { FaAward, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (certId: string) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  if (!config.certifications || config.certifications.length === 0) return null;

  return (
    <div className="certifications-section" id="certifications">
      <div className="section-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        
        <div className="cert-grid">
          {config.certifications.map((cert: any, index: number) => {
            const certKey = cert.id || String(index);
            const hasError = imageErrors[certKey];
            
            return (
              <div className="cert-card" key={certKey}>
                <div 
                  className="cert-image-container"
                  onClick={() => setSelectedCert(cert)}
                >
                  {!hasError ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      onError={() => handleImageError(certKey)}
                    />
                  ) : (
                    <div className="cert-fallback">
                      🎓<br/><span>{cert.title}</span>
                    </div>
                  )}
                  <div className="cert-overlay">
                    <FaAward className="award-icon" />
                    <span>Preview Certificate</span>
                  </div>
                </div>
                
                <div className="cert-details">
                  <div className="cert-issuer">{cert.issuer}</div>
                  <h3>{cert.title}</h3>
                  
                  <div className="cert-skills">
                    {(cert.skills || []).map((skill: string) => (
                      <span key={skill} className="cert-skill-badge">{skill}</span>
                    ))}
                  </div>
                  
                  <div className="cert-actions">
                    <button className="cert-btn-outline" onClick={() => setSelectedCert(cert)}>
                      View Preview
                    </button>
                    {cert.credentialUrl && (
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-btn-primary"
                      >
                        Verify <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close-btn" onClick={() => setSelectedCert(null)}>
              <FaTimes />
            </button>
            
            <div className="cert-modal-header">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer} • {selectedCert.issueDate}</p>
            </div>
            
            <div className="cert-modal-body">
              {!imageErrors[selectedCert.id || config.certifications.indexOf(selectedCert)] ? (
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  onError={() => handleImageError(selectedCert.id || config.certifications.indexOf(selectedCert))}
                />
              ) : (
                <div className="cert-modal-fallback">
                  <span style={{fontSize: "50px"}}>🎓</span><br/><br/>
                  Image missing at: {selectedCert.image}
                </div>
              )}
            </div>
            
            <div className="cert-modal-footer">
              {selectedCert.credentialUrl && (
                <a 
                  href={selectedCert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-btn-primary"
                >
                  Verify Credential URL &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
