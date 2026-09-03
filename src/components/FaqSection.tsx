import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "I’m a complete beginner. Can I still join Hyperfit?",
      a: "Absolutely! Over 40% of our members started as complete beginners. Our coaches customize your onboarding roadmap to match your comfortable starting point.",
    },
    {
      q: "Do I need to bring anything for my first session?",
      a: "Just comfortable workout attire, clean athletic shoes, and your phone for mobile keyless entry. We provide complimentary sweat towels, water stations, and lockable storage.",
    },
    {
      q: "Can I pause or freeze my membership if I travel?",
      a: "Yes! We offer zero-penalty membership freezes for up to 90 days per calendar year directly in the mobile app.",
    },
    {
      q: "How do I book group fitness classes or coaching?",
      a: "All group class reservations, personal training slots, and sauna bookings are managed in real time through the Hyperfit app.",
    },
    {
      q: "Are lockers and showers included in all membership plans?",
      a: "Yes, every member tier enjoys unlimited access to our high-spec locker rooms, private rainfall showers, and infrared sauna suites.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0c0c10] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20">
            GOT QUESTIONS?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4">
            FREQUENTLY <span className="text-stroke-lime">ASKED QUESTIONS</span>
          </h2>
          <p className="text-zinc-400 text-base">
            Everything you need to know about starting your journey with Hyperfit.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-zinc-900 border-[#ccff00]/50' : 'bg-zinc-900/40 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-lg font-bold text-white uppercase tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-zinc-400'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
