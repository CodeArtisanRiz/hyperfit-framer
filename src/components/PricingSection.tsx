import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import {
  revealVariants,
  buttonHoverVariants,
  cardHoverVariants,
  framerViewport,
  framerTransitions,
} from '@/lib/motion';

export const PricingSection: React.FC = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'STARTER',
      tagline: 'Perfect for beginners building a routine',
      priceMonthly: 49,
      priceAnnual: 39,
      image: '/images/img_33_rgdakbNEJZLapifjIWue.png',
      popular: false,
      features: [
        'Standard Gym Access (6 AM - 10 PM)',
        'Full Locker Room & Shower Access',
        'Mobile App Progress & Log Tracker',
        '1 Monthly Fitness Consultation',
        'Standard Strength & Cardio Zones',
      ],
    },
    {
      name: 'CORE ATHLETE',
      tagline: 'Our most popular plan for active members',
      priceMonthly: 79,
      priceAnnual: 64,
      image: '/images/img_34_C9bL243VwN8YDo3QjAQ6.png',
      popular: true,
      features: [
        '24/7 Full Keyless Facility Access',
        'Unlimited Group Fitness Classes',
        'Infrared Sauna & Hydro Recovery',
        'Personalized Macro Nutrition Plan',
        '4 Monthly Personal Training Sessions',
        'Free Towel Service & Hydro Bar',
      ],
    },
    {
      name: 'UNLIMITED PRO',
      tagline: 'Complete package for maximum results',
      priceMonthly: 119,
      priceAnnual: 99,
      image: '/images/img_35_aq0uBp1NfDkamqeJahF3.png',
      popular: false,
      features: [
        'Everything in Core Athlete',
        'Dedicated 1-on-1 Personal Coach',
        'Unlimited Recovery Suite & Cold Plunge',
        '2 Monthly Guest Passes',
        'Priority Class & Workshop Booking',
        'Custom Supplement Consultation',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0c0c10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={framerViewport}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-satoshi">
            MEMBERSHIP PLANS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-4">
            JOIN THE WAY THAT <br />
            <span className="text-stroke-lime">FEELS RIGHT FOR YOU.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Choose a plan that fits your pace — whether you’re just starting out or going all in.
          </p>

          {/* Exact Framer Ei Spring Toggle (stiffness: 500, damping: 60, mass: 1) */}
          <div className="mt-8 inline-flex items-center bg-zinc-900 border border-white/10 p-1.5 rounded-full relative">
            <button
              onClick={() => setAnnual(false)}
              className={`relative px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider z-10 transition-colors ${
                !annual ? 'text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              MONTHLY BILLING
              {!annual && (
                <motion.div
                  layoutId="pricing-active-pill"
                  transition={framerTransitions.pricingSwitcher}
                  className="absolute inset-0 bg-[#ccff00] rounded-full -z-10 shadow-md"
                />
              )}
            </button>

            <button
              onClick={() => setAnnual(true)}
              className={`relative px-6 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider z-10 transition-colors flex items-center gap-2 ${
                annual ? 'text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${annual ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-300'}`}>
                SAVE 20%
              </span>
              {annual && (
                <motion.div
                  layoutId="pricing-active-pill"
                  transition={framerTransitions.pricingSwitcher}
                  className="absolute inset-0 bg-[#ccff00] rounded-full -z-10 shadow-md"
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                whileInView={{
                  opacity: [0, 1],
                  y: [40, 0],
                  transition: framerTransitions.serviceCardStagger(idx),
                }}
                viewport={framerViewport}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-zinc-900 via-[#121604] to-zinc-900 border-2 border-[#ccff00] shadow-[0_0_40px_rgba(204,255,0,0.15)] lg:-translate-y-4'
                    : 'bg-zinc-900/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-satoshi">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      {plan.name}
                    </h3>
                    <img src={plan.image} alt={plan.name} className="w-10 h-10 object-contain rounded-xl" />
                  </div>

                  <p className="text-zinc-400 text-xs mb-6">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={framerTransitions.quickInteractive}
                        className="text-5xl font-black text-white font-satoshi"
                      >
                        ${price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-zinc-400 text-sm font-semibold">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-sm text-zinc-300">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-[#ccff00]'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="#contact"
                  variants={buttonHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-full inline-flex items-center justify-center gap-2 font-black text-xs uppercase tracking-wider py-4 rounded-full transition-colors ${
                    plan.popular
                      ? 'bg-[#ccff00] text-black shadow-lg'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  <span>SELECT THIS PLAN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
