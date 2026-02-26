import { motion } from 'motion/react';
import { CheckCircle, Wrench, Clock, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProviderJobService({ onComplete }: { onComplete: () => void }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col font-sans p-6"
    >
      <div className="flex justify-between items-center mt-12 mb-12">
        <div className="metal-surface px-4 py-2 rounded-full flex items-center shadow-lg border border-[#FFA500]/30">
          <div className="w-2 h-2 rounded-full bg-[#FFA500] animate-pulse mr-2 shadow-[0_0_8px_#FFA500]" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFA500] uppercase">Service Active</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Massive Timer Ring */}
        <div className="relative w-64 h-64 metal-sunken rounded-full flex items-center justify-center mb-12 shadow-[inset_0_0_50px_rgba(255,165,0,0.1)] border border-[#2E2E2E]">
          <div className="absolute inset-0 rounded-full border-[4px] border-[#FFA500]/20" />
          <motion.div 
            className="absolute inset-0 rounded-full border-[4px] border-[#FFA500]"
            style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex flex-col items-center z-10">
            <Clock className="w-8 h-8 text-[#FFA500] mb-2 opacity-50" />
            <div className="text-[48px] font-mono font-bold text-white tracking-widest text-glow-voltage">
              {formatTime(elapsedTime)}
            </div>
            <div className="text-[10px] text-[#A0A0A0] uppercase tracking-widest mt-1">Elapsed Time</div>
          </div>
        </div>

        {/* Service Details Card */}
        <div className="w-full glass-card rounded-3xl p-6 border-t border-t-white/20 shadow-2xl mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 metal-extruded rounded-full flex items-center justify-center mr-4">
              <Wrench className="w-6 h-6 text-[#A0A0A0]" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-white tracking-wide uppercase">Flatbed Towing</h2>
              <div className="text-[12px] text-[#A0A0A0] font-mono mt-1">Job ID: REQ-8921</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="metal-sunken rounded-xl p-4 flex items-start border border-[#2E2E2E]">
              <AlertTriangle className="w-5 h-5 text-[#FFA500] mr-3 shrink-0 mt-0.5" />
              <div>
                <div className="text-[12px] font-bold text-white uppercase tracking-widest mb-1">Client Notes</div>
                <div className="text-[12px] text-[#A0A0A0]">Vehicle is stuck in mud on the shoulder. Needs winch assistance before towing.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pb-8">
        <button 
          onClick={onComplete}
          className="w-full py-5 metal-extruded rounded-2xl font-bold text-[#00E676] text-[18px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center text-glow-safety relative overflow-hidden group"
        >
          <motion.div 
            className="absolute inset-0 bg-[#00E676] mix-blend-overlay opacity-0 group-active:opacity-20 transition-opacity"
          />
          <CheckCircle className="w-6 h-6 mr-3 relative z-10" />
          <span className="relative z-10">Complete Service</span>
        </button>
      </div>
    </motion.div>
  );
}
