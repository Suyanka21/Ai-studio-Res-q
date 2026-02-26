import { motion } from 'motion/react';
import { CheckCircle, Circle, Dot, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const STEPS = [
  "Provider Arrived",
  "Safety Assessment",
  "Service Execution",
  "Final Checks"
];

export default function ServiceInProgress({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < STEPS.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-16 px-6"
    >
      <div className="flex items-center mb-12">
        <div className="w-12 h-12 metal-extruded rounded-full flex items-center justify-center mr-4">
          <ShieldCheck className="w-6 h-6 text-[#FFA500]" />
        </div>
        <div>
          <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Service Active</h1>
          <p className="text-[12px] text-[#A0A0A0] uppercase tracking-widest">David K. is on site</p>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col space-y-8 relative">
        <div className="absolute left-[23px] top-8 bottom-24 w-0.5 bg-[#2E2E2E]" />
        
        {STEPS.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={step} className="flex items-center relative z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-6 transition-all duration-500 ${
                isCompleted ? 'metal-sunken text-[#00E676] shadow-[inset_0_0_15px_rgba(0,230,118,0.4)] border border-[#00E676]/30' :
                isActive ? 'metal-sunken text-[#FFA500] shadow-[inset_0_0_15px_rgba(255,165,0,0.4)] border border-[#FFA500]/30' :
                'metal-extruded text-[#6B6B6B]'
              }`}>
                {isCompleted ? <CheckCircle className="w-6 h-6" /> : 
                 isActive ? (
                   <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                     <Dot className="w-8 h-8 text-[#FFA500] drop-shadow-[0_0_8px_#FFA500]" />
                   </motion.div>
                 ) : <Circle className="w-4 h-4" />}
              </div>
              <div>
                <div className={`text-[16px] font-bold uppercase tracking-widest transition-colors duration-500 ${
                  isCompleted ? 'text-white' :
                  isActive ? 'text-[#FFA500] text-glow-voltage' :
                  'text-[#6B6B6B]'
                }`}>
                  {step}
                </div>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-[12px] text-[#A0A0A0] font-mono mt-1"
                  >
                    Processing...
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pb-8">
        <div className="glass-card rounded-2xl p-4 flex items-center justify-center border-l-4 border-l-[#FFA500]">
          <p className="text-[12px] text-white text-center">Please remain in a safe location while service is being performed.</p>
        </div>
      </div>
    </motion.div>
  );
}
