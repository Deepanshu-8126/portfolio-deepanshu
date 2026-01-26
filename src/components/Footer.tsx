// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-8 text-center text-text-secondary text-sm">
      <p>© {new Date().getFullYear()} Vushal Joshi. Built with precision.</p>
      
      {/* Navigation links */}
      <div className="mt-2 flex justify-center gap-2">
        <a 
          href="/resume" 
          className="hover:text-primary transition-colors"
        >
          Resume
        </a>
        <span>•</span>
        <a 
          href="/build" 
          className="hover:text-primary transition-colors"
        >
          Build Log
        </a>
        <span>•</span>
        <a 
          href="/failures" 
          className="hover:text-primary transition-colors"
        >
          Failures
        </a>
      </div>
    </footer>
  );
}