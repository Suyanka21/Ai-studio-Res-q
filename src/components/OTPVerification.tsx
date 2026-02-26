import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function OTPVerification({ onBack, onComplete }: { onBack: () => void, onComplete: () => void }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const handleVerify = () => {
    if (otp.every(digit => digit !== '')) {
      setIsVerifying(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-8 px-6 overflow-y-auto"
    >
      <div className="flex items-center mb-12">
        <button onClick={onBack} className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center mr-4 active:metal-sunken transition-all" disabled={isVerifying}>
          <ArrowLeft className="w-5 h-5 text-[#FFA500]" />
        </button>
        <h1 className="text-[24px] font-bold text-white tracking-wide">Verify Phone Number</h1>
      </div>

      <div className="flex-1 flex flex-col items-center max-w-md mx-auto w-full">
        <p className="text-[14px] text-[#A0A0A0] text-center mb-2">
          Enter the 6-digit code sent to
        </p>
        <p className="text-[16px] text-white font-medium mb-10">
          +254 712 345 678
        </p>

        <div className="flex justify-between w-full mb-10">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-[56px] h-[56px] text-center text-[24px] font-bold text-white rounded-xl outline-none transition-all duration-300 ${
                digit 
                  ? 'metal-extruded reactor-glow-voltage' 
                  : 'metal-sunken'
              }`}
              disabled={isVerifying}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-[14px] text-[#A0A0A0] mb-1">Didn't receive code?</p>
          {timeLeft > 0 ? (
            <p className="text-[#FFA500] text-[16px] font-bold">Resend in 0:{timeLeft.toString().padStart(2, '0')}</p>
          ) : (
            <button onClick={() => setTimeLeft(45)} className="text-[#FFA500] text-[16px] font-bold">
              Resend Code
            </button>
          )}
        </div>

        <div className="w-full mt-auto">
          <button
            onClick={handleVerify}
            disabled={!isComplete || isVerifying}
            className={`w-full h-[80px] rounded-xl font-bold text-[18px] transition-all duration-300 flex items-center justify-center ${
              isComplete
                ? 'metal-extruded text-voltage'
                : 'metal-sunken text-[#4A4A4A]'
            }`}
          >
            {isVerifying ? (
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-6 h-6 border-2 border-[#FFA500] border-t-transparent rounded-full"
              />
            ) : (
              <span className={isComplete ? "text-glow-voltage" : ""}>Verify & Continue</span>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
