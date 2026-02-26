import { motion } from 'motion/react';
import { Wallet, ArrowDownToLine, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export default function ProviderEarnings() {
  const earningsHistory = [
    { id: 'JOB-9921', service: 'Flatbed Tow', date: 'Today, 14:20 PM', amount: 'KES 5,440', status: 'Cleared' },
    { id: 'JOB-9844', service: 'Battery Jump', date: 'Yesterday, 08:30 AM', amount: 'KES 1,200', status: 'Cleared' },
    { id: 'JOB-9102', service: 'Fuel Delivery', date: 'Feb 18, 19:45 PM', amount: 'KES 1,760', status: 'Cleared' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-24 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-8 shrink-0">
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Earnings</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        {/* Balance Card */}
        <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E676] opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="relative z-10">
            <div className="text-[12px] text-[#A0A0A0] uppercase tracking-widest mb-2">Available Balance</div>
            <div className="text-[40px] font-bold text-white tracking-tight mb-6">
              <span className="text-[24px] text-[#00E676] mr-2">KES</span>
              8,400
            </div>
            
            <button className="w-full py-4 metal-extruded rounded-xl flex items-center justify-center text-[#00E676] font-bold text-[16px] uppercase tracking-widest active:metal-sunken transition-all text-glow-safety">
              <ArrowDownToLine className="w-5 h-5 mr-3" /> Withdraw Funds
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="metal-sunken rounded-2xl p-4 border border-[#FFA500]/20">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-4 h-4 text-[#FFA500] mr-2" />
              <span className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Jobs Done</span>
            </div>
            <div className="text-[24px] font-bold text-white">124</div>
          </div>
          <div className="metal-sunken rounded-2xl p-4 border border-[#00E676]/20">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-4 h-4 text-[#00E676] mr-2" />
              <span className="text-[10px] text-[#A0A0A0] uppercase tracking-widest">Accept Rate</span>
            </div>
            <div className="text-[24px] font-bold text-white">98%</div>
          </div>
        </div>

        {/* Earnings History */}
        <div>
          <div className="flex items-center justify-between mb-4 ml-2 mr-2">
            <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest">Recent Earnings</div>
            <button className="text-[10px] font-bold text-[#FFA500] uppercase tracking-widest">View All</button>
          </div>
          <div className="glass-card rounded-2xl p-4 space-y-4">
            {earningsHistory.map((item, idx) => (
              <div key={item.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-4 h-4 text-[#00E676]" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white">{item.service}</div>
                      <div className="text-[12px] text-[#A0A0A0]">{item.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[14px] font-bold text-[#00E676]">{item.amount}</div>
                    <div className="text-[10px] text-[#A0A0A0]">{item.id}</div>
                  </div>
                </div>
                {idx < earningsHistory.length - 1 && <div className="h-px bg-[#2E2E2E] mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
