import { motion } from 'motion/react';
import { ArrowLeft, Clock, Wrench, Battery, Droplet, CheckCircle } from 'lucide-react';

export default function ProviderHistory({ onBack }: { onBack?: () => void }) {
  const historyItems = [
    { id: 'REQ-8921', service: 'Flatbed Towing', client: 'John Doe', date: 'Today, 14:30', earnings: 'KES 3,500', status: 'Completed', icon: Wrench, color: '#00E676' },
    { id: 'REQ-8910', service: 'Jump Start', client: 'Sarah M.', date: 'Yesterday, 09:15', earnings: 'KES 1,200', status: 'Completed', icon: Battery, color: '#00E676' },
    { id: 'REQ-8895', service: 'Fuel Delivery', client: 'David K.', date: 'Oct 24, 18:45', earnings: 'KES 800', status: 'Completed', icon: Droplet, color: '#00E676' },
    { id: 'REQ-8850', service: 'Tire Change', client: 'Alice W.', date: 'Oct 22, 11:20', earnings: 'KES 1,500', status: 'Completed', icon: Wrench, color: '#00E676' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen w-full bg-[#0A0A0A] flex flex-col font-sans p-6 pb-24"
    >
      <div className="flex items-center mb-8 mt-8">
        {onBack && (
          <button onClick={onBack} className="w-12 h-12 metal-extruded rounded-full flex items-center justify-center mr-4 active:metal-sunken transition-all">
            <ArrowLeft className="w-6 h-6 text-[#A0A0A0]" />
          </button>
        )}
        <div>
          <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Job History</h1>
          <p className="text-[12px] text-[#A0A0A0] font-mono tracking-widest uppercase">Past Services</p>
        </div>
      </div>

      <div className="space-y-4">
        {historyItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-4 border-t border-t-white/10 shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-3 border border-[#2E2E2E]">
                    <Icon className="w-5 h-5 text-[#FFA500]" />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white uppercase tracking-wide">{item.service}</div>
                    <div className="text-[10px] text-[#A0A0A0] font-mono uppercase tracking-widest mt-1">{item.id}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[14px] font-bold text-[#00E676] text-glow-safety">{item.earnings}</div>
                  <div className="text-[10px] text-[#A0A0A0] font-mono mt-1">{item.date}</div>
                </div>
              </div>
              
              <div className="h-px w-full bg-[#2E2E2E] mb-3" />
              
              <div className="flex justify-between items-center">
                <div className="text-[12px] text-[#A0A0A0] font-mono">Client: <span className="text-white font-bold">{item.client}</span></div>
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-[#00E676] mr-1" />
                  <span className="text-[10px] font-bold text-[#00E676] uppercase tracking-widest">{item.status}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
