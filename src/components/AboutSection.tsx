import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Award } from 'lucide-react';
import {
  revealVariants,
  slideInLeftVariants,
  slideInRightVariants,
  framerViewport,
  framerTransitions,
  cardHoverVariants,
} from '@/lib/motion';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'State-of-the-Art Equipment',
      desc: 'Top-grade resistance machines, free weights, and cardio tracks designed for optimum bio-mechanics.',
    },
    {
      icon: HeartPulse,
      title: 'Certified Performance Coaches',
      desc: 'Expert personal trainers focused on technique, injury prevention, and continuous goal progression.',
    },
    {
      icon: Award,
      title: 'Supportive Community Culture',
      desc: 'No judgment or intimidation. Just real people supporting each other toward healthier lifestyles.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#08080a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={framerViewport}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ccff00] text-xs font-extrabold uppercase tracking-widest bg-[#ccff00]/10 px-4 py-1.5 rounded-full border border-[#ccff00]/20 font-satoshi">
            ABOUT HYPERFIT
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-6">
            NOT JUST A GYM. <br />
            <span className="text-stroke-lime">A PLACE TO BELONG.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We’re more than just a gym. We’re a space built for every kind of journey — whether you’re taking your first step or pushing for a new personal best.
          </p>
        </motion.div>

        {/* Grid Visual & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Images Stack Left (Exact Framer jc slide-in animations) */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={slideInLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={framerViewport}
                className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="/images/img_9_TBtpBGBEIbsfs2xahoYn.png"
                  alt="Hyperfit Gym Interior 1"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                variants={slideInRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={framerViewport}
                className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl mt-8"
              >
                <img
                  src="/images/img_10_dfwtCzaitCbNqbsEfPR1.png"
                  alt="Hyperfit Gym Interior 2"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* Overlaid Highlight Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={framerViewport}
              transition={framerTransitions.pointCardsReveal}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0e0e12] border border-[#ccff00]/40 rounded-2xl p-4 shadow-2xl flex items-center gap-4 min-w-[280px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#ccff00] flex items-center justify-center text-black font-black text-lg">
                ✓
              </div>
              <div>
                <div className="text-sm font-bold text-white uppercase">100% Dedicated to You</div>
                <div className="text-xs text-zinc-400">Tailored workout schedules</div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Right */}
          <div className="space-y-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  viewport={framerViewport}
                  transition={framerTransitions.serviceCardStagger(idx)}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-[#ccff00]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#ccff00]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
