import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ArrowLeft, MapPin, Droplet, Battery, Wrench, Disc, Activity, Stethoscope, 
  AlertTriangle, CheckCircle, Circle, Info, Phone, User, Car, Clock
} from 'lucide-react';

// --- Reusable Metal-morphic Components ---

const OptionCard = ({ 
  icon: Icon, label, subtitle, selected, onClick, activeColor = '#FFA500', activeGlow = 'reactor-glow-voltage' 
}: any) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 w-full ${
      selected 
        ? `metal-sunken ${activeGlow}` 
        : 'metal-extruded'
    }`}
    style={selected ? { color: activeColor, borderColor: `${activeColor}40` } : { color: '#A0A0A0' }}
  >
    <Icon className="w-8 h-8 mb-2" />
    <span className="text-[14px] font-bold">{label}</span>
    {subtitle && <span className="text-[10px] mt-1 opacity-70 text-center">{subtitle}</span>}
  </button>
);

const MetalInput = ({ icon: Icon, label, placeholder, type = "text", value, onChange, isTextArea = false }: any) => (
  <div className="mb-4">
    {label && <label className="block text-[12px] font-bold text-white mb-2">{label}</label>}
    <div className="metal-sunken rounded-xl p-4 flex items-start">
      {Icon && <Icon className="w-5 h-5 text-[#6B6B6B] mr-3 mt-0.5 shrink-0" />}
      {isTextArea ? (
        <textarea 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-none outline-none text-[14px] text-white placeholder-[#6B6B6B] resize-none h-24"
        />
      ) : (
        <input 
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-none outline-none text-[14px] text-white placeholder-[#6B6B6B]"
        />
      )}
    </div>
  </div>
);

const ProgressIndicator = () => (
  <div className="flex items-center justify-between mb-8 glass-card p-4 rounded-2xl">
    <div className="flex items-center text-[#FFA500] text-[12px] font-bold uppercase tracking-widest">
      <CheckCircle className="w-4 h-4 mr-2" /> Details
    </div>
    <div className="h-px bg-[#2E2E2E] flex-1 mx-4" />
    <div className="flex items-center text-[#6B6B6B] text-[12px] font-bold uppercase tracking-widest">
      <Circle className="w-4 h-4 mr-2" /> Location
    </div>
    <div className="h-px bg-[#2E2E2E] flex-1 mx-4" />
    <div className="flex items-center text-[#6B6B6B] text-[12px] font-bold uppercase tracking-widest">
      <Circle className="w-4 h-4 mr-2" /> Confirm
    </div>
  </div>
);

// --- Main Form Component ---

export default function RequestForm({ service, onConfirm, onCancel }: { service: string, onConfirm: () => void, onCancel: () => void }) {
  // Generic State
  const [location, setLocation] = useState('Waiyaki Way, Westlands');
  const [notes, setNotes] = useState('');

  // Fuel State
  const [fuelType, setFuelType] = useState('Petrol');
  const [fuelAmount, setFuelAmount] = useState('20L');

  // Battery State
  const [urgency, setUrgency] = useState('Standard');

  // Towing State
  const [dropoff, setDropoff] = useState('');
  const [isDrivable, setIsDrivable] = useState(false);

  // Tire State
  const [tireIssue, setTireIssue] = useState('Flat');
  const [hasSpare, setHasSpare] = useState(true);

  // Diagnostic State
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [serviceType, setServiceType] = useState('On-Site');

  // Medical State
  const [triage, setTriage] = useState('URGENT');

  const toggleSymptom = (sym: string) => {
    setSymptoms(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
  };

  const renderFuelForm = () => (
    <>
      <div className="flex items-center mb-6">
        <Droplet className="w-10 h-10 text-[#00E676] mr-4 drop-shadow-[0_0_10px_#00E676]" />
        <div>
          <h2 className="text-[24px] font-bold text-white">Fuel Delivery</h2>
          <p className="text-[14px] text-[#A0A0A0]">We'll bring fuel to your location</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <OptionCard icon={Droplet} label="Petrol" selected={fuelType === 'Petrol'} onClick={() => setFuelType('Petrol')} activeColor="#00E676" activeGlow="shadow-[inset_0_0_15px_rgba(0,230,118,0.3)]" />
        <OptionCard icon={Droplet} label="Diesel" selected={fuelType === 'Diesel'} onClick={() => setFuelType('Diesel')} activeColor="#00E676" activeGlow="shadow-[inset_0_0_15px_rgba(0,230,118,0.3)]" />
      </div>

      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">Amount</label>
        <div className="flex justify-between gap-2">
          {['5L', '10L', '20L', '40L', '60L'].map(amt => (
            <button
              key={amt}
              onClick={() => setFuelAmount(amt)}
              className={`flex-1 py-3 rounded-xl text-[12px] font-bold transition-all ${
                fuelAmount === amt ? 'metal-sunken text-[#00E676] shadow-[inset_0_0_10px_rgba(0,230,118,0.3)]' : 'metal-extruded text-[#A0A0A0]'
              }`}
            >
              {amt}
            </button>
          ))}
        </div>
      </div>

      <MetalInput icon={MapPin} label="Delivery Location" value={location} onChange={(e: any) => setLocation(e.target.value)} />
      <MetalInput label="Delivery Notes (Optional)" placeholder="e.g., Call when you arrive" isTextArea value={notes} onChange={(e: any) => setNotes(e.target.value)} />

      <div className="glass-card rounded-2xl p-5 mb-8">
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-2"><span>Fuel ({fuelAmount} {fuelType})</span><span>KES 3,600</span></div>
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-4"><span>Delivery fee</span><span>KES 500</span></div>
        <div className="h-px bg-white/10 mb-4" />
        <div className="flex justify-between text-[18px] font-bold text-[#FFA500]"><span>Total</span><span className="text-glow-voltage">KES 4,100</span></div>
      </div>
    </>
  );

  const renderBatteryForm = () => (
    <>
      <div className="flex items-center mb-6">
        <Battery className="w-10 h-10 text-[#FFA500] mr-4 drop-shadow-[0_0_10px_#FFA500]" />
        <div>
          <h2 className="text-[24px] font-bold text-white">Battery Jumpstart</h2>
          <p className="text-[14px] text-[#A0A0A0]">Fast response for dead batteries</p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 mb-6 flex items-center border-l-2 border-l-[#FFA500]">
        <Clock className="w-5 h-5 text-[#FFA500] mr-3" />
        <span className="text-[14px] text-[#FFA500]">Usually 15-20 minutes</span>
      </div>

      <MetalInput icon={MapPin} label="Your Location" value={location} onChange={(e: any) => setLocation(e.target.value)} />

      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">Service Priority</label>
        <div className="space-y-3">
          <OptionCard icon={CheckCircle} label="Normal Service" subtitle="Standard response time" selected={urgency === 'Standard'} onClick={() => setUrgency('Standard')} activeColor="#00E676" activeGlow="shadow-[inset_0_0_15px_rgba(0,230,118,0.3)]" />
          <OptionCard icon={AlertTriangle} label="Priority Service" subtitle="Faster response (+KES 500)" selected={urgency === 'Urgent'} onClick={() => setUrgency('Urgent')} />
          <OptionCard icon={AlertTriangle} label="Express Service" subtitle="Immediate dispatch (+KES 1,000)" selected={urgency === 'Emergency'} onClick={() => setUrgency('Emergency')} activeColor="#FF3D3D" activeGlow="reactor-glow-sos" />
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5 mb-8">
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-2"><span>Base service</span><span>KES 1,500</span></div>
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-4"><span>Priority fee</span><span>{urgency === 'Standard' ? 'KES 0' : urgency === 'Urgent' ? 'KES 500' : 'KES 1,000'}</span></div>
        <div className="h-px bg-white/10 mb-4" />
        <div className="flex justify-between text-[18px] font-bold text-[#FFA500]"><span>Total</span><span className="text-glow-voltage">KES {urgency === 'Standard' ? '1,500' : urgency === 'Urgent' ? '2,000' : '2,500'}</span></div>
      </div>
    </>
  );

  const renderTowingForm = () => (
    <>
      <div className="flex items-center mb-6">
        <Wrench className="w-10 h-10 text-[#FFA500] mr-4 drop-shadow-[0_0_10px_#FFA500]" />
        <div>
          <h2 className="text-[24px] font-bold text-white">Flatbed Towing</h2>
          <p className="text-[14px] text-[#A0A0A0]">Professional towing for any vehicle</p>
        </div>
      </div>

      <MetalInput icon={MapPin} label="Pickup Location" value={location} onChange={(e: any) => setLocation(e.target.value)} />
      <MetalInput icon={MapPin} label="Drop-off Location" placeholder="Where should we tow your vehicle?" value={dropoff} onChange={(e: any) => setDropoff(e.target.value)} />
      
      <MetalInput icon={Car} label="Vehicle Information" placeholder="License Plate (e.g. KXX 123A)" />
      <MetalInput label="What happened?" placeholder="e.g., Engine failure, flat tire" isTextArea value={notes} onChange={(e: any) => setNotes(e.target.value)} />

      <div className="mb-6 space-y-4">
        <button onClick={() => setIsDrivable(!isDrivable)} className="flex items-center w-full">
          <div className={`w-6 h-6 rounded flex items-center justify-center mr-3 transition-all ${isDrivable ? 'metal-sunken text-[#FFA500] reactor-glow-voltage border border-[#FFA500]/50' : 'metal-extruded'}`}>
            {isDrivable && <CheckCircle className="w-4 h-4" />}
          </div>
          <span className="text-[14px] text-white">Vehicle is drivable (can be loaded without winch)</span>
        </button>
      </div>

      <div className="glass-card rounded-2xl p-5 mb-8">
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-2"><span>Base towing fee</span><span>KES 5,000</span></div>
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-4"><span>Distance (Est. 12km)</span><span>KES 1,800</span></div>
        <div className="h-px bg-white/10 mb-4" />
        <div className="flex justify-between text-[18px] font-bold text-[#FFA500]"><span>Estimated total</span><span className="text-glow-voltage">KES 6,800</span></div>
        <p className="text-[10px] text-[#6B6B6B] mt-2 text-center">Final price confirmed by provider</p>
      </div>
    </>
  );

  const renderTireForm = () => (
    <>
      <div className="flex items-center mb-6">
        <Disc className="w-10 h-10 text-[#9C27B0] mr-4 drop-shadow-[0_0_10px_#9C27B0]" />
        <div>
          <h2 className="text-[24px] font-bold text-white">Tire Repair</h2>
          <p className="text-[14px] text-[#A0A0A0]">Flat tire? We'll get you rolling again</p>
        </div>
      </div>

      <MetalInput icon={MapPin} label="Your Location" value={location} onChange={(e: any) => setLocation(e.target.value)} />

      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">What happened?</label>
        <div className="grid grid-cols-2 gap-4">
          <OptionCard icon={Disc} label="Flat Tire" subtitle="Puncture or leak" selected={tireIssue === 'Flat'} onClick={() => setTireIssue('Flat')} activeColor="#9C27B0" activeGlow="shadow-[inset_0_0_15px_rgba(156,39,176,0.4)]" />
          <OptionCard icon={AlertTriangle} label="Tire Burst" subtitle="Complete blowout" selected={tireIssue === 'Burst'} onClick={() => setTireIssue('Burst')} activeColor="#9C27B0" activeGlow="shadow-[inset_0_0_15px_rgba(156,39,176,0.4)]" />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">Spare Tire Available?</label>
        <div className="flex gap-4">
          <button onClick={() => setHasSpare(true)} className={`flex-1 py-4 rounded-xl font-bold transition-all ${hasSpare ? 'metal-sunken text-[#9C27B0] shadow-[inset_0_0_15px_rgba(156,39,176,0.4)] border border-[#9C27B0]/30' : 'metal-extruded text-[#A0A0A0]'}`}>Yes</button>
          <button onClick={() => setHasSpare(false)} className={`flex-1 py-4 rounded-xl font-bold transition-all ${!hasSpare ? 'metal-sunken text-[#9C27B0] shadow-[inset_0_0_15px_rgba(156,39,176,0.4)] border border-[#9C27B0]/30' : 'metal-extruded text-[#A0A0A0]'}`}>No</button>
        </div>
        {!hasSpare && <p className="text-[12px] text-[#A0A0A0] mt-2">Provider will bring a replacement tire (additional cost)</p>}
      </div>

      <div className="glass-card rounded-2xl p-5 mb-8">
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-2"><span>Tire repair service</span><span>KES 2,000</span></div>
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-4"><span>Service call</span><span>KES 500</span></div>
        {!hasSpare && <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-4"><span>Replacement tire</span><span>From KES 3,500</span></div>}
        <div className="h-px bg-white/10 mb-4" />
        <div className="flex justify-between text-[18px] font-bold text-[#FFA500]"><span>Estimated total</span><span className="text-glow-voltage">KES {hasSpare ? '2,500' : '6,000+'}</span></div>
      </div>
    </>
  );

  const renderDiagnosticForm = () => (
    <>
      <div className="flex items-center mb-6">
        <Activity className="w-10 h-10 text-[#2196F3] mr-4 drop-shadow-[0_0_10px_#2196F3]" />
        <div>
          <h2 className="text-[24px] font-bold text-white">Vehicle Diagnostics</h2>
          <p className="text-[14px] text-[#A0A0A0]">Professional diagnostic check</p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 mb-6 flex items-center border-l-2 border-l-[#2196F3]">
        <Info className="w-5 h-5 text-[#2196F3] mr-3" />
        <span className="text-[14px] text-white">OBD-II scan + visual inspection included</span>
      </div>

      <MetalInput icon={MapPin} label="Service Location" value={location} onChange={(e: any) => setLocation(e.target.value)} />

      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">What are you experiencing?</label>
        <div className="grid grid-cols-2 gap-3">
          {['Check Engine Light', 'Strange Noises', 'Performance Issues', 'Warning Lights', 'Rough Idling', 'Other'].map(sym => (
            <button
              key={sym}
              onClick={() => toggleSymptom(sym)}
              className={`p-3 rounded-xl text-[12px] font-bold text-left transition-all ${
                symptoms.includes(sym) ? 'metal-sunken text-[#2196F3] shadow-[inset_0_0_10px_rgba(33,150,243,0.3)] border border-[#2196F3]/30' : 'metal-extruded text-[#A0A0A0]'
              }`}
            >
              {sym}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">Service Type</label>
        <div className="grid grid-cols-2 gap-4">
          <OptionCard icon={Car} label="On-Site" subtitle="KES 2,500" selected={serviceType === 'On-Site'} onClick={() => setServiceType('On-Site')} activeColor="#2196F3" activeGlow="shadow-[inset_0_0_15px_rgba(33,150,243,0.4)]" />
          <OptionCard icon={Wrench} label="Workshop" subtitle="KES 2,000" selected={serviceType === 'Workshop'} onClick={() => setServiceType('Workshop')} activeColor="#2196F3" activeGlow="shadow-[inset_0_0_15px_rgba(33,150,243,0.4)]" />
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5 mb-8">
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-4"><span>Diagnostic service</span><span>KES {serviceType === 'On-Site' ? '2,500' : '2,000'}</span></div>
        <div className="h-px bg-white/10 mb-4" />
        <div className="flex justify-between text-[18px] font-bold text-[#FFA500]"><span>Total</span><span className="text-glow-voltage">KES {serviceType === 'On-Site' ? '2,500' : '2,000'}</span></div>
      </div>
    </>
  );

  const renderMedicalForm = () => (
    <>
      <div className="flex items-center mb-6">
        <Stethoscope className="w-10 h-10 text-[#FF3D3D] mr-4 drop-shadow-[0_0_10px_#FF3D3D]" />
        <div>
          <h2 className="text-[24px] font-bold text-white">Ambulance Service</h2>
          <p className="text-[14px] text-[#A0A0A0]">Emergency medical response</p>
        </div>
      </div>

      <div className="glass-card rounded-xl p-4 mb-6 flex items-start border-l-4 border-l-[#FF3D3D] bg-[#FF3D3D]/10">
        <AlertTriangle className="w-6 h-6 text-[#FF3D3D] mr-3 shrink-0" />
        <div>
          <span className="text-[14px] font-bold text-white block mb-1">For life-threatening emergencies, call 999 immediately</span>
          <button className="text-[14px] text-[#FF3D3D] font-bold underline">Call 999 now</button>
        </div>
      </div>

      <MetalInput icon={MapPin} label="Pickup Location" value={location} onChange={(e: any) => setLocation(e.target.value)} />
      
      <div className="mb-6">
        <label className="block text-[14px] font-bold text-white mb-3">Emergency Severity</label>
        <div className="space-y-3">
          <OptionCard icon={AlertTriangle} label="CRITICAL" subtitle="Life-threatening (Immediate dispatch)" selected={triage === 'CRITICAL'} onClick={() => setTriage('CRITICAL')} activeColor="#FF3D3D" activeGlow="reactor-glow-sos" />
          <OptionCard icon={AlertTriangle} label="URGENT" subtitle="Serious but stable (Priority dispatch)" selected={triage === 'URGENT'} onClick={() => setTriage('URGENT')} activeColor="#FFA500" activeGlow="reactor-glow-voltage" />
          <OptionCard icon={CheckCircle} label="NON-EMERGENCY" subtitle="Medical transport (Standard dispatch)" selected={triage === 'NON-EMERGENCY'} onClick={() => setTriage('NON-EMERGENCY')} activeColor="#00E676" activeGlow="shadow-[inset_0_0_15px_rgba(0,230,118,0.3)]" />
        </div>
      </div>

      <MetalInput icon={User} label="Patient Name" placeholder="Full name" />
      <MetalInput label="Condition Details" placeholder="Describe the medical emergency clearly..." isTextArea value={notes} onChange={(e: any) => setNotes(e.target.value)} />

      <div className="glass-card rounded-2xl p-5 mb-8">
        <div className="flex justify-between text-[14px] text-[#A0A0A0] mb-2"><span>Base ambulance service</span><span>KES 3,500</span></div>
        {triage === 'CRITICAL' && <div className="flex justify-between text-[14px] text-[#FF3D3D] mb-4"><span>Critical priority fee</span><span>KES 1,500</span></div>}
        <div className="h-px bg-white/10 mb-4" />
        <div className="flex justify-between text-[18px] font-bold text-[#FFA500]"><span>Estimated total</span><span className="text-glow-voltage">KES {triage === 'CRITICAL' ? '5,000' : '3,500'}</span></div>
      </div>
    </>
  );

  const renderFormContent = () => {
    switch (service) {
      case 'fuel': return renderFuelForm();
      case 'battery': return renderBatteryForm();
      case 'towing': return renderTowingForm();
      case 'tire': return renderTireForm();
      case 'diagnostic': return renderDiagnosticForm();
      case 'medical': return renderMedicalForm();
      default: return renderTowingForm();
    }
  };

  const getButtonColor = () => {
    if (service === 'medical') return 'text-[#FF3D3D] text-glow-sos';
    return 'text-[#FFA500] text-glow-voltage';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-12 pb-8 px-6 overflow-y-auto font-sans"
    >
      <div className="flex items-center mb-6 shrink-0">
        <button onClick={onCancel} className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center mr-4 active:metal-sunken transition-all">
          <ArrowLeft className="w-5 h-5 text-[#FFA500]" />
        </button>
        <h1 className="text-[20px] font-bold text-white tracking-wide uppercase">Service Request</h1>
      </div>

      <ProgressIndicator />

      <div className="flex-1 flex flex-col">
        {renderFormContent()}
      </div>

      {/* Massive Extruded Reactor Button */}
      <div className="mt-4 shrink-0 pb-6">
        <button 
          onClick={onConfirm}
          className="w-full h-[80px] metal-extruded rounded-2xl font-bold text-[18px] uppercase tracking-widest active:metal-sunken transition-all flex items-center justify-center relative overflow-hidden"
        >
          <span className={`relative z-10 ${getButtonColor()}`}>
            Request {service === 'medical' ? 'Ambulance' : 'Service'} Now
          </span>
        </button>
      </div>
    </motion.div>
  );
}
