import { motion } from 'motion/react';
import { CheckCircle, Wallet, ArrowRight, Star } from 'lucide-react';

export default function ProviderJobSummary({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col font-sans p-6"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Success Animation */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-32 h-32 metal-sunken rounded-full flex items-center justify-center mb-8 shadow-[inset_0_0_50px_rgba(0,230,118,0.2)] border border-[#00E676]/30 relative"
        >
          <motion.div 
            className="absolute inset-0 rounded-full border-[4px] border-[#00E676]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <CheckCircle className="w-16 h-16 text-[#00E676] drop-shadow-[0_0_15px_#00E676]" />
        </motion.div>

        <h1 className="text-[32px] font-bold text-white tracking-wide uppercase mb-2 text-center">Job Complete</h1>
        <p className="text-[14px] text-[#A0A0A0] font-mono tracking-widest uppercase mb-12 text-center">REQ-8921 • Flatbed Towing</p>

        {/* Earnings Summary Card */}
        <div className="w-full glass-card rounded-3xl p-8 border-t border-t-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E676] opacity-10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 metal-extruded rounded-full flex items-center justify-center mr-4">
                  <Wallet className="w-6 h-6 text-[#00E676]" />
                </div>
                <span className="text-[12px] font-bold text-[#A0A0A0] uppercase tracking-widest">Total Earnings</span>
              </div>
              <div className="text-[32px] font-bold text-[#00E676] text-glow-safety">
                <span className="text-[16px] mr-1">KES</span>
                3,500
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#A0A0A0]">Base Fare</span>
                <span className="text-white font-bold">KES 2,500</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#A0A0A0]">Distance (4.2 km)</span>
                <span className="text-white font-bold">KES 840</span>
              </div>
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#A0A0A0]">Time (12 mins)</span>
                <span className="text-white font-bold">KES 160</span>
              </div>
              <div className="h-px bg-[#2E2E2E] my-4" />
              <div className="flex justify-between items-center text-[16px]">
                <span className="text-white font-bold uppercase tracking-widest">Total</span>
                <span className="text-[#00E676] font-bold">KES 3,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Rating Prompt */}
        <div className="mt-8 flex flex-col items-center">
          <div className="text-[10px] text-[#A0A0A0] uppercase tracking-widest mb-3">Rate Client (John D.)</div>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center active:metal-sunken transition-all">
                <Star className="w-5 h-5 text-[#6B6B6B] hover:text-[#FFA500] hover:fill-[#FFA500] transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pb-8">
        <button 
          onClick={onFinish}
          className="w-full py-5 metal-extruded rounded-2xl font-bold text-[#FFA500] text-[16px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center text-glow-voltage relative overflow-hidden group"
        >
          <motion.div 
            className="absolute inset-0 bg-[#FFA500] mix-blend-overlay opacity-0 group-active:opacity-20 transition-opacity"
          />
          <span className="relative z-10">Back to Dashboard</span>
          <ArrowRight className="w-5 h-5 ml-3 relative z-10" />
        </button>
      </div>
    </motion.div>
  );
}
