"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";

export function SinglePageNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(id, { offset: -80, duration: 1.5 });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", href: "#landing", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaGraduationCap /> },
    { name: "Works", href: "#works", icon: <FaBriefcase /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#06060B]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={() => scrollTo("#landing")}
            className="flex items-center gap-2.5 group hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#4CC9F0]/50 shadow-md group-hover:scale-105 transition-transform flex-shrink-0 bg-[#12121A]">
              <img
                src="/images/deepanshu_photo_portfolio.jpeg"
                alt="Deepanshu Kapri"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/profile-pic.jpg";
                }}
              />
            </div>
            <span className="font-bold text-base md:text-lg text-[#E6E6FF] group-hover:text-white transition-colors">
              Deepanshu <span className="text-[#4CC9F0]">Kapri</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-bold text-[#A0A0C0] hover:text-[#4CC9F0] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#4CC9F0] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#E6E6FF] text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#06060B]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-bold text-[#E6E6FF] hover:text-[#4CC9F0] flex items-center gap-4"
              >
                <span className="text-[#4CC9F0]">{link.icon}</span>
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
