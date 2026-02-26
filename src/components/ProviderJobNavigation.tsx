import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Star, User } from 'lucide-react';

export default function ProviderJobNavigation({ onArrive }: { onArrive: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col font-sans relative"
    >
      {/* Map Background Simulation */}
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
            <path d="M 150 450 Q 180 300 200 150" fill="none" stroke="#FFA500" strokeWidth="6" strokeLinecap="round" opacity="0.8" style={{ filter: 'drop-shadow(0 0 8px #FFA500)' }} />
            <circle cx="200" cy="150" r="8" fill="#FFA500" />
            <circle cx="150" cy="450" r="8" fill="#00E676" />
          </svg>
        </div>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 p-6 pt-12 flex justify-between items-center">
        <div className="metal-surface px-4 py-2 rounded-full flex items-center shadow-lg border border-[#FFA500]/30">
          <div className="w-2 h-2 rounded-full bg-[#FFA500] animate-pulse mr-2 shadow-[0_0_8px_#FFA500]" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFA500] uppercase">En Route to Client</span>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="mt-auto relative z-10 p-4 pb-8">
        <div className="glass-card rounded-[32px] p-6 shadow-2xl border-t border-t-white/20">
          
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 metal-sunken rounded-full flex items-center justify-center mr-4 border border-[#2E2E2E]">
                <User className="w-6 h-6 text-[#A0A0A0]" />
              </div>
              <div>
                <h2 className="text-[18px] font-bold text-white tracking-wide">John Doe</h2>
                <div className="flex items-center mt-1">
                  <span className="text-[12px] font-bold text-[#FFA500] mr-1">4.9</span>
                  <Star className="w-3 h-3 text-[#FFA500] fill-current" />
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[12px] text-[#A0A0A0] font-mono">Toyota Hilux</div>
              <div className="text-[14px] font-bold text-white uppercase tracking-widest mt-1">KCA 123A</div>
            </div>
          </div>

          <div className="metal-sunken rounded-2xl p-4 mb-6 border border-[#2E2E2E]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest">Destination</span>
              <span className="text-[10px] font-mono text-[#FFA500] uppercase tracking-widest">4.2 km • 12 mins</span>
            </div>
            <div className="text-[14px] font-bold text-white flex items-center">
              <MapPin className="w-4 h-4 text-[#FFA500] mr-2" />
              Waiyaki Way, Westlands
            </div>
          </div>

          <div className="flex space-x-4">
            <button 
              className="w-14 h-14 metal-extruded rounded-xl flex items-center justify-center active:metal-sunken transition-all shrink-0"
            >
              <Phone className="w-6 h-6 text-[#00E676] drop-shadow-[0_0_8px_#00E676]" />
            </button>
            <button 
              onClick={onArrive}
              className="flex-1 py-4 metal-extruded rounded-xl font-bold text-[#FFA500] text-[16px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center text-glow-voltage"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Confirm Arrival
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
