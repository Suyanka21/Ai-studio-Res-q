import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Radar } from 'lucide-react';

export default function Searching({ service, onFound }: { service: string, onFound: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFound();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onFound]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col items-center justify-center p-6"
    >
      <div className="relative w-64 h-64 flex items-center justify-center mb-12">
        {/* Radar Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
            transition={{ duration: 2, delay: i * 0.6, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 border-2 border-[#FFA500] rounded-full"
            style={{ boxShadow: 'inset 0 0 20px rgba(255, 165, 0, 0.2), 0 0 20px rgba(255, 165, 0, 0.2)' }}
          />
        ))}
        
        {/* Central Hub */}
        <div className="relative z-10 w-24 h-24 metal-extruded rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,165,0,0.4)]">
          <Radar className="w-10 h-10 text-[#FFA500] drop-shadow-[0_0_10px_#FFA500]" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-[24px] font-bold text-white mb-2 tracking-wide uppercase text-glow-voltage">Locating Unit</h2>
        <p className="text-[#A0A0A0] text-[14px] uppercase tracking-widest">
          Broadcasting to {service} specialists<br/>in your sector
        </p>
      </div>

      {/* Cancel Button */}
      <div className="absolute bottom-12 w-full px-6">
        <button className="w-full py-4 metal-extruded rounded-2xl font-bold text-[#A0A0A0] text-[16px] uppercase tracking-widest active:metal-sunken transition-all">
          Cancel Request
        </button>
      </div>
    </motion.div>
  );
}
