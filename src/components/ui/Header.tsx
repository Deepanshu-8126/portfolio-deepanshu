// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Notes", href: "/notes" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "About", href: "/about" },
  ];

  const isHomePage = pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#1F1F29]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Back Button */}
        <div className="flex items-center">
          {isHomePage ? (
            <Link
              href="/"
              className="text-xl font-bold text-[#E6E6FF] hover:text-[#4CC9F0] transition-colors"
            >
              D.
            </Link>
          ) : (
            <Link
              href="/"
              className="flex items-center text-[#E6E6FF] hover:text-[#4CC9F0] transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              <span className="font-medium">Back</span>
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors font-medium ${
                pathname === item.href
                  ? "text-[#4CC9F0]"
                  : "text-[#A0A0C0] hover:text-[#4CC9F0]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-2 bg-[#4CC9F0]/10 text-[#4CC9F0] rounded-lg hover:bg-[#4CC9F0]/20 transition-colors font-medium border border-[#4CC9F0]/20"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#E6E6FF] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-[#1F1F29]"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-[#4CC9F0]/10 text-[#4CC9F0] border-l-2 border-[#4CC9F0]"
                      : "text-[#A0A0C0] hover:text-[#4CC9F0] hover:bg-[#1F1F29]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-[#1F1F29]">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#4CC9F0]/10 text-[#4CC9F0] rounded-lg hover:bg-[#4CC9F0]/20 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
