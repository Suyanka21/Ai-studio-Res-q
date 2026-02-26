import { motion } from 'motion/react';
import { useState } from 'react';
import { User, CheckCircle, Wallet, TrendingUp, Wrench, MapPin, Star } from 'lucide-react';

export default function ProviderDashboard({ onIncomingJob, onNavigate }: { onIncomingJob: () => void, onNavigate: (screen: string) => void }) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="relative h-screen w-full bg-[#0A0A0A] overflow-hidden flex flex-col font-sans">
      
      {/* 1. The Map Foundation (The "Under-Glass" Look) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 shadow-[inset_0_0_20px_4px_#000000] z-10 pointer-events-none" />
        <div className="w-full h-full bg-[#050505] opacity-80" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}>
          {/* Simulated Route/Streets with metallic sheen */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M 100 100 Q 200 150 300 100 T 500 200" fill="none" stroke="url(#metallic)" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
            <path d="M 50 300 Q 150 400 250 350 T 450 450" fill="none" stroke="url(#metallic)" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
            <defs>
              <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A4A4A" />
                <stop offset="50%" stopColor="#A0A0A0" />
                <stop offset="100%" stopColor="#2E2E2E" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Online Glow Effect */}
          {isOnline && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              className="absolute inset-0 bg-[#00E676] mix-blend-screen"
            />
          )}
        </div>
      </div>

      {/* Top Bar */}
      <div className="relative z-20 p-6 flex justify-between items-start mt-4">
        <div>
          <h1 className="text-[20px] font-bold text-white tracking-wide">Michael Kiprop</h1>
          <p className="text-[12px] text-[#A0A0A0] font-mono tracking-widest">RES-P-12345</p>
          <div className="flex items-center mt-1">
            <span className="text-[14px] font-bold text-[#FFA500] mr-1">4.8</span>
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FFA500] fill-current" />)}
            </div>
          </div>
        </div>
        <div className="w-14 h-14 metal-extruded rounded-full flex items-center justify-center p-1">
          <div className="w-full h-full rounded-full bg-[#1A1A1A] overflow-hidden border border-[#2E2E2E]">
            <User className="w-full h-full text-[#6B6B6B] p-2" />
          </div>
        </div>
      </div>

      {/* 3. Floating Tactical HUD (Heads-Up Display) */}
      <div className="relative z-20 px-6 mt-2 flex space-x-3">
        <div className="flex-1 glass-card rounded-2xl p-4 border-t border-t-white/20 shadow-lg backdrop-blur-xl bg-black/30">
          <div className="flex items-center mb-1">
            <CheckCircle className="w-4 h-4 text-[#A0A0A0] mr-2" />
            <span className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Jobs Today</span>
          </div>
          <div className="text-[24px] font-mono font-bold text-white text-glow-voltage">12</div>
        </div>
        
        <div className="flex-1 glass-card rounded-2xl p-4 border-t border-t-white/20 shadow-lg backdrop-blur-xl bg-black/30">
          <div className="flex items-center mb-1">
            <Wallet className="w-4 h-4 text-[#A0A0A0] mr-2" />
            <span className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Earnings</span>
          </div>
          <div className="text-[20px] font-mono font-bold text-[#00E676] text-glow-safety">8.5K</div>
        </div>
        
        <div className="flex-1 glass-card rounded-2xl p-4 border-t border-t-white/20 shadow-lg backdrop-blur-xl bg-black/30">
          <div className="flex items-center mb-1">
            <TrendingUp className="w-4 h-4 text-[#A0A0A0] mr-2" />
            <span className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Accept</span>
          </div>
          <div className="text-[24px] font-mono font-bold text-white text-glow-voltage">95%</div>
        </div>
      </div>

      {/* 2. The "Active Status" Switch (Availability Toggle) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          <div 
            className={`w-[160px] h-[80px] rounded-[40px] p-2 cursor-pointer transition-all duration-500 relative flex items-center shadow-2xl ${
              isOnline ? 'metal-sunken' : 'metal-extruded'
            }`}
            onClick={() => setIsOnline(!isOnline)}
            style={{
              transform: isOnline ? 'perspective(500px) rotateY(10deg)' : 'perspective(500px) rotateY(-10deg)'
            }}
          >
            {/* The physical rocker */}
            <motion.div 
              layout
              className={`w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-500 z-10 ${
                isOnline 
                  ? 'bg-[#00E676] shadow-[0_0_20px_#00E676,inset_2px_2px_5px_rgba(255,255,255,0.5)] ml-auto' 
                  : 'bg-[#2E2E2E] shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1)]'
              }`}
            >
              <div className={`w-3 h-12 rounded-full ${isOnline ? 'bg-black/20' : 'bg-black/40'}`} />
            </motion.div>
            
            {/* Internal Backlight Glow */}
            {isOnline && (
              <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_30px_rgba(0,230,118,0.4)] pointer-events-none" />
            )}
          </div>
          
          <div className="mt-6 text-center">
            <h2 className={`text-[24px] font-bold tracking-widest uppercase transition-colors duration-300 ${
              isOnline ? 'text-[#00E676] text-glow-safety' : 'text-[#6B6B6B]'
            }`}>
              {isOnline ? 'System Online' : 'System Offline'}
            </h2>
            <p className="text-[12px] text-[#A0A0A0] font-mono mt-2">
              {isOnline ? 'Awaiting dispatch directives...' : 'Standby mode engaged'}
            </p>
          </div>
        </div>
      </div>

      {/* Demo Trigger */}
      {isOnline && (
        <button 
          onClick={onIncomingJob}
          className="absolute bottom-24 right-6 z-30 px-4 py-2 bg-[#FFA500] text-black text-xs font-bold rounded-full shadow-[0_0_15px_rgba(255,165,0,0.5)] animate-pulse"
        >
          [Demo: Trigger Job]
        </button>
      )}
    </div>
  );
}
