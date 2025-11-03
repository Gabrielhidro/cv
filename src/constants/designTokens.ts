/**
 * Design Tokens - Sistema de Design Centralizado
 * Seguindo padrões de Design Systems profissionais
 */

// ============================================
// SPACING SCALE (8pt grid system)
// ============================================
export const SPACING = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
} as const;

// ============================================
// TYPOGRAPHY SCALE
// ============================================
export const TYPOGRAPHY = {
  // Font Sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
  },

  // Line Heights
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
    loose: "2",
  },

  // Font Weights
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  // Letter Spacing
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
  },
} as const;

// ============================================
// LAYOUT CONSTANTS
// ============================================
export const LAYOUT = {
  // Container
  maxWidth: "max-w-7xl",
  containerPadding: "px-4 sm:px-6 lg:px-8",

  // Section Spacing
  sectionPaddingY: "py-20",
  sectionPaddingX: "px-4",

  // Card Padding
  cardPadding: "p-6 md:p-8",
  cardPaddingSmall: "p-4 md:p-6",

  // Grid Gaps
  gridGap: "gap-6",
  gridGapSmall: "gap-4",
  gridGapLarge: "gap-8",

  // Navigation
  navHeight: "h-16",
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const RADIUS = {
  sm: "rounded-md", // 6px
  md: "rounded-lg", // 8px
  lg: "rounded-xl", // 12px
  xl: "rounded-2xl", // 16px
  full: "rounded-full",
} as const;

// ============================================
// SHADOWS
// ============================================
export const SHADOW = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
} as const;

// ============================================
// TRANSITIONS
// ============================================
export const TRANSITION = {
  // Durations
  duration: {
    fast: "duration-150",
    normal: "duration-300",
    slow: "duration-500",
    slower: "duration-1000",
  },

  // Common transitions
  all: "transition-all",
  colors: "transition-colors",
  transform: "transition-transform",
  opacity: "transition-opacity",
} as const;

// ============================================
// BREAKPOINTS (for reference)
// ============================================
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================
export const Z_INDEX = {
  base: "z-0",
  dropdown: "z-10",
  sticky: "z-20",
  fixed: "z-30",
  modalBackdrop: "z-40",
  modal: "z-50",
  popover: "z-60",
  tooltip: "z-70",
} as const;

// ============================================
// ANIMATION TIMING
// ============================================
export const ANIMATION = {
  fadeIn: {
    duration: "1000",
    delay: "300",
  },
  slideIn: {
    duration: "1000",
    delay: "300",
  },
  scaleUp: {
    duration: "300",
  },
} as const;
