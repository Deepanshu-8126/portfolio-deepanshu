// src/components/TypewriterText.tsx
"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  texts,
  loop = false,
}: {
  texts: string[];
  loop?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)));
        }
      } else {
        if (subIndex < currentText.length) {
          setSubIndex(subIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [subIndex, index, isDeleting, texts, loop]);

  return (
    <span className="font-mono">
      {texts[index]?.substring(0, subIndex)}
      <span className="animate-pulse-slow">█</span>
    </span>
  );
}