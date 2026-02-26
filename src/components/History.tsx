import { motion } from 'motion/react';
import { Clock, Wrench, Battery, Droplet, CheckCircle } from 'lucide-react';

export default function History() {
  const historyItems = [
    { id: 'REQ-8921', service: 'Flatbed Towing', provider: 'David K.', date: 'Yesterday, 14:20 PM', cost: 'KES 6,800', status: 'Completed', icon: Wrench, color: '#FFA500' },
    { id: 'REQ-8744', service: 'Battery Jumpstart', provider: 'Sarah M.', date: 'Feb 12, 08:30 AM', cost: 'KES 1,500', status: 'Completed', icon: Battery, color: '#FFA500' },
    { id: 'REQ-8102', service: 'Fuel Delivery (10L)', provider: 'John D.', date: 'Jan 28, 19:45 PM', cost: 'KES 2,200', status: 'Completed', icon: Droplet, color: '#4CAF50' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-24 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-8 shrink-0">
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Service History</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-4">
        {historyItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="glass-card rounded-2xl p-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-3 shadow-[inset_0_0_10px_rgba(255,165,0,0.2)]" style={{ boxShadow: `inset 0 0 10px ${item.color}33` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-white">{item.service}</div>
                    <div className="text-[12px] text-[#A0A0A0]">{item.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[16px] font-bold text-white">{item.cost}</div>
                  <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest">{item.id}</div>
                </div>
              </div>
              
              <div className="h-px bg-[#2E2E2E] mb-4" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[12px] text-[#A0A0A0]">
                  <span className="mr-2">Provider:</span>
                  <span className="text-white font-bold">{item.provider}</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-[#00E676]/10 border border-[#00E676]/30 rounded-full">
                  <CheckCircle className="w-3 h-3 text-[#00E676] mr-1" />
                  <span className="text-[10px] font-bold text-[#00E676] uppercase tracking-widest">{item.status}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
