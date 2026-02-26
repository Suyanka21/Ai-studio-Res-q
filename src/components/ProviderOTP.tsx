import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ProviderOTP({ onBack, onVerify }: { onBack: () => void, onVerify: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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

        <h1 className="text-[32px] font-bold text-white tracking-wide mb-2 text-center">Verify Identity</h1>
        <p className="text-[14px] text-[#A0A0A0] font-mono tracking-widest uppercase mb-12 text-center">Enter 4-digit code</p>

        <div className="flex justify-between mb-12">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-20 metal-sunken rounded-2xl text-center text-[32px] font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50 transition-all border border-[#2E2E2E]"
            />
          ))}
        </div>

        <button 
          onClick={onVerify}
          className="w-full h-[60px] metal-extruded rounded-xl font-bold text-[#FFA500] text-[16px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center text-glow-voltage"
        >
          Verify & Access
        </button>

        <div className="mt-12 text-center">
          <p className="text-[12px] text-[#A0A0A0] mb-2">Didn't receive the code?</p>
          <button className="text-[14px] font-bold text-[#FFA500] uppercase tracking-widest hover:text-white transition-colors">
            Resend Code
          </button>
        </div>
      </div>
    </motion.div>
  );
}
