// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { BackNavigation } from "@/components/ui/BackNavigation";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const CONTACT_LINKS = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/deepanshu-kapri-2518a5384/",
    icon: <FaLinkedin className="text-2xl" />,
    description: "View Profile",
    color: "text-[#0A66C2]",
  },
  {
    platform: "GitHub",
    url: "https://github.com/Deepanshu-8126",
    icon: <FaGithub className="text-2xl" />,
    description: "View Repositories",
    color: "text-white",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/deepanshu",
    icon: <FaInstagram className="text-2xl" />,
    description: "Follow Me",
    color: "text-[#E1306C]",
  },
  {
    platform: "Email",
    url: "mailto:deepanshukapri4@gmail.com",
    icon: <FaEnvelope className="text-2xl" />,
    description: "Send Message",
    color: "text-[#FF7B7B]",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF]">
      <FloatingNavbar />

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <BackNavigation className="mb-8" />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h1>
            <p className="text-xl text-[#A0A0C0]">
              Easy ways to reach out and connect with me
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTACT_LINKS.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="block"
                >
                  <GlassCard className="p-6 text-center h-full flex flex-col items-center justify-center cursor-pointer hover:bg-[#121218]/80 transition-colors">
                    <div className={`mb-3 ${link.color}`}>{link.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{link.platform}</h3>
                    <p className="text-sm text-[#A0A0C0]">{link.description}</p>
                  </GlassCard>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-2xl mx-auto mt-16 text-center"
          >
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold mb-4">Direct Contact</h2>
              <p className="text-[#E6E6FF] mb-2">
                Email: deepanshukapri4@gmail.com
              </p>
              <p className="text-[#A0A0C0] text-sm">
                I typically respond within 24-48 hours
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
