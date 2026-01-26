// src/lib/health.ts
import { performance } from "perf_hooks";

interface HealthCheck {
  name: string;
  status: "healthy" | "degraded" | "unhealthy";
  responseTime?: number;
  error?: string;
}

interface HealthReport {
  status: "healthy" | "degraded" | "unhealthy";
  timestamp: string;
  uptime: number;
  version: string;
  checks: HealthCheck[];
  memory?: {
    used: number;
    total: number;
    percentage: number;
  };
}

// Simulate external service checks
async function checkExternalServices(): Promise<HealthCheck[]> {
  const checks: HealthCheck[] = [];

  // GitHub API check
  try {
    const start = performance.now();
    const response = await fetch("https://api.github.com/users/Deepanshu", {
      timeout: 5000,
    });
    const end = performance.now();

    checks.push({
      name: "github-api",
      status: response.ok ? "healthy" : "degraded",
      responseTime: end - start,
    });
  } catch (error) {
    checks.push({
      name: "github-api",
      status: "unhealthy",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }

  return checks;
}

// Memory usage check (Node.js only)
function getMemoryUsage(): {
  used: number;
  total: number;
  percentage: number;
} | null {
  if (typeof process !== "undefined") {
    const used = process.memoryUsage().heapUsed / 1024 / 1024; // MB
    const total = process.memoryUsage().heapTotal / 1024 / 1024; // MB
    return {
      used: Math.round(used * 100) / 100,
      total: Math.round(total * 100) / 100,
      percentage: Math.round((used / total) * 100),
    };
  }
  return null;
}

export async function generateHealthReport(): Promise<HealthReport> {
  const startTime = Date.now();

  // Get external service checks
  const externalChecks = await checkExternalServices();

  // Determine overall status
  const hasUnhealthy = externalChecks.some(
    (check) => check.status === "unhealthy",
  );
  const hasDegraded = externalChecks.some(
    (check) => check.status === "degraded",
  );

  let overallStatus: "healthy" | "degraded" | "unhealthy" = "healthy";
  if (hasUnhealthy) {
    overallStatus = "unhealthy";
  } else if (hasDegraded) {
    overallStatus = "degraded";
  }

  // Calculate uptime
  const uptime = process.uptime?.() || 0;

  return {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    uptime: Math.round(uptime),
    version: process.env.npm_package_version || "1.0.0",
    checks: externalChecks,
    memory: getMemoryUsage(),
  };
}
