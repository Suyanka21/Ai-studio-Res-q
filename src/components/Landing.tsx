import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export default function Landing({ onGetStarted, onSignIn, onProviderLogin }: { onGetStarted: () => void, onSignIn: () => void, onProviderLogin: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-[#0A0A0A] flex flex-col items-center pt-12 pb-8 px-6 relative overflow-y-auto"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[400px] h-[400px] bg-voltage rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm flex-1">
        {/* Hero Section */}
        <div className="w-24 h-24 metal-extruded rounded-3xl flex items-center justify-center mb-8">
          <ShieldAlert className="w-12 h-12 text-voltage drop-shadow-[0_0_10px_#FFA500]" />
        </div>
        
        <h1 className="text-[36px] font-bold text-white tracking-tight mb-4 text-center">
          Help Is On The Way
        </h1>
        <p className="text-[16px] text-[#A0A0A0] text-center mb-12 px-4">
          24/7 Emergency Roadside & Medical Assistance
        </p>

        {/* Actions */}
        <div className="w-full space-y-6 mt-8">
          <button 
            onClick={onGetStarted}
            className="w-full h-[80px] metal-extruded rounded-xl font-bold text-voltage text-[18px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center"
          >
            <span className="text-glow-voltage">Get Started</span>
          </button>
          
          <div className="text-center mt-6 flex flex-col space-y-4">
            <button onClick={onSignIn} className="text-[#FFA500] text-[14px] font-medium">
              Already have an account? Sign In
            </button>
            <button onClick={onProviderLogin} className="text-[#A0A0A0] text-[12px] font-mono uppercase tracking-widest hover:text-white transition-colors">
              Partner Login
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 mt-auto pt-8">
        <p className="text-center text-[12px] text-[#6B6B6B]">
          By continuing, you agree to Terms & Privacy
        </p>
      </div>
    </motion.div>
  );
}
