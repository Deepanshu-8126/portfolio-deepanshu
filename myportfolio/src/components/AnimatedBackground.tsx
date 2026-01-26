'use client'

export default function AnimatedBackground() {
  return (
    <>
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[700px] h-[700px] rounded-full opacity-15 blur-[140px] bg-gradient-to-r from-primary-500 to-secondary-500 -top-64 -left-32 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[140px] bg-gradient-to-r from-secondary-500 to-accent-500 -bottom-48 -right-32 animate-float" style={{ animationDelay: '7s' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[140px] bg-gradient-to-r from-accent-500 to-primary-500 top-1/2 right-[5%] animate-float" style={{ animationDelay: '14s' }} />
        <div className="absolute w-[550px] h-[550px] rounded-full opacity-15 blur-[140px] bg-gradient-to-r from-primary-500 to-accent-500 bottom-1/4 left-[10%] animate-float" style={{ animationDelay: '21s' }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          animation: 'grid-scroll 40s linear infinite',
        }}
      />

      <style jsx>{`
        @keyframes grid-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
      `}</style>
    </>
  )
}