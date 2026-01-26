// src/app/contact/page.tsx
"use client";

import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      <FloatingNavbar />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Let's Connect</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/deepanshu",
                icon: <FaLinkedin />,
              },
              {
                platform: "GitHub",
                url: "https://github.com/Deepanshu-8126",
                icon: <FaGithub />,
              },
              {
                platform: "Instagram",
                url: "https://instagram.com/deepanshu",
                icon: <FaInstagram />,
              },
              {
                platform: "Email",
                url: "mailto:vishaljoshi1357@gmail.com",
                icon: <FaEnvelope />,
              },
            ].map((link, index) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="text-2xl mb-3">{link.icon}</div>
                  <h3 className="font-bold">{link.platform}</h3>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
