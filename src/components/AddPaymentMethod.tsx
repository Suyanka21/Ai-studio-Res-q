import { motion } from 'motion/react';
import { ArrowLeft, CreditCard, Smartphone, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function AddPaymentMethod({ onBack }: { onBack: () => void }) {
  const [method, setMethod] = useState('mpesa');

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-8 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-8 shrink-0">
        <button onClick={onBack} className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center mr-4 active:metal-sunken transition-all">
          <ArrowLeft className="w-5 h-5 text-[#FFA500]" />
        </button>
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Payment</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setMethod('mpesa')}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 ${
              method === 'mpesa' 
                ? 'metal-sunken text-[#00E676] shadow-[inset_0_0_15px_rgba(0,230,118,0.3)] border border-[#00E676]/30' 
                : 'metal-extruded text-[#A0A0A0]'
            }`}
          >
            <Smartphone className="w-8 h-8 mb-3" />
            <span className="text-[14px] font-bold uppercase tracking-widest">M-Pesa</span>
          </button>
          
          <button 
            onClick={() => setMethod('card')}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 ${
              method === 'card' 
                ? 'metal-sunken text-[#FFA500] shadow-[inset_0_0_15px_rgba(255,165,0,0.3)] border border-[#FFA500]/30' 
                : 'metal-extruded text-[#A0A0A0]'
            }`}
          >
            <CreditCard className="w-8 h-8 mb-3" />
            <span className="text-[14px] font-bold uppercase tracking-widest">Card</span>
          </button>
        </div>

        <div className="glass-card rounded-2xl p-6 mt-4">
          {method === 'mpesa' ? (
            <div>
              <label className="block text-[12px] font-bold text-white mb-2 uppercase tracking-widest">M-Pesa Number</label>
              <div className="metal-sunken rounded-xl p-4 flex items-center">
                <span className="text-[#A0A0A0] mr-2">+254</span>
                <input 
                  type="tel" 
                  placeholder="712 345 678" 
                  className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-white placeholder-[#6B6B6B]"
                />
              </div>
              <p className="text-[12px] text-[#A0A0A0] mt-4">You will receive a prompt on your phone to enter your PIN when a payment is required.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-white mb-2 uppercase tracking-widest">Card Number</label>
                <div className="metal-sunken rounded-xl p-4">
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-white placeholder-[#6B6B6B] tracking-widest"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-white mb-2 uppercase tracking-widest">Expiry</label>
                  <div className="metal-sunken rounded-xl p-4">
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-white placeholder-[#6B6B6B]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-white mb-2 uppercase tracking-widest">CVC</label>
                  <div className="metal-sunken rounded-xl p-4">
                    <input 
                      type="text" 
                      placeholder="123" 
                      className="w-full bg-transparent border-none outline-none text-[16px] font-bold text-white placeholder-[#6B6B6B]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 shrink-0">
        <button className="w-full h-[80px] metal-extruded rounded-2xl font-bold text-[18px] text-[#FFA500] uppercase tracking-widest flex items-center justify-center active:metal-sunken transition-all text-glow-voltage">
          <CheckCircle className="w-6 h-6 mr-3" />
          Save Payment Method
        </button>
      </div>
    </motion.div>
  );
}
