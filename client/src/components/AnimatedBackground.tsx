export default function AnimatedBackground() {
  const letters = ['T', 'O', 'E', 'I', 'C', 'A', 'B', 'C'];
  const words = ['SPEAK', 'STUDY', 'LEARN', 'PRACTICE'];
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating gradient blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      
      {/* Floating letters with glassmorphism */}
      {letters.map((letter, i) => (
        <div
          key={`letter-${i}`}
          className="floating-letter"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          {letter}
        </div>
      ))}
      
      {/* Floating words */}
      {words.map((word, i) => (
        <div
          key={`word-${i}`}
          className="floating-word"
          style={{
            right: `${5 + (i * 15)}%`,
            top: `${15 + (i * 20)}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          {word}
        </div>
      ))}
      
      {/* Abstract wave lines */}
      <svg className="wave-line wave-1" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,300 Q300,200 600,300 T1200,300" fill="none" stroke="url(#gradient1)" strokeWidth="2" opacity="0.3"/>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.2}} />
            <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.5}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.2}} />
          </linearGradient>
        </defs>
      </svg>
      
      <svg className="wave-line wave-2" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,400 Q400,300 800,400 T1600,400" fill="none" stroke="url(#gradient2)" strokeWidth="2" opacity="0.3"/>
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.2}} />
            <stop offset="50%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.5}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.2}} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating circles with subtle glow */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`circle-${i}`}
          className="floating-circle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
