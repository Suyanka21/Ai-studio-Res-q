import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function RatingFeedback({ onComplete }: { onComplete: () => void }) {
  const [rating, setRating] = useState(0);
  const [tip, setTip] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-screen w-full bg-[#0A0A0A] flex flex-col pt-16 pb-8 px-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-[24px] font-bold text-white tracking-wide uppercase mb-2">Rate Provider</h1>
        <p className="text-[12px] text-[#A0A0A0] uppercase tracking-widest">David K. • Flatbed Tow</p>
      </div>

      <div className="flex-1 flex flex-col items-center">
        {/* Star Rating */}
        <div className="flex space-x-4 mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                star <= rating ? 'metal-sunken border border-[#FFA500]/30 shadow-[inset_0_0_15px_rgba(255,165,0,0.3)]' : 'metal-extruded'
              }`}
            >
              <Star className={`w-6 h-6 transition-colors duration-300 ${
                star <= rating ? 'text-[#FFA500] fill-current drop-shadow-[0_0_8px_#FFA500]' : 'text-[#6B6B6B]'
              }`} />
            </button>
          ))}
        </div>

        {/* Feedback Text Area */}
        <div className="w-full mb-8">
          <label className="block text-[12px] font-bold text-white mb-2">Additional Feedback (Optional)</label>
          <div className="w-full metal-sunken rounded-2xl p-4 h-32">
            <textarea 
              placeholder="How was the service?" 
              className="w-full h-full bg-transparent border-none outline-none text-[14px] text-white placeholder-[#6B6B6B] resize-none"
            />
          </div>
        </div>

        {/* Tipping Section */}
        <div className="w-full">
          <label className="block text-[12px] font-bold text-white mb-2">Add a Tip (Optional)</label>
          <div className="flex space-x-3">
            {[100, 200, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => setTip(amount === tip ? 0 : amount)}
                className={`flex-1 py-3 rounded-xl text-[14px] font-bold transition-all duration-300 ${
                  tip === amount 
                    ? 'metal-sunken text-[#00E676] border border-[#00E676]/30 shadow-[inset_0_0_15px_rgba(0,230,118,0.3)]' 
                    : 'metal-extruded text-[#A0A0A0]'
                }`}
              >
                KES {amount}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 shrink-0">
        <button 
          onClick={onComplete}
          disabled={rating === 0}
          className={`w-full h-[80px] rounded-2xl font-bold text-[18px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center relative overflow-hidden ${
            rating > 0
              ? 'metal-extruded text-[#FFA500] active:metal-sunken text-glow-voltage' 
              : 'metal-extruded text-[#6B6B6B] opacity-50 cursor-not-allowed'
          }`}
        >
          Submit Feedback
        </button>
      </div>
    </motion.div>
  );
}
