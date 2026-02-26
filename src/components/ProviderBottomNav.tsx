import { Wrench, Wallet, MapPin, User } from 'lucide-react';

type ProviderTab = 'provider_dashboard' | 'provider_earnings' | 'provider_history' | 'provider_profile';

export default function ProviderBottomNav({ currentTab, onNavigate }: { currentTab: ProviderTab, onNavigate: (tab: ProviderTab) => void }) {
  const tabs = [
    { id: 'provider_dashboard', icon: Wrench, label: 'Dash' },
    { id: 'provider_earnings', icon: Wallet, label: 'Earn' },
    { id: 'provider_history', icon: MapPin, label: 'Hist' },
    { id: 'provider_profile', icon: User, label: 'Prof' },
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
