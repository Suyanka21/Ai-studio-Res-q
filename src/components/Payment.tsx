import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Payment({ onComplete }: { onComplete: () => void }) {
  const [pin, setPin] = useState('');
  const [processing, setProcessing] = useState(false);

  const handlePress = (num: string) => {
    if (pin.length < 4) setPin(prev => prev + num);
  };

  const handlePay = () => {
    if (pin.length === 4) {
      setProcessing(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-screen w-full bg-base flex flex-col pt-12 pb-8 px-6"
    >
      <div className="text-center mb-8">
        <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest mb-2">M-Pesa Express</div>
        <div className="text-4xl font-bold text-white tracking-tighter mb-2">KES 2,500</div>
        <div className="text-xs text-text-secondary font-mono">ResQ Towing Service</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex space-x-4 mb-12">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`w-4 h-4 rounded-full transition-all duration-300 ${
              i < pin.length ? 'bg-safety shadow-[0_0_10px_#00E676]' : 'metal-sunken'
            }`} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-[280px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '⌫'].map((key) => (
            <button
              key={key}
              onClick={() => {
                if (key === 'C') setPin('');
                else if (key === '⌫') setPin(prev => prev.slice(0, -1));
                else handlePress(key.toString());
              }}
              className="w-16 h-16 rounded-full metal-surface flex items-center justify-center text-xl font-bold text-white active:metal-sunken transition-all mx-auto"
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <button 
          onClick={handlePay}
          disabled={pin.length < 4 || processing}
          className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${
            pin.length === 4 && !processing
              ? 'bg-safety text-black shadow-[0_0_20px_rgba(0,230,118,0.4)]' 
              : 'bg-surface-raised text-text-disabled metal-surface'
          }`}
        >
          {processing ? (
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
              <CheckCircle className="w-6 h-6 text-black opacity-50" />
            </motion.div>
          ) : (
            'Authorize Payment'
          )}
        </button>
      </div>
    </motion.div>
  );
}
