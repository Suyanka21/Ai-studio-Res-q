import { motion } from 'motion/react';
import { Phone, ShieldCheck, Star } from 'lucide-react';

export default function LiveTracking({ onArrived }: { onArrived: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen w-full bg-map-tactical overflow-hidden flex flex-col"
    >
      {/* Map Background Simulation */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="neon-conduit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA500" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFA500" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Safety Beacon Conduit */}
          <path 
            d="M 150 150 Q 200 300 180 450" 
            fill="none" 
            stroke="url(#neon-conduit)" 
            strokeWidth="6" 
            strokeLinecap="round" 
            filter="url(#glow)"
          />
          
          {/* Running Light Animation */}
          <motion.circle 
            r="4" 
            fill="#FFFFFF" 
            filter="url(#glow)"
            animate={{
              cx: [150, 200, 180],
              cy: [150, 300, 450]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Provider Marker */}
          <motion.g
            animate={{
              x: [150, 200, 180],
              y: [150, 300, 450]
            }}
            transition={{
              duration: 20,
              ease: "linear"
            }}
          >
            <circle cx="0" cy="0" r="24" fill="rgba(41,182,246,0.2)" />
            <circle cx="0" cy="0" r="12" fill="#29B6F6" filter="url(#glow)" />
            <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
          </motion.g>

          {/* User Marker */}
          <g transform="translate(180, 450)">
            <circle cx="0" cy="0" r="16" fill="rgba(255,255,255,0.1)" />
            <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 p-6 flex justify-center mt-8">
        <div className="metal-surface px-6 py-3 rounded-full flex items-center shadow-lg">
          <div className="w-2 h-2 rounded-full bg-info animate-pulse mr-3 shadow-[0_0_8px_#29B6F6]" />
          <span className="text-sm font-mono font-bold tracking-widest text-white uppercase">En Route</span>
        </div>
      </div>

      {/* Status Panel */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-4">
        <div className="glass-panel rounded-[32px] p-6 shadow-2xl relative border-t border-white/10">
          
          <div className="flex justify-between items-end mb-6">
            <div>
              <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-1">Estimated Arrival</div>
              <div className="text-5xl font-bold text-white tracking-tighter text-glow-voltage">
                08<span className="text-2xl text-text-secondary ml-1">MIN</span>
              </div>
            </div>
            <button className="w-14 h-14 metal-surface rounded-2xl flex items-center justify-center active:metal-sunken transition-all">
              <Phone className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Provider Card */}
          <div className="metal-sunken rounded-2xl p-4 flex items-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-surface-raised overflow-hidden">
                <img src="https://picsum.photos/seed/provider/100/100" alt="Provider" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-safety rounded-full flex items-center justify-center border-2 border-surface-raised shadow-[0_0_10px_#00E676]">
                <ShieldCheck className="w-3 h-3 text-black" />
              </div>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-white uppercase tracking-wide">David K.</div>
                <div className="flex items-center text-voltage">
                  <Star className="w-3 h-3 fill-current mr-1" />
                  <span className="text-xs font-bold font-mono">4.9</span>
                </div>
              </div>
              <div className="text-xs text-text-secondary font-mono mt-1">KCA 123A • Flatbed Tow</div>
            </div>
          </div>

          {/* Demo Action */}
          <button onClick={onArrived} className="w-full mt-6 py-3 border border-white/10 rounded-xl text-xs font-mono text-text-tertiary uppercase tracking-widest hover:bg-white/5">
            [Demo: Trigger Arrival]
          </button>
        </div>
      </div>
    </motion.div>
  );
}
