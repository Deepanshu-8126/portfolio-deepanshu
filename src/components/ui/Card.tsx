// src/components/ui/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[#121218]/60 backdrop-blur-xl border border-[#1F1F29] rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}
