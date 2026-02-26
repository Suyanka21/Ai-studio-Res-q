import { motion } from 'motion/react';
import { ArrowLeft, Phone, ShieldCheck } from 'lucide-react';

export default function ProviderLogin({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen w-full bg-[#0A0A0A] flex flex-col font-sans p-6"
    >
      <button onClick={onBack} className="w-12 h-12 metal-extruded rounded-full flex items-center justify-center mt-8 mb-8 active:metal-sunken transition-all">
        <ArrowLeft className="w-6 h-6 text-[#A0A0A0]" />
      </button>

      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <div className="w-20 h-20 metal-extruded rounded-2xl flex items-center justify-center mb-8 mx-auto">
          <ShieldCheck className="w-10 h-10 text-[#FFA500] drop-shadow-[0_0_10px_#FFA500]" />
        </div>

        <h1 className="text-[32px] font-bold text-white tracking-wide mb-2 text-center">Provider Portal</h1>
        <p className="text-[14px] text-[#A0A0A0] font-mono tracking-widest uppercase mb-12 text-center">Partner Login</p>

        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Phone className="w-5 h-5 text-[#6B6B6B]" />
              <span className="text-white font-bold ml-2 mr-2">+254</span>
              <div className="w-px h-5 bg-[#2E2E2E]" />
            </div>
            <input 
              type="tel" 
              placeholder="7XX XXX XXX"
              className="w-full h-[60px] metal-sunken rounded-xl pl-24 pr-4 text-white font-bold text-[18px] tracking-widest placeholder-[#4A4A4A] focus:outline-none focus:ring-1 focus:ring-[#FFA500]/50 transition-all border border-[#2E2E2E]"
            />
          </div>

          <button 
            onClick={onNext}
            className="w-full h-[60px] metal-extruded rounded-xl font-bold text-[#FFA500] text-[16px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center text-glow-voltage"
          >
            Send OTP
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[12px] text-[#A0A0A0] mb-2">Not a partner yet?</p>
          <button className="text-[14px] font-bold text-[#FFA500] uppercase tracking-widest hover:text-white transition-colors">
            Apply to be a Provider
          </button>
        </div>
      </div>
    </motion.div>
  );
}
