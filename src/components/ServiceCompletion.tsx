import { motion } from 'motion/react';
import { CheckCircle, ShieldCheck, Download } from 'lucide-react';

export default function ServiceCompletion({ onNext }: { onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col p-6 pt-16"
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
          className="w-32 h-32 metal-sunken rounded-full flex items-center justify-center shadow-[inset_0_0_30px_rgba(0,230,118,0.4)] border border-[#00E676]/30 mb-8"
        >
          <CheckCircle className="w-16 h-16 text-[#00E676] drop-shadow-[0_0_15px_#00E676]" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[32px] font-bold text-white tracking-widest uppercase text-center mb-2"
        >
          Service Complete
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[#A0A0A0] text-[14px] uppercase tracking-widest text-center mb-12"
        >
          Your vehicle is secure
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-full glass-card rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-[#00E676] mr-2" />
              <span className="text-[14px] font-bold text-white uppercase tracking-widest">Final Summary</span>
            </div>
            <span className="text-[12px] text-[#A0A0A0]">ID: REQ-8921</span>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-[14px]">
              <span className="text-[#A0A0A0]">Service</span>
              <span className="text-white font-bold">Flatbed Towing</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span className="text-[#A0A0A0]">Provider</span>
              <span className="text-white font-bold">David K.</span>
            </div>
            <div className="flex justify-between text-[14px]">
              <span className="text-[#A0A0A0]">Duration</span>
              <span className="text-white font-bold">42 mins</span>
            </div>
          </div>

          <div className="h-px bg-[#2E2E2E] mb-4" />
          
          <div className="flex justify-between items-center">
            <span className="text-[16px] font-bold text-white">Total Paid</span>
            <span className="text-[24px] font-bold text-[#00E676] text-glow-safety">KES 6,800</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pb-6 space-y-4"
      >
        <button className="w-full py-4 metal-extruded rounded-2xl flex items-center justify-center text-[#A0A0A0] font-bold text-[14px] uppercase tracking-widest active:metal-sunken transition-all">
          <Download className="w-5 h-5 mr-2" /> Download Receipt
        </button>
        <button 
          onClick={onNext}
          className="w-full py-4 metal-extruded rounded-2xl font-bold text-[#FFA500] text-[18px] uppercase tracking-widest active:metal-sunken transition-all text-glow-voltage"
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  );
}
