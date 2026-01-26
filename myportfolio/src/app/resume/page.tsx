// src/app/resume/page.tsx
"use client";

import { useState, useEffect } from "react"
 import { PDFDownloadLink } from "@react-pdf/renderer";
 //import { ResumePDF } from "@/components/pdf/ResumePDF";

export default function ResumePage() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-4 text-white">My Resume</h1>
      <p className="text-gray-400 mb-8">
        Always up-to-date. Generated from my live portfolio data.
      </p>

      {/* {isClient ? (
        <PDFDownloadLink
          document={<ResumePDF />}
          fileName="Vushal_Joshi_Resume.pdf"
          className="inline-block px-6 py-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
        >
          {({ loading }) =>
            loading ? "Generating..." : "⬇️ Download PDF Resume"
          }
        </PDFDownloadLink>
      ) : (
        <div className="px-6 py-3 bg-surface rounded-lg text-gray-300">Loading...</div>
      )} */}

      <div className="mt-12 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-6 text-left">
        <h2 className="text-xl font-bold mb-3 text-white">Why this resume?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-400">
          <li>Auto-updates when I add new projects</li>
          <li>ATS-friendly format (no columns, clean structure)</li>
          <li>Shows real impact metrics</li>
          <li>Proof-based skills section</li>
        </ul>
      </div>
    </div>
  );
}