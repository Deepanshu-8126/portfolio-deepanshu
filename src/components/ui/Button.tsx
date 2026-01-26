// src/components/ui/Button.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-lg font-medium transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] text-[#0A0A0F] hover:from-[#4CC9F0] hover:to-[#4CC9F0]",
    secondary:
      "bg-transparent border border-[#1F1F29] text-[#E6E6FF] hover:bg-[#1F1F29]",
    ghost: "text-[#4CC9F0] hover:text-white",
  };

  const buttonClass = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
