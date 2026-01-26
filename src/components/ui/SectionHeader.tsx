// src/components/ui/SectionHeader.tsx
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-[#1F1F29]/50 text-[#E6E6FF]">
        {title}
      </h2>
      {children}
    </div>
  );
}
