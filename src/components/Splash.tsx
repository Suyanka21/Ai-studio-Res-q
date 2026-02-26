import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Splash({ onComplete, key }: { onComplete: () => void, key?: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-base flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        {/* The Kinetic Shield Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Hexagonal Shield Base */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2A2A2A" />
                <stop offset="50%" stopColor="#121212" />
                <stop offset="100%" stopColor="#050505" />
              </linearGradient>
              <linearGradient id="light-sweep" x1="-100%" y1="-100%" x2="200%" y2="200%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="45%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="55%" stopColor="transparent" />
                <stop offset="100%" stopColor="transparent" />
                <animate attributeName="x1" values="-100%;200%" dur="2s" repeatCount="1" />
                <animate attributeName="x2" values="0%;300%" dur="2s" repeatCount="1" />
                <animate attributeName="y1" values="-100%;200%" dur="2s" repeatCount="1" />
                <animate attributeName="y2" values="0%;300%" dur="2s" repeatCount="1" />
              </linearGradient>
            </defs>
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="url(#shield-grad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="url(#light-sweep)" />
          </svg>

          {/* Stylized 'R' */}
          <div className="relative z-10 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-600 tracking-tighter" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            R
          </div>

          {/* Pulsing Core */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-0 w-12 h-12 bg-voltage rounded-full blur-xl opacity-50"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 flex flex-col items-center"
        >
          <h1 className="text-3xl font-bold tracking-widest text-white mb-2">ResQ</h1>
          <p className="text-xs text-text-tertiary tracking-[0.2em] uppercase font-mono">Tactical Roadside Sovereignty</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
