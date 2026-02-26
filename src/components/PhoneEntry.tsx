import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, User, Phone, MapPin } from 'lucide-react';

export default function PhoneEntry({ mode, onBack, onComplete, onSwitchMode }: { mode: 'signin' | 'signup', onBack: () => void, onComplete: () => void, onSwitchMode: () => void }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 9 && agreed && (mode === 'signin' || name.length > 0)) {
      onComplete();
    }
  };

  const isFormValid = phone.length >= 9 && agreed && (mode === 'signin' || name.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-[#0A0A0A] flex flex-col px-6 pt-12 pb-8 overflow-y-auto"
    >
      <div className="flex items-center mb-8">
        <button onClick={onBack} className="w-10 h-10 metal-extruded rounded-full flex items-center justify-center mr-4 active:metal-sunken transition-all">
          <ArrowLeft className="w-5 h-5 text-[#FFA500]" />
        </button>
        <h1 className="text-[24px] font-bold text-white tracking-wide">
          {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h1>
      </div>

      <div className="flex-1 max-w-md mx-auto w-full flex flex-col">
        <div className="mb-8">
          <p className="text-[#A0A0A0] text-[14px]">
            {mode === 'signin' ? 'Sign in to access emergency services' : 'Join 50,000+ drivers using ResQ'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6">
          
          {mode === 'signup' && (
            <div className="relative">
              <label className="block text-[14px] text-white mb-2">Full Name</label>
              <div className={`flex items-center metal-sunken rounded-xl p-4 transition-all duration-300 ${focusedInput === 'name' ? 'reactor-glow-voltage' : ''}`}>
                <User className="text-[#6B6B6B] w-5 h-5 mr-3" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="John Mwangi"
                  className="bg-transparent border-none outline-none text-white text-[16px] w-full placeholder-[#6B6B6B]"
                />
              </div>
            </div>
          )}

          <div className="relative">
            <label className="block text-[14px] text-white mb-2">Phone Number</label>
            <div className={`flex items-center metal-sunken rounded-xl p-4 transition-all duration-300 ${focusedInput === 'phone' ? 'reactor-glow-voltage' : ''}`}>
              <Phone className="text-[#6B6B6B] w-5 h-5 mr-3" />
              <div className="flex items-center mr-3 border-r border-[#2E2E2E] pr-3">
                <span className="text-white text-[16px]">+254</span>
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                onFocus={() => setFocusedInput('phone')}
                onBlur={() => setFocusedInput(null)}
                placeholder="712 345 678"
                className="bg-transparent border-none outline-none text-white text-[16px] w-full placeholder-[#6B6B6B]"
              />
            </div>
          </div>

          {mode === 'signup' && (
            <div className="relative">
              <label className="block text-[14px] text-white mb-2">Location</label>
              <div className={`flex items-center metal-sunken rounded-xl p-4 transition-all duration-300 ${focusedInput === 'location' ? 'reactor-glow-voltage' : ''}`}>
                <MapPin className="text-[#6B6B6B] w-5 h-5 mr-3" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setFocusedInput('location')}
                  onBlur={() => setFocusedInput(null)}
                  placeholder="Nairobi, Kenya"
                  className="bg-transparent border-none outline-none text-white text-[16px] w-full placeholder-[#6B6B6B]"
                />
              </div>
              <button type="button" className="text-[#FFA500] text-[14px] mt-2 font-medium">
                Use current location
              </button>
            </div>
          )}

          <div className="flex items-start mt-4 mb-6">
            <button 
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`w-5 h-5 rounded mt-0.5 mr-3 flex items-center justify-center transition-all ${
                agreed ? 'bg-[#FFA500] border-none' : 'border border-[#2E2E2E] bg-transparent'
              }`}
            >
              {agreed && <svg className="w-3 h-3 text-[#0F0F0F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </button>
            <p className="text-[14px] text-[#A0A0A0] leading-tight">
              I agree to <span className="text-[#FFA500]">Terms of Service</span> and <span className="text-[#FFA500]">Privacy Policy</span>
            </p>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full h-[80px] rounded-xl font-bold text-[18px] transition-all duration-300 flex items-center justify-center ${
              isFormValid
                ? 'metal-extruded text-voltage'
                : 'metal-sunken text-[#4A4A4A]'
            }`}
          >
            <span className={isFormValid ? "text-glow-voltage" : ""}>
              {mode === 'signin' ? 'Continue' : 'Create Account'}
            </span>
          </button>
          
          <div className="flex items-center justify-center my-6">
            <div className="h-px bg-[#2E2E2E] flex-1" />
            <span className="px-4 text-[#6B6B6B] text-[14px]">OR</span>
            <div className="h-px bg-[#2E2E2E] flex-1" />
          </div>

          <button
            type="button"
            className="w-full h-[56px] metal-extruded rounded-xl flex items-center justify-center text-white text-[16px] font-medium active:metal-sunken transition-all"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {mode === 'signin' ? 'Continue with Google' : 'Sign up with Google'}
          </button>

          <div className="text-center mt-6">
            <button type="button" onClick={onSwitchMode} className="text-[#A0A0A0] text-[14px]">
              {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              <span className="text-[#FFA500] font-medium">{mode === 'signin' ? 'Sign Up' : 'Sign In'}</span>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
