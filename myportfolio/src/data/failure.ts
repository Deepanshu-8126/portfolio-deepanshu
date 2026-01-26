// src/data/failures.ts
export interface FailureProject {
  id: string;
  title: string;
  problem: string;
  whatWentWrong: string;
  lessons: string[];
  wouldDoDifferently: string;
}

export const failureProjects: FailureProject[] = [
  {
    id: "realtime-dashboard",
    title: "Real-time Urban Dashboard",
    problem: "Needed live visualization of city complaint hotspots",
    whatWentWrong: "Used WebSocket broadcasting to all clients — caused server meltdown at 500+ users",
    lessons: [
      "Premature optimization is evil",
      "Load testing is non-negotiable",
      "Pub/sub architecture > broadcast"
    ],
    wouldDoDifferently: "Use Redis pub/sub with client-side filtering and pagination"
  },
  {
    id: "ml-model-drift",
    title: "Complaint Classification Model",
    problem: "Model accuracy dropped from 92% to 68% after 3 months",
    whatWentWrong: "Didn’t implement data drift monitoring or retraining pipeline",
    lessons: [
      "ML models decay in production",
      "Monitoring > initial accuracy",
      "Automate retraining"
    ],
    wouldDoDifferently: "Add Evidently.ai for drift detection and Airflow for retraining"
  }
];