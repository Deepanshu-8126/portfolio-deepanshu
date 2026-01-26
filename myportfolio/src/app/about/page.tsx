// src/app/about/page.tsx
export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="space-y-6 text-gray-300">
          <p>
            Hey! I'm <strong>Deepanshu</strong>, a passionate BCA student with a strong focus on 
            Data Science, Machine Learning, and AI Engineering.
          </p>
          <p>
            I'm currently building real-world AI systems that solve practical problems, 
            from data analysis to intelligent automation.
          </p>
          <p>
            My goal is to become a skilled Data Scientist who can bridge the gap between 
            complex algorithms and real business impact.
          </p>
          <div className="mt-8 p-6 bg-surface/80 backdrop-blur-xl border border-border rounded-xl">
            <h2 className="text-2xl font-bold mb-4">My Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Node.js", "React", "Next.js"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-secondary/20 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}