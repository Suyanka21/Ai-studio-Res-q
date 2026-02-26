import { motion } from 'motion/react';
import { ArrowLeft, Phone, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

export default function ProviderSupport({ onBack }: { onBack: () => void }) {
  const faqs = [
    { q: 'How do I update my vehicle documents?', a: 'Go to Profile > Required Documents and upload the new files.' },
    { q: 'When do I get paid?', a: 'Earnings are processed weekly on Tuesdays.' },
    { q: 'What if a client is unresponsive?', a: 'Wait 10 minutes at the location, then contact dispatch.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen w-full bg-[#0A0A0A] flex flex-col font-sans p-6 pb-24"
    >
      <div className="flex items-center mb-8 mt-8">
        <button onClick={onBack} className="w-12 h-12 metal-extruded rounded-full flex items-center justify-center mr-4 active:metal-sunken transition-all">
          <ArrowLeft className="w-6 h-6 text-[#A0A0A0]" />
        </button>
        <div>
          <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Partner Support</h1>
          <p className="text-[12px] text-[#A0A0A0] font-mono tracking-widest uppercase">Help Center</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <button className="w-full p-4 metal-extruded rounded-2xl flex items-center justify-between active:metal-sunken transition-all border border-[#2E2E2E]">
          <div className="flex items-center">
            <div className="w-12 h-12 metal-sunken rounded-full flex items-center justify-center mr-4 border border-[#2E2E2E]">
              <Phone className="w-6 h-6 text-[#FFA500] drop-shadow-[0_0_8px_#FFA500]" />
            </div>
            <div className="text-left">
              <div className="text-[16px] font-bold text-white uppercase tracking-wide">Contact Dispatch</div>
              <div className="text-[12px] text-[#A0A0A0] font-mono mt-1">24/7 Priority Line</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
        </button>

        <button className="w-full p-4 metal-extruded rounded-2xl flex items-center justify-between active:metal-sunken transition-all border border-[#2E2E2E]">
          <div className="flex items-center">
            <div className="w-12 h-12 metal-sunken rounded-full flex items-center justify-center mr-4 border border-[#2E2E2E]">
              <AlertTriangle className="w-6 h-6 text-[#FF3D3D] drop-shadow-[0_0_8px_#FF3D3D]" />
            </div>
            <div className="text-left">
              <div className="text-[16px] font-bold text-white uppercase tracking-wide">Report Issue</div>
              <div className="text-[12px] text-[#A0A0A0] font-mono mt-1">App or Job Problems</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
        </button>
      </div>

      <h2 className="text-[14px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-4">Provider FAQs</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-4 border-t border-t-white/10 shadow-lg">
            <div className="flex items-start mb-2">
              <FileText className="w-4 h-4 text-[#FFA500] mr-2 mt-0.5 shrink-0" />
              <h3 className="text-[14px] font-bold text-white">{faq.q}</h3>
            </div>
            <p className="text-[12px] text-[#A0A0A0] pl-6">{faq.a}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
