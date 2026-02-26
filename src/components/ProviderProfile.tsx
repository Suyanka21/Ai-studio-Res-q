import { motion } from 'motion/react';
import { User, FileText, ShieldCheck, LogOut, ChevronRight, Settings, HelpCircle } from 'lucide-react';

export default function ProviderProfile({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  const documents = [
    { id: 'license', label: 'Driving License', status: 'Verified', color: '#00E676' },
    { id: 'insurance', label: 'Vehicle Insurance', status: 'Verified', color: '#00E676' },
    { id: 'registration', label: 'Vehicle Registration', status: 'Pending', color: '#FFA500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-24 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-8 shrink-0">
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Provider Profile</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        {/* Provider Info Card */}
        <div className="glass-card rounded-3xl p-6 flex items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFA500] opacity-5 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="w-16 h-16 rounded-full metal-sunken border border-[#FFA500]/30 flex items-center justify-center mr-4 shadow-[inset_0_0_15px_rgba(255,165,0,0.2)]">
            <User className="w-8 h-8 text-[#FFA500]" />
          </div>
          <div className="relative z-10">
            <div className="text-[20px] font-bold text-white tracking-wide">Michael Kiprop</div>
            <div className="text-[12px] text-[#A0A0A0] mt-1">ID: RES-P-12345</div>
            <div className="flex items-center mt-1">
              <ShieldCheck className="w-4 h-4 text-[#00E676] mr-1" />
              <span className="text-[12px] text-[#00E676] uppercase tracking-widest">Verified Partner</span>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div>
          <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest mb-3 ml-2">Required Documents</div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <button 
                key={doc.id}
                className="w-full metal-extruded rounded-2xl p-4 flex items-center justify-between active:metal-sunken transition-all"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-4">
                    <FileText className="w-5 h-5 text-[#A0A0A0]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[14px] font-bold text-white">{doc.label}</div>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: doc.color }}>
                      {doc.status}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div>
          <div className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest mb-3 ml-2">Account Settings</div>
          <button className="w-full metal-extruded rounded-2xl p-4 flex items-center justify-between active:metal-sunken transition-all mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-4">
                <Settings className="w-5 h-5 text-[#FFA500]" />
              </div>
              <span className="text-[14px] font-bold text-white">App Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
          </button>
          
          <button 
            onClick={() => onNavigate?.('provider_support')}
            className="w-full metal-extruded rounded-2xl p-4 flex items-center justify-between active:metal-sunken transition-all mb-3"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-4">
                <HelpCircle className="w-5 h-5 text-[#FFA500]" />
              </div>
              <span className="text-[14px] font-bold text-white">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
          </button>
        </div>

        {/* Logout Button */}
        <div className="pt-6 mt-auto">
          <button className="w-full h-[60px] metal-extruded rounded-2xl flex items-center justify-center active:metal-sunken transition-all border border-[#FF3D3D]/20">
            <LogOut className="w-5 h-5 text-[#FF3D3D] mr-3" />
            <span className="text-[16px] font-bold text-[#FF3D3D] uppercase tracking-widest text-glow-sos">Log Out</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
