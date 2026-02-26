import { motion } from 'motion/react';
import { Wallet as WalletIcon, Plus, ArrowDownToLine, CreditCard, Smartphone, Clock } from 'lucide-react';

export default function Wallet() {
  const transactions = [
    { id: 1, type: 'Top Up', amount: '+ KES 5,000', date: 'Today, 10:42 AM', isCredit: true },
    { id: 2, type: 'Flatbed Tow', amount: '- KES 6,800', date: 'Yesterday, 14:20 PM', isCredit: false },
    { id: 3, type: 'Top Up', amount: '+ KES 2,000', date: 'Feb 18, 09:15 AM', isCredit: true },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-24 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-8 shrink-0">
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Wallet</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        {/* Balance Card */}
        <div className="glass-card rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFA500] opacity-10 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="relative z-10">
            <div className="text-[12px] text-[#A0A0A0] uppercase tracking-widest mb-2">Available Balance</div>
            <div className="text-[40px] font-bold text-white tracking-tight mb-6">
              <span className="text-[24px] text-[#FFA500] mr-2">KES</span>
              12,450
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 py-3 metal-extruded rounded-xl flex items-center justify-center text-[#FFA500] font-bold text-[14px] uppercase tracking-widest active:metal-sunken transition-all text-glow-voltage">
                <Plus className="w-5 h-5 mr-2" /> Top Up
              </button>
              <button className="flex-1 py-3 metal-extruded rounded-xl flex items-center justify-center text-[#A0A0A0] font-bold text-[14px] uppercase tracking-widest active:metal-sunken transition-all">
                <ArrowDownToLine className="w-5 h-5 mr-2" /> Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest mb-3 ml-2">Linked Methods</div>
          <div className="space-y-3">
            <div className="metal-sunken rounded-2xl p-4 flex items-center justify-between border border-[#00E676]/20">
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 text-[#00E676] mr-4" />
                <div>
                  <div className="text-[14px] font-bold text-white">M-Pesa</div>
                  <div className="text-[12px] text-[#A0A0A0]">+254 712 *** 678</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#00E676] uppercase tracking-widest px-2 py-1 bg-[#00E676]/10 rounded-full">Primary</span>
            </div>
            <div className="metal-extruded rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-[#A0A0A0] mr-4" />
                <div>
                  <div className="text-[14px] font-bold text-white">Visa</div>
                  <div className="text-[12px] text-[#A0A0A0]">**** **** **** 4242</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-3 ml-2 mr-2">
            <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest">Recent Activity</div>
            <button className="text-[10px] font-bold text-[#FFA500] uppercase tracking-widest">View All</button>
          </div>
          <div className="glass-card rounded-2xl p-4 space-y-4">
            {transactions.map((tx, idx) => (
              <div key={tx.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-4 h-4 text-[#A0A0A0]" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white">{tx.type}</div>
                      <div className="text-[12px] text-[#A0A0A0]">{tx.date}</div>
                    </div>
                  </div>
                  <div className={`text-[14px] font-bold ${tx.isCredit ? 'text-[#00E676]' : 'text-white'}`}>
                    {tx.amount}
                  </div>
                </div>
                {idx < transactions.length - 1 && <div className="h-px bg-[#2E2E2E] mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
