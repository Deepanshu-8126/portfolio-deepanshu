// src/app/certifications/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaSearchPlus } from "react-icons/fa";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import dashboardData from "@/data/dashboard.json";

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certs = dashboardData.certifications || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF] overflow-hidden relative">
      <FloatingNavbar />

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 rounded-full text-[#4CC9F0] text-xs font-semibold mb-3">
            <FaAward /> Verified Credentials
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#E6E6FF] via-[#4CC9F0] to-[#A855F7] bg-clip-text text-transparent">
            Certifications & Achievements
          </h1>
          <p className="text-base md:text-lg text-[#A0A0C0]">
            Milestones and verified course certifications demonstrating continuous learning in Data Science, Python, SQL, and Analytics.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert: any, index: number) => (
            <motion.div
              key={cert.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <GlassCard className="h-full flex flex-col justify-between overflow-hidden border border-[#1F1F29] hover:border-[#4CC9F0]/50 transition-all group">
                
                {/* Certificate Cover Image Preview with Blur Overlay */}
                <div 
                  className="relative h-48 w-full bg-[#12121A] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Stylish abstract fallback certificate gradient if image file is missing
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#12121F] via-[#1A1A2E] to-[#0D0D14] border-b border-[#1F1F29] text-center">
                            <div class="w-12 h-12 rounded-full bg-[#4CC9F0]/15 border border-[#4CC9F0]/40 flex items-center justify-center text-[#4CC9F0] mb-2 text-xl">
                              🎓
                            </div>
                            <span class="text-xs font-bold text-[#4CC9F0] uppercase tracking-wider">${cert.issuer}</span>
                            <span class="text-sm font-bold text-[#E6E6FF] mt-1 line-clamp-1">${cert.title}</span>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Dark Gradient Overlay & Zoom Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-black/30 opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#0A0A0F]/80 backdrop-blur-md border border-[#4CC9F0]/30 rounded-md text-[11px] font-bold text-[#4CC9F0]">
                    {cert.issueDate}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#4CC9F0] text-black font-bold text-xs shadow-lg">
                      <FaSearchPlus /> Preview Certificate
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs text-[#4CC9F0] font-semibold">
                      <FaCheckCircle />
                      <span>{cert.issuer}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#E6E6FF] mb-3 group-hover:text-[#4CC9F0] transition-colors">
                      {cert.title}
                    </h3>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {(cert.skills || []).map((skill: string) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-0.5 bg-[#1F1F29]/80 border border-[#1F1F29] text-[#A0A0C0] rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#1F1F29] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-semibold text-[#E6E6FF] hover:text-[#4CC9F0] transition-colors"
                    >
                      View Preview
                    </button>

                    <a
                      href={cert.credentialUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 text-[#4CC9F0] hover:bg-[#4CC9F0]/20 text-xs font-semibold transition-colors"
                    >
                      <span>Verify</span>
                      <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal Lightbox */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-3xl w-full bg-[#12121A] border border-[#4CC9F0]/40 rounded-2xl p-6 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1F1F29]">
                  <div>
                    <h3 className="text-xl font-bold text-[#E6E6FF]">{selectedCert.title}</h3>
                    <p className="text-xs text-[#4CC9F0]">{selectedCert.issuer} • {selectedCert.issueDate}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-[#1F1F29] text-[#A0A0C0] hover:text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Certificate Cover Display */}
                <div className="relative rounded-xl overflow-hidden bg-[#0A0A0F] border border-[#1F1F29] min-h-[260px] flex items-center justify-center p-4">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[420px] w-auto object-contain rounded-lg shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="text-center p-8">
                            <div class="text-5xl mb-3">🎓</div>
                            <h4 class="text-lg font-bold text-[#E6E6FF]">${selectedCert.title}</h4>
                            <p class="text-xs text-[#A0A0C0] mt-1">Issued by ${selectedCert.issuer} (${selectedCert.issueDate})</p>
                            <p class="text-xs text-[#707090] mt-4 max-w-md mx-auto">Place your certificate image at <code class="text-[#4CC9F0]">${selectedCert.image}</code> in the public directory to display full preview image here.</p>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedCert.skills || []).map((skill: string) => (
                      <span key={skill} className="text-xs px-2.5 py-0.5 bg-[#1F1F29] text-[#A0A0C0] rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={selectedCert.credentialUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] text-white text-xs font-bold shadow hover:scale-105 transition-transform"
                  >
                    Verify Credential URL →
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
