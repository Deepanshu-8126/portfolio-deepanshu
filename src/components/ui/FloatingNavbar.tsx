// src/components/ui/FloatingNavbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaProjectDiagram,
  FaTrophy,
  FaUser,
  FaBriefcase,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
  { name: "Hackathons", href: "/hackathons", icon: <FaTrophy /> },
  { name: "Career", href: "/career", icon: <FaBriefcase /> },
  { name: "Notes", href: "/notes", icon: <FaBook /> },
  { name: "About", href: "/about", icon: <FaUser /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
];

export function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1F1F29]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#4CC9F0] bg-[#1F1F29]/30"
                      : "text-[#A0A0C0] hover:text-[#E6E6FF] hover:bg-[#1F1F29]/20"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select
              value={pathname}
              onChange={(e) => (window.location.href = e.target.value)}
              className="bg-[#121218]/80 text-[#A0A0C0] border border-[#1F1F29]/30 rounded-lg px-3 py-2 text-sm"
            >
              {NAV_ITEMS.map((item) => (
                <option key={item.name} value={item.href}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
