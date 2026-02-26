import { motion } from 'motion/react';
import { useEffect } from 'react';
import { ShieldCheck, Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

export default function ProviderArriving({ onNext }: { onNext: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col p-6"
    >
      {/* Map Area (Simulated) */}
      <div className="flex-1 -mx-6 -mt-6 mb-6 relative overflow-hidden shadow-[inset_0_0_20px_4px_#000000]">
        <div className="absolute inset-0 bg-[#121212] opacity-50" style={{ backgroundImage: 'radial-gradient(#2E2E2E 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        {/* Simulated Route */}
        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px #00E676)' }}>
          <path d="M 50 300 Q 150 200 250 150 T 350 50" fill="none" stroke="#00E676" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
        </svg>

        {/* Provider Marker */}
        <motion.div 
          animate={{ x: [50, 350], y: [300, 50] }}
          transition={{ duration: 4, ease: "linear" }}
          className="absolute w-8 h-8 -ml-4 -mt-4 bg-[#00E676] rounded-full flex items-center justify-center shadow-[0_0_20px_#00E676]"
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>

        {/* User Marker */}
        <div className="absolute top-[50px] left-[350px] w-6 h-6 -ml-3 -mt-3 bg-[#FFA500] rounded-full flex items-center justify-center shadow-[0_0_15px_#FFA500]">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* ETA Card */}
      <div className="glass-card rounded-2xl p-6 mb-4 -mt-12 relative z-10 flex justify-between items-center">
        <div>
          <div className="text-[12px] text-[#A0A0A0] uppercase tracking-widest mb-1">Estimated Arrival</div>
          <div className="text-[32px] font-bold text-[#00E676] text-glow-safety">12 MINS</div>
        </div>
        <div className="text-right">
          <div className="text-[12px] text-[#A0A0A0] uppercase tracking-widest mb-1">Distance</div>
          <div className="text-[20px] font-bold text-white">4.2 KM</div>
        </div>
      </div>

      {/* Provider Details Card */}
      <div className="metal-sunken rounded-2xl p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 metal-extruded rounded-full flex items-center justify-center mr-4">
            <span className="text-[24px] font-bold text-[#FFA500]">DK</span>
          </div>
          <div className="flex-1">
            <h3 className="text-[20px] font-bold text-white">David K.</h3>
            <div className="flex items-center text-[#A0A0A0] text-[12px] mt-1">
              <ShieldCheck className="w-4 h-4 text-[#00E676] mr-1" /> Verified Professional
            </div>
            <div className="text-[#A0A0A0] text-[12px] mt-1">KCA 123A • Flatbed Tow Truck</div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 py-3 metal-extruded rounded-xl flex items-center justify-center text-[#FFA500] font-bold text-[14px] active:metal-sunken transition-all">
            <Phone className="w-5 h-5 mr-2" /> Call
          </button>
          <button className="flex-1 py-3 metal-extruded rounded-xl flex items-center justify-center text-[#FFA500] font-bold text-[14px] active:metal-sunken transition-all">
            <MessageSquare className="w-5 h-5 mr-2" /> Message
          </button>
        </div>
      </div>

      {/* Cancel Button */}
      <button className="w-full py-4 metal-extruded rounded-2xl font-bold text-[#A0A0A0] text-[16px] uppercase tracking-widest active:metal-sunken transition-all">
        Cancel Request
      </button>
    </motion.div>
  );
}
