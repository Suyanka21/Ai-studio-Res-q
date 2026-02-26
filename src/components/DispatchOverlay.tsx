import { motion } from 'motion/react';
import { MapPin, AlertTriangle, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DispatchOverlay({ onAccept, onDecline }: { onAccept: () => void, onDecline: () => void }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Edge Light Leak Animation */}
      <motion.div 
        className="fixed inset-0 z-40 pointer-events-none border-[4px] border-[#FFA500]"
        animate={{ opacity: pulse ? 0.6 : 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ boxShadow: 'inset 0 0 50px rgba(255, 165, 0, 0.5)' }}
      />
      
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-50 flex flex-col justify-end pointer-events-none"
      >
        <div className="glass-card border-t border-t-white/20 rounded-t-[32px] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pointer-events-auto backdrop-blur-2xl bg-[#0A0A0A]/90">
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFA500]/10 border border-[#FFA500]/30 mb-3 shadow-[0_0_10px_rgba(255,165,0,0.2)]">
                <AlertTriangle className="w-3 h-3 text-[#FFA500] mr-2" />
                <span className="text-[10px] font-mono font-bold text-[#FFA500] uppercase tracking-widest text-glow-voltage">Priority Dispatch</span>
              </div>
              <h2 className="text-[24px] font-bold text-white tracking-wide uppercase">Towing Required</h2>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest mb-1">Guaranteed</div>
              <div className="text-[20px] font-bold text-[#00E676] text-glow-safety">KES 3,500</div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="metal-sunken rounded-xl p-4 flex items-center border border-[#2E2E2E]">
              <div className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5 text-[#FFA500]" />
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-bold text-white">Waiyaki Way, Westlands</div>
                <div className="text-[12px] text-[#A0A0A0] font-mono mt-1">4.2 km away</div>
              </div>
            </div>
            <div className="metal-sunken rounded-xl p-4 flex items-center border border-[#2E2E2E]">
              <div className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center mr-4">
                <Clock className="w-5 h-5 text-[#FFA500]" />
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-bold text-white">ETA: 12 mins</div>
                <div className="text-[12px] text-[#A0A0A0] font-mono mt-1">Traffic: Moderate</div>
              </div>
            </div>
          </div>

          {/* Massive Extruded Reactor Button */}
          <div className="flex space-x-4 mb-4">
            <button 
              onClick={onDecline} 
              className="flex-1 py-4 metal-sunken rounded-xl text-[14px] font-bold text-[#A0A0A0] uppercase tracking-widest transition-colors border border-[#2E2E2E]"
            >
              Decline
            </button>
            <button 
              onClick={onAccept}
              className="flex-[2] py-4 metal-extruded rounded-xl font-bold text-[#FFA500] text-[16px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-[#FFA500] mix-blend-overlay"
                animate={{ opacity: pulse ? 0.3 : 0.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <span className="text-glow-voltage relative z-10">Accept Job</span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
