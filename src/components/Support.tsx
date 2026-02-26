import { motion } from 'motion/react';
import { ArrowLeft, Phone, Mail, MessageCircle, FileText, ChevronRight } from 'lucide-react';

export default function Support({ onBack }: { onBack: () => void }) {
  const faqs = [
    "How do I request a tow?",
    "What are your operating hours?",
    "How is pricing calculated?",
    "Can I cancel a request?"
  ];

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
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Help Center</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-8">
        {/* Contact Options */}
        <div>
          <h2 className="text-[12px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-4">Contact Support</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-6 metal-extruded rounded-2xl active:metal-sunken transition-all">
              <Phone className="w-8 h-8 text-[#00E676] mb-3 drop-shadow-[0_0_8px_#00E676]" />
              <span className="text-[14px] font-bold text-white uppercase tracking-widest">Call Us</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 metal-extruded rounded-2xl active:metal-sunken transition-all">
              <MessageCircle className="w-8 h-8 text-[#FFA500] mb-3 drop-shadow-[0_0_8px_#FFA500]" />
              <span className="text-[14px] font-bold text-white uppercase tracking-widest">Live Chat</span>
            </button>
          </div>
          <button className="w-full mt-4 py-4 metal-extruded rounded-2xl flex items-center justify-center active:metal-sunken transition-all">
            <Mail className="w-5 h-5 text-[#FFA500] mr-3" />
            <span className="text-[14px] font-bold text-white uppercase tracking-widest">Email Support</span>
          </button>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-[12px] font-bold text-[#A0A0A0] uppercase tracking-widest mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <button key={index} className="w-full metal-extruded rounded-2xl p-4 flex items-center justify-between active:metal-sunken transition-all">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-[#6B6B6B] mr-4" />
                  <span className="text-[14px] font-bold text-white text-left">{faq}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
