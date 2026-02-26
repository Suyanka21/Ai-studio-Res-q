import { motion } from 'motion/react';
import { User, Car, CreditCard, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';

export default function Profile({ onBack, onNavigate }: { onBack: () => void, onNavigate?: (screen: string) => void }) {
  const menuItems = [
    { icon: User, label: 'Account Details', id: 'account' },
    { icon: CreditCard, label: 'Payment Methods', id: 'payment' },
    { icon: Car, label: 'Vehicles', id: 'vehicles' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: Shield, label: 'Privacy', id: 'privacy' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-24 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-8 shrink-0">
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Profile</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-6">
        {/* User Info Card */}
        <div className="glass-card rounded-3xl p-6 flex items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFA500] opacity-5 rounded-full blur-3xl -mr-10 -mt-10" />
          <div className="w-16 h-16 rounded-full metal-sunken border border-[#FFA500]/30 flex items-center justify-center mr-4 shadow-[inset_0_0_15px_rgba(255,165,0,0.2)]">
            <User className="w-8 h-8 text-[#FFA500]" />
          </div>
          <div className="relative z-10">
            <div className="text-[20px] font-bold text-white tracking-wide">John Doe</div>
            <div className="text-[12px] text-[#A0A0A0] mt-1">+254 712 345 678</div>
            <div className="text-[12px] text-[#A0A0A0]">john.doe@example.com</div>
          </div>
        </div>

        {/* Settings List */}
        <div className="space-y-3">
          {menuItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate && onNavigate(item.id)}
              className="w-full metal-extruded rounded-2xl p-4 flex items-center justify-between active:metal-sunken transition-all"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 metal-sunken rounded-full flex items-center justify-center mr-4">
                  <item.icon className="w-5 h-5 text-[#FFA500]" />
                </div>
                <span className="text-[16px] font-bold text-white">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
            </button>
          ))}
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
