// src/lib/performance.ts
export const performanceMetrics = {
  // Track page load time
  trackPageLoad: () => {
    if (typeof window !== "undefined" && "performance" in window) {
      const perfEntries = performance.getEntriesByType("navigation");
      if (perfEntries.length > 0) {
        const perfData = perfEntries[0] as PerformanceNavigationTiming;
        if (perfData.loadEventEnd > 0) {
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          console.log("Page load time:", loadTime, "ms");
        }
      }
    }
  },

  // Track component render time
  trackComponentRender: (componentName: string, startTime: number) => {
    // Only run on client side with performance API
    if (typeof window !== "undefined" && "performance" in window) {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      console.log(`${componentName} render time:`, renderTime, "ms");
    }
  },

  // Initialize performance tracking
  init: () => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", () => {
        performanceMetrics.trackPageLoad();
      });
    }
  },
};

// Initialize on client side only
if (typeof window !== "undefined") {
  performanceMetrics.init();
}
