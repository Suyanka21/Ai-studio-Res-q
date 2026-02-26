import { motion } from 'motion/react';
import { useState } from 'react';
import { AlertTriangle, Wrench, Battery, Stethoscope, Droplet, Disc, User, HeadphonesIcon } from 'lucide-react';

const SERVICES = [
  { id: 'towing', label: 'Towing', icon: Wrench, color: '#FFA500' },
  { id: 'battery', label: 'Battery', icon: Battery, color: '#FFA500' },
  { id: 'medical', label: 'Medical', icon: Stethoscope, color: '#DC143C' },
  { id: 'fuel', label: 'Fuel', icon: Droplet, color: '#4CAF50' },
  { id: 'tire', label: 'Tire', icon: Disc, color: '#9C27B0' },
  { id: 'diagnostic', label: 'Diagnostic', icon: AlertTriangle, color: '#2196F3' },
];

export default function Dashboard({ onDispatch, onSwitchToProvider, onOpenSupport }: { onDispatch: (service: string) => void, onSwitchToProvider: () => void, onOpenSupport: () => void }) {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [sosActive, setSosActive] = useState(false);

  return (
    <div className="relative h-screen w-full bg-map-tactical overflow-hidden flex flex-col">
      {/* Map Background Simulation */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Simulated Route/Streets */}
          <path d="M 100 100 Q 200 150 300 100 T 500 200" fill="none" stroke="rgba(41,182,246,0.2)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 50 300 Q 150 400 250 350 T 450 450" fill="none" stroke="rgba(41,182,246,0.1)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 p-6 flex justify-between items-center mt-8">
        <div className="metal-surface px-4 py-2 rounded-full flex items-center shadow-lg">
          <div className="w-2 h-2 rounded-full bg-safety animate-pulse mr-2 shadow-[0_0_8px_#00E676]" />
          <span className="text-xs font-mono font-bold tracking-wider text-white">SYSTEM ONLINE</span>
        </div>
        <div className="flex space-x-3">
          <button onClick={onOpenSupport} className="w-10 h-10 metal-surface rounded-full flex items-center justify-center active:metal-sunken transition-all">
            <HeadphonesIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="absolute bottom-[80px] left-0 right-0 z-20 pb-4 px-4">
        <div className="glass-panel rounded-[32px] p-6 shadow-2xl relative">
          
          {/* SOS Reactor Button - Positioned absolute to break out of the panel */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="reactor-well">
              <button 
                className="reactor-btn group"
                onPointerDown={() => setSosActive(true)}
                onPointerUp={() => setSosActive(false)}
                onPointerLeave={() => setSosActive(false)}
              >
                <div className="reactor-glow" />
                <span className="relative z-10 font-bold text-white text-xl tracking-widest text-glow-sos">SOS</span>
                {sosActive && (
                  <motion.div 
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-sos rounded-full"
                  />
                )}
              </button>
            </div>
            <span className="mt-2 text-[10px] font-mono text-text-tertiary tracking-[0.2em] uppercase">Emergency</span>
          </div>

          <div className="mt-12 mb-4">
            <h2 className="text-sm font-bold text-white tracking-widest uppercase mb-1">Deploy Assistance</h2>
            <p className="text-xs text-text-secondary font-mono">Select required service unit</p>
          </div>

          {/* Service Selection Grid */}
          <div className="grid grid-cols-3 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = activeService === service.id;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                  className={`relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
                    isActive ? 'metal-sunken' : 'metal-surface hover:bg-surface-raised'
                  }`}
                  style={{ height: '88px' }}
                >
                  <Icon 
                    className={`w-6 h-6 mb-2 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-text-secondary'
                    }`} 
                    style={isActive ? { filter: `drop-shadow(0 0 8px ${service.color})` } : {}}
                  />
                  <span className={`text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-text-tertiary'
                  }`}
                  style={isActive ? { textShadow: `0 0 8px ${service.color}` } : {}}
                  >
                    {service.label}
                  </span>
                  
                  {/* Active Backlight */}
                  {isActive && (
                    <motion.div
                      layoutId="active-backlight"
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                      style={{ 
                        backgroundColor: service.color,
                        boxShadow: `0 -2px 10px ${service.color}`
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <motion.div 
            initial={false}
            animate={{ height: activeService ? 'auto' : 0, opacity: activeService ? 1 : 0, marginTop: activeService ? 24 : 0 }}
            className="overflow-hidden"
          >
            <button 
              onClick={() => onDispatch(activeService!)}
              className="w-full py-4 bg-voltage rounded-2xl font-bold text-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,165,0,0.4)] flex items-center justify-center"
            >
              Confirm Dispatch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Provider Mode Toggle */}
      <button 
        onClick={onSwitchToProvider}
        className="absolute top-8 right-6 text-[10px] font-mono text-text-tertiary uppercase tracking-widest hover:text-white transition-colors z-20"
      >
        [Provider Mode]
      </button>
    </div>
  );
}
