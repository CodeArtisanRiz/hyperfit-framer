import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Star } from 'lucide-react';
import {
  revealVariants,
  staggerTier1Variants,
  buttonHoverVariants,
  framerViewport,
  framerTransitions,
} from '@/lib/motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[#08080a]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content Left */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={framerViewport}
            className="flex-1 text-center lg:text-left z-10"
          >
            {/* Top Pill Badge */}
            <motion.div
              variants={revealVariants}
              className="inline-flex items-center gap-2 bg-zinc-900/90 border border-white/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                NO PRESSURE. NO HYPE.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={revealVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6"
            >
              <span className="text-stroke-lime block font-extrabold">TRAIN LIKE</span>
              <span className="text-white block font-black">YOU PERFORM</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={revealVariants}
              className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal mb-8 leading-relaxed"
            >
              Just simple, effective workouts tailored to your goals — guided by real people who care about your progress.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={revealVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#pricing"
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ccff00] text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_0_30px_rgba(204,255,0,0.2)]"
              >
                <span>START TODAY</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={framerTransitions.quickInteractive}
                  className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </motion.div>
              </motion.a>

              <motion.a
                href="#services"
                variants={buttonHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full"
              >
                <Play className="w-4 h-4 text-[#ccff00] fill-[#ccff00]" />
                <span>EXPLORE PROGRAMS</span>
              </motion.a>
            </motion.div>

            {/* Micro Stats Banner (Tier 1 Stagger Oc) */}
            <motion.div
              variants={staggerTier1Variants}
              initial="hidden"
              whileInView="visible"
              viewport={framerViewport}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-satoshi">1,200+</div>
                <div className="text-xs text-zinc-400 font-medium">Active Members</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-satoshi">98%</div>
                <div className="text-xs text-zinc-400 font-medium">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-satoshi">15+</div>
                <div className="text-xs text-zinc-400 font-medium">Expert Coaches</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Right */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={framerViewport}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 group">
              <img
                src="/images/img_2_mXjxBWSb8GBdmvrqH4vs.png"
                alt="Hyperfit Athlete Training"
                className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Glass Badge 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={framerViewport}
                transition={framerTransitions.pointCardsReveal}
                className="absolute top-6 right-6 bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ccff00] flex items-center justify-center font-black text-black">
                  4.9
                </div>
                <div>
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mt-0.5">Top Rated Gym</div>
                </div>
              </motion.div>

              {/* Floating Glass Badge 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={framerViewport}
                transition={{ ...framerTransitions.pointCardsReveal, delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-[#0e0e12]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#ccff00]">⚡</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase">Personalized Plans</div>
                  <div className="text-xs text-zinc-400">Targeted Strength & Fitness</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
