import { Home, Clock, Wallet, User } from 'lucide-react';

type Tab = 'dashboard' | 'history' | 'wallet' | 'profile';

export default function BottomNav({ currentTab, onNavigate }: { currentTab: Tab, onNavigate: (tab: Tab) => void }) {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'history', icon: Clock, label: 'History' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' },
    { id: 'profile', icon: User, label: 'Profile' },
  ] as const;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[#0A0A0A] border-t border-[#2E2E2E] flex items-center justify-around px-2 z-50">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
              isActive 
                ? 'metal-sunken text-[#FFA500] shadow-[inset_0_0_15px_rgba(255,165,0,0.2)]' 
                : 'text-[#6B6B6B] hover:text-[#A0A0A0]'
            }`}
          >
            <Icon className={`w-6 h-6 mb-1 ${isActive ? 'drop-shadow-[0_0_8px_#FFA500]' : ''}`} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
