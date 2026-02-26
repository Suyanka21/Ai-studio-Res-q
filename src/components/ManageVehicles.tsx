import { motion } from 'motion/react';
import { ArrowLeft, Car, Plus, Trash2 } from 'lucide-react';

export default function ManageVehicles({ onBack }: { onBack: () => void }) {
  const vehicles = [
    { id: 1, make: 'Toyota', model: 'Hilux', plate: 'KCA 123A', color: 'Silver', isDefault: true },
    { id: 2, make: 'Subaru', model: 'Outback', plate: 'KDB 456B', color: 'Blue', isDefault: false },
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
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase">Vehicles</h1>
      </div>

      <div className="flex-1 flex flex-col space-y-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="glass-card rounded-2xl p-4 relative overflow-hidden">
            {vehicle.isDefault && (
              <div className="absolute top-0 right-0 bg-[#FFA500]/20 text-[#FFA500] text-[10px] font-bold px-3 py-1 rounded-bl-xl border-b border-l border-[#FFA500]/30 uppercase tracking-widest">
                Default
              </div>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 metal-sunken rounded-full flex items-center justify-center mr-4 shadow-[inset_0_0_10px_rgba(255,165,0,0.2)]">
                  <Car className="w-6 h-6 text-[#FFA500]" />
                </div>
                <div>
                  <div className="text-[16px] font-bold text-white">{vehicle.make} {vehicle.model}</div>
                  <div className="text-[12px] text-[#A0A0A0] mt-1">{vehicle.plate} • {vehicle.color}</div>
                </div>
              </div>
              <button className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center active:metal-sunken transition-all border border-[#FF3D3D]/20">
                <Trash2 className="w-4 h-4 text-[#FF3D3D]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 shrink-0">
        <button className="w-full h-[80px] metal-extruded rounded-2xl font-bold text-[18px] text-[#FFA500] uppercase tracking-widest flex items-center justify-center active:metal-sunken transition-all text-glow-voltage">
          <Plus className="w-6 h-6 mr-3" />
          Add New Vehicle
        </button>
      </div>
    </motion.div>
  );
}
