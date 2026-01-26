// src/app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deepanshu | Data Science Portfolio",
    short_name: "Deepanshu Portfolio",
    description:
      "BCA student building real-world data projects and learning data science step by step.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0F",
    theme_color: "#4CC9F0",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
