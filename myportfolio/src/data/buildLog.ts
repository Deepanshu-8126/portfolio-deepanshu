// src/data/buildLog.ts
export interface BuildLogEntry {
  date: string; // ISO format
  title: string;
  type: "win" | "learn" | "fail" | "update";
  content: string;
}

export const buildLog: BuildLogEntry[] = [
  {
    date: "2026-01-20",
    title: "Deployed Urban AI v2.1",
    type: "win",
    content: "Reduced inference latency by 40% using model quantization."
  },
  {
    date: "2026-01-15",
    title: "Learned LLM fine-tuning",
    type: "learn",
    content: "Completed Hugging Face course on parameter-efficient tuning."
  },
  {
    date: "2026-01-10",
    title: "SOS system failed under load",
    type: "fail",
    content: "Discovered MongoDB connection leak during stress test. Fixed with connection pooling."
  },
  {
    date: "2026-01-05",
    title: "Added recruiter mode",
    type: "update",
    content: "Now recruiters can toggle simplified view in one click."
  }
];