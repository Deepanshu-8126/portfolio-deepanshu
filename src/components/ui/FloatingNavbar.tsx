// src/components/ui/FloatingNavbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaAward,
  FaFileAlt,
  FaPaperPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
  { name: "My Works", href: "/projects", icon: <FaProjectDiagram /> },
  { name: "About", href: "/about", icon: <FaUser /> },
  { name: "Certifications", href: "/certifications", icon: <FaAward /> },
  { name: "Resume", href: "/resume", icon: <FaFileAlt /> },
  { name: "Contact", href: "/contact", icon: <FaPaperPlane />, isCta: true },
];

export function FloatingNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1F1F29]/40 shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand Name */}
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4CC9F0] to-[#7209B7] flex items-center justify-center text-white font-bold text-base shadow-md group-hover:scale-105 transition-transform">
              D
            </div>
            <span className="font-bold text-base md:text-lg bg-gradient-to-r from-[#E6E6FF] to-[#A0A0C0] bg-clip-text text-transparent group-hover:text-white transition-colors">
              Deepanshu<span className="text-[#4CC9F0]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              
              if (item.isCta) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#4CC9F0] to-[#3A0CA3] text-white font-medium text-sm hover:opacity-90 shadow-md shadow-[#4CC9F0]/20 transition-all hover:scale-105 ml-2"
                  >
                    <span>{item.icon}</span>
                    <span>Hire Me</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? "text-[#4CC9F0] bg-[#1F1F29]/60 border border-[#4CC9F0]/30"
                      : "text-[#A0A0C0] hover:text-[#E6E6FF] hover:bg-[#1F1F29]/30"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] text-white text-xs font-semibold shadow"
            >
              Hire Me
            </Link>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1F1F29]/50 border border-[#1F1F29] text-[#E6E6FF] hover:text-[#4CC9F0] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0D0D14]/95 border-b border-[#1F1F29] px-4 pt-2 pb-5 space-y-2 shadow-2xl backdrop-blur-xl"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#4CC9F0] bg-[#1F1F29]/80 border border-[#4CC9F0]/30"
                      : "text-[#A0A0C0] hover:text-[#E6E6FF] hover:bg-[#1F1F29]/40"
                  }`}
                >
                  <span className="text-base text-[#4CC9F0]">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
