import type { Config } from 'tailwindcss'

/**
 * COSTA G - TAILWIND LUXURY CONFIGURATION
 * Filosofía: "El lujo susurra con confianza"
 * 
 * Paleta:
 * - Navy (#1A3A52): Títulos, CTAs, autoridad
 * - Gold (#D4AF37): Acentos premium, exclusividad
 * - SkyLight (#F0F8FF): Fondos, calma
 * - Charcoal (#666666): Texto body, legibilidad
 */

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ============================================
         COLOR PALETTE - LUXURY
         ============================================ */
      colors: {
        // Primary: Navy (autoridad, confianza)
        navy: {
          DEFAULT: '#1A3A52',
          50: '#E8EEF2',
          100: '#D1DDE5',
          200: '#A3BBCB',
          300: '#7599B1',
          400: '#476797',
          500: '#1A3A52',
          600: '#152E42',
          700: '#102331',
          800: '#0A1721',
          900: '#050C10',
        },
        // Accent: Gold (exclusividad, premium)
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF7E8',
          100: '#F7EFD1',
          200: '#EFDFA3',
          300: '#E7CF75',
          400: '#DFBF47',
          500: '#D4AF37',
          600: '#B8962A',
          700: '#8A7020',
          800: '#5C4B15',
          900: '#2E250B',
        },
        // Background: Sky Light (calma, amplitud)
        skyLight: {
          DEFAULT: '#F0F8FF',
          50: '#FFFFFF',
          100: '#F0F8FF',
          200: '#E1F1FF',
          300: '#C3E4FF',
          400: '#87CEEB',
          500: '#5BB8E0',
        },
        // Text: Charcoal (legibilidad editorial)
        charcoal: {
          DEFAULT: '#666666',
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#666666',
          600: '#525252',
          700: '#3D3D3D',
          800: '#292929',
          900: '#141414',
        },
      },

      /* ============================================
         TYPOGRAPHY - EDITORIAL
         ============================================ */
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-3': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '600' }],
      },

      /* ============================================
         SPACING - LUXURY BREATHING
         ============================================ */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        'section': '6rem',
        'section-lg': '8rem',
      },

      /* ============================================
         BOX SHADOW - NAVY DEPTH
         ============================================ */
      boxShadow: {
        'luxury': '0 4px 20px rgba(26, 58, 82, 0.08)',
        'luxury-md': '0 8px 30px rgba(26, 58, 82, 0.12)',
        'luxury-lg': '0 12px 40px rgba(26, 58, 82, 0.15)',
        'luxury-button': '0 4px 14px rgba(26, 58, 82, 0.25)',
        'luxury-button-hover': '0 8px 25px rgba(26, 58, 82, 0.35)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'gold-hover': '0 8px 30px rgba(212, 175, 55, 0.4)',
      },

      /* ============================================
         GRADIENTS
         ============================================ */
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #1A3A52 0%, #2A5A72 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4CF57 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(26, 58, 82, 0.75) 0%, rgba(26, 58, 82, 0.5) 40%, rgba(240, 248, 255, 0.8) 80%, #F0F8FF 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(26,58,82,0.85) 100%)',
      },

      /* ============================================
         ANIMATIONS
         ============================================ */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'hero-reveal': 'heroReveal 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroReveal: {
          '0%': { opacity: '0', transform: 'scale(1.1)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'scale(1)', filter: 'blur(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      /* ============================================
         TRANSITIONS
         ============================================ */
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },

      /* ============================================
         BORDER RADIUS
         ============================================ */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
