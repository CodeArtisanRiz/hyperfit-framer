import type { Transition, Variants } from 'framer-motion';

/**
 * EXACT DECOMPILED FRAMER ANIMATION SYSTEM
 * Extracted directly from Hyperfit Framer modules:
 * - FmjdP7xkqQDCxxQ6FVWUnQcxjdTN7ExXnYHwq_RSRTo.CnVeJKk8.mjs
 * - script_main.CZB8gjID.mjs
 * - shared-lib.DP2DFvi9.mjs
 */

export const framerTransitions = {
  /**
   * Ec: Standard scroll appear section/container reveal
   * Cubic bezier: [0.44, 0, 0.56, 1], duration: 0.6s
   */
  sectionReveal: {
    type: 'tween',
    duration: 0.6,
    ease: [0.44, 0, 0.56, 1],
    delay: 0,
  } as Transition,

  /**
   * Oc: Stagger tier 1 (headers, micro stats, subheadings)
   * Cubic bezier: [0.44, 0, 0.56, 1], duration: 0.6s, delay: 0.2s
   */
  staggerTier1: {
    type: 'tween',
    duration: 0.6,
    ease: [0.44, 0, 0.56, 1],
    delay: 0.2,
  } as Transition,

  /**
   * Yc: Stagger tier 2 (secondary cards, late details)
   * Cubic bezier: [0.44, 0, 0.56, 1], duration: 0.6s, delay: 0.4s
   */
  staggerTier2: {
    type: 'tween',
    duration: 0.6,
    ease: [0.44, 0, 0.56, 1],
    delay: 0.4,
  } as Transition,

  /**
   * jc: Horizontal slide entrance
   * Cubic bezier: [0.19, 0, 0, 1], duration: 1.0s, delay: 0
   */
  horizontalSlide: {
    type: 'tween',
    duration: 1.0,
    ease: [0.19, 0, 0, 1],
    delay: 0,
  } as Transition,

  /**
   * Ei: Pricing toggle switcher spring
   * Physics: stiffness 500, damping 60, mass 1
   */
  pricingSwitcher: {
    type: 'spring',
    stiffness: 500,
    damping: 60,
    mass: 1,
    delay: 0,
  } as Transition,

  /**
   * us: FAQ Accordion open/close spring
   * Physics: bounce 0, duration 0.2s
   */
  faqAccordion: {
    type: 'spring',
    bounce: 0,
    duration: 0.2,
    delay: 0,
  } as Transition,

  /**
   * Uo: Testimonials slider card transitions
   * Physics: bounce 0, duration 0.6s
   */
  testimonialsSlider: {
    type: 'spring',
    bounce: 0,
    duration: 0.6,
    delay: 0,
  } as Transition,

  /**
   * Ar, Pr, Ir: Service cards column staggers
   * Physics: bounce 0.2, duration 0.6s, staggered by 0.1s
   */
  serviceCardStagger: (colIndex: number): Transition => ({
    type: 'spring',
    bounce: 0.2,
    duration: 0.6,
    delay: 0.1 * (colIndex + 1),
  }),

  /**
   * zc: Why Choose Us point cards entrance
   * Physics: bounce 0, duration 1.5s, delay 0.3s
   */
  pointCardsReveal: {
    type: 'spring',
    bounce: 0,
    duration: 1.5,
    delay: 0.3,
  } as Transition,

  /**
   * Lc: Divider line spring entrance
   * Physics: bounce 0, duration 1.0s
   */
  lineDivider: {
    type: 'spring',
    bounce: 0,
    duration: 1.0,
    delay: 0,
  } as Transition,

  /**
   * Ut: Nav menu pill hover & tap spring
   * Physics: bounce 0.2, duration 0.4s
   */
  navPill: {
    type: 'spring',
    bounce: 0.2,
    duration: 0.4,
    delay: 0,
  } as Transition,

  /**
   * G: Primary CTA Button hover & tap spring
   * Physics: bounce 0, duration 1.0s
   */
  primaryButton: {
    type: 'spring',
    bounce: 0,
    duration: 1.0,
    delay: 0,
  } as Transition,

  /**
   * vn: Sticky header scroll appearance transition
   * Cubic bezier: [0.44, 0, 0.56, 1], duration: 1.2s, delay: 0.2s
   */
  stickyHeaderScroll: {
    type: 'tween',
    duration: 1.2,
    ease: [0.44, 0, 0.56, 1],
    delay: 0.2,
  } as Transition,

  /**
   * Quick interactive tween (buttons & icons)
   */
  quickInteractive: {
    type: 'tween',
    duration: 0.2,
    ease: [0.44, 0, 0.56, 1],
  } as Transition,
} as const;

/**
 * Standard Framer viewport settings
 * Matches __framer__threshold: 0 (or 0.2) and __framer__animateOnce: true
 */
export const framerViewport = {
  once: true,
  amount: 0.2,
} as const;

/**
 * Standard Section Fade-Up ($ -> Ec)
 * Enter: { opacity: 0, y: 50 } -> Exit/InView: { opacity: 1, y: 0 }
 */
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: framerTransitions.sectionReveal,
  },
};

/**
 * Staggered Child Fade-Up ($ -> Oc)
 * Enter: { opacity: 0, y: 50 } with delay 0.2s
 */
export const staggerTier1Variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: framerTransitions.staggerTier1,
  },
};

/**
 * Staggered Child Fade-Up ($ -> Yc)
 * Enter: { opacity: 0, y: 50 } with delay 0.4s
 */
export const staggerTier2Variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: framerTransitions.staggerTier2,
  },
};

/**
 * Horizontal Slide In Left (Ac -> jc)
 * Enter: { opacity: 0, x: -100 } -> Exit/InView: { opacity: 1, x: 0 }
 */
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: framerTransitions.horizontalSlide,
  },
};

/**
 * Horizontal Slide In Right (Nc -> jc)
 * Enter: { opacity: 0, x: 100 } -> Exit/InView: { opacity: 1, x: 0 }
 */
export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: framerTransitions.horizontalSlide,
  },
};

/**
 * FAQ Accordion Content Variants (us spring)
 */
export const faqAccordionVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: framerTransitions.faqAccordion,
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: framerTransitions.faqAccordion,
  },
};

/**
 * Button Hover & Tap Variants (G spring)
 */
export const buttonHoverVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.04,
    transition: framerTransitions.primaryButton,
  },
  tap: {
    scale: 0.97,
    transition: framerTransitions.primaryButton,
  },
};

/**
 * Card Hover Variants
 */
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -6,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.4,
    },
  },
};
