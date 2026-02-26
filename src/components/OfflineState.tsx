import { motion } from 'motion/react';
import { WifiOff, RefreshCw, AlertTriangle } from 'lucide-react';

export default function OfflineState({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col items-center justify-center p-6"
    >
      <div className="relative w-48 h-48 flex items-center justify-center mb-12">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 border-2 border-[#FF3D3D] rounded-full"
          style={{ boxShadow: 'inset 0 0 20px rgba(255, 61, 61, 0.2), 0 0 20px rgba(255, 61, 61, 0.2)' }}
        />
        <div className="relative z-10 w-24 h-24 metal-sunken rounded-full flex items-center justify-center shadow-[inset_0_0_30px_rgba(255,61,61,0.4)] border border-[#FF3D3D]/30">
          <WifiOff className="w-10 h-10 text-[#FF3D3D] drop-shadow-[0_0_10px_#FF3D3D]" />
        </div>
      </div>
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF3D3D]/10 border border-[#FF3D3D]/30 mb-6">
          <AlertTriangle className="w-4 h-4 text-[#FF3D3D] mr-2" />
          <span className="text-[12px] font-bold text-[#FF3D3D] uppercase tracking-widest">System Offline</span>
        </div>
        <h2 className="text-[32px] font-bold text-white mb-4 tracking-wide uppercase">No Connection</h2>
        <p className="text-[#A0A0A0] text-[14px] uppercase tracking-widest leading-relaxed">
          Your request is queued.<br/>We will dispatch as soon as<br/>signal returns.
        </p>
      </div>

      <div className="absolute bottom-12 w-full px-6">
        <button 
          onClick={onRetry}
          className="w-full h-[80px] metal-extruded rounded-2xl font-bold text-[18px] text-[#FFA500] uppercase tracking-widest flex items-center justify-center active:metal-sunken transition-all text-glow-voltage"
        >
          <RefreshCw className="w-6 h-6 mr-3" />
          Retry Connection
        </button>
      </div>
    </motion.div>
  );
}
