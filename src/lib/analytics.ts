// src/lib/analytics.ts
interface AnalyticsEvent {
  name: string;
  params?: Record<string, any>;
}

// Mock analytics service (replace with Google Analytics, Plausible, etc.)
export const analytics = {
  trackPageView: (url: string) => {
    if (typeof window !== "undefined") {
      console.log("Page view tracked:", url);
      // In production, replace with actual analytics
      // gtag('config', 'GA_MEASUREMENT_ID', { page_path: url });
    }
  },

  trackEvent: ({ name, params }: AnalyticsEvent) => {
    if (typeof window !== "undefined") {
      console.log("Event tracked:", name, params);
      // In production: gtag('event', name, params);
    }
  },

  trackFormSubmission: (formName: string) => {
    analytics.trackEvent({
      name: "form_submit",
      params: { form_name: formName },
    });
  },

  trackProjectView: (projectName: string) => {
    analytics.trackEvent({
      name: "project_view",
      params: { project_name: projectName },
    });
  },
};
