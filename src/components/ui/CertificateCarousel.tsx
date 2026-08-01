"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaExternalLinkAlt, FaSearchPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl: string;
}

export function CertificateCarousel({ certificates }: { certificates: Certificate[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!containerRef.current || !carouselRef.current) return;

    const cards = carouselRef.current.children;
    const radius = 400; // Radius of the carousel
    const angle = 360 / cards.length;

    // Position cards in a 3D circle
    gsap.set(cards, {
      transformOrigin: `50% 50% ${-radius}px`,
      rotationY: (i) => i * angle,
      z: radius
    });

    // Animate the entire carousel rotating continuously
    const animation = gsap.to(carouselRef.current, {
      rotationY: "+=360",
      duration: 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50% 0"
    });

    // Pause on hover
    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [certificates]);

  if (!certificates || certificates.length === 0) return null;

  return (
    <>
      <div 
        ref={containerRef} 
        className="w-full h-[500px] relative overflow-hidden flex items-center justify-center my-10 perspective-container cursor-grab active:cursor-grabbing"
        style={{ perspective: "1200px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-transparent to-[#0A0A0F] z-10 pointer-events-none" />
        
        <div 
          ref={carouselRef} 
          className="w-[280px] h-[380px] relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="absolute inset-0 bg-[#12121A] border-2 border-white/10 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(76,201,240,0.1)] group hover:border-[#4CC9F0]/50 transition-colors"
              style={{ backfaceVisibility: "hidden" }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="h-40 w-full relative bg-[#0D0D14]">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl">🎓</div>`;
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="px-3 py-1.5 rounded-full bg-[#4CC9F0] text-black text-xs font-bold flex items-center gap-2">
                    <FaSearchPlus /> View
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between h-[calc(100%-10rem)]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#4CC9F0] font-bold">{cert.issuer}</span>
                  <h4 className="font-bold text-[#E6E6FF] text-sm mt-1 line-clamp-2 leading-snug">{cert.title}</h4>
                </div>
                <div className="text-[10px] text-[#707090] border-t border-white/10 pt-3 mt-3">
                  Issued: {cert.issueDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotateX: 20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.9, y: 50, rotateX: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative max-w-3xl w-full bg-[#06060B] border border-[#4CC9F0]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(76,201,240,0.2)]"
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-4 flex justify-between items-center border-b border-white/5 bg-white/5">
                <div>
                  <h3 className="font-bold text-[#E6E6FF] text-lg">{selectedCert.title}</h3>
                  <p className="text-xs text-[#4CC9F0] uppercase tracking-widest mt-1">{selectedCert.issuer}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#F72585] transition-all"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="p-8 flex justify-center bg-[#0D0D14] min-h-[300px]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="max-h-[500px] w-auto object-contain shadow-2xl rounded-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              <div className="p-4 flex justify-end border-t border-white/5 bg-white/5">
                <a 
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn-primary flex items-center gap-2 px-6 py-2"
                >
                  Verify Credential <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
