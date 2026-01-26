// src/components/ui/Badge.tsx
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success";
  className?: string;
}

export function Badge({
  children,
  variant = "secondary",
  className = "",
}: BadgeProps) {
  const variantClasses = {
    primary: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    secondary: "bg-[#1F1F29] text-[#A0A0C0] border border-[#1F1F29]",
    success: "bg-green-500/20 text-green-400 border border-green-500/30",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
