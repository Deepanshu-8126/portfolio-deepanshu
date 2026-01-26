// src/app/api/kaggle/route.ts
export async function GET() {
  // Kaggle doesn't have public API for notebooks, so we mock
  return Response.json({
    notebooks: 7,
    medals: { gold: 1, silver: 3, bronze: 2 },
    tier: "Expert"
  });
}