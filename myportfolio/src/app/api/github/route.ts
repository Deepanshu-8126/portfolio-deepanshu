// src/app/api/github/route.ts
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/vushal", {
      headers: {
        "User-Agent": "Vushal-Portfolio",
        // Add token if rate-limited: "Authorization": `token ${process.env.GH_TOKEN}`
      },
    });
    
    if (!res.ok) throw new Error("Failed to fetch GitHub data");
    
    const data = await res.json();
    
    return Response.json({
      stars: data.public_repos > 0 ? Math.floor(Math.random() * 50) + 80 : 0, // Mock stars
      commits: 1420, // GitHub doesn't provide this directly; mock or use GraphQL
      repos: data.public_repos,
      followers: data.followers
    });
  } catch (error) {
    return Response.json({ error: "Failed to load stats" }, { status: 500 });
  }
}