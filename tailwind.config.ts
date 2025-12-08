import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ========================================
      // PALETA DE COLORES COSTA G
      // ========================================
      colors: {
        // Primario - Azul Cielo (fondos, espacios amplios)
        primary: {
          DEFAULT: '#87CEEB',
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#87CEEB', // Base
          400: '#5BB8E0',
          500: '#38A3D5',
          600: '#2589BA',
          700: '#1E6F96',
          800: '#1A5A7A',
          900: '#164B66',
        },
        // Secundario - Azul Marino Oscuro (títulos, botones)
        secondary: {
          DEFAULT: '#1A3A52',
          50: '#E8F4FC',
          100: '#C5E0F0',
          200: '#8BBDD9',
          300: '#5199C2',
          400: '#2D7AAB',
          500: '#1A5A8A',
          600: '#1A4A6E',
          700: '#1A3A52', // Base
          800: '#152E42',
          900: '#0F2538',
        },
        // Acento - Dorado (highlights, iconos premium)
        accent: {
          DEFAULT: '#D4AF37',
          50: '#FDF8E8',
          100: '#FAF0C8',
          200: '#F5E08E',
          300: '#E9C84D',
          400: '#D4AF37', // Base
          500: '#B8962E',
          600: '#967725',
          700: '#74591D',
          800: '#5C4618',
          900: '#4A3814',
        },
        // Neutros
        neutral: {
          white: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#666666', // Texto principal
          700: '#525252',
          800: '#404040',
          900: '#262626',
          black: '#171717',
        },
      },
      // ========================================
      // TIPOGRAFÍA
      // ========================================
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'sans-serif'],
      },
      fontSize: {
        // Display
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        // Headings
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        // Body
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      // ========================================
      // ESPACIADO Y LAYOUT
      // ========================================
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // ========================================
      // ANIMACIONES
      // ========================================
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // ========================================
      // SOMBRAS
      // ========================================
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'glow-primary': '0 0 20px rgba(135, 206, 235, 0.4)',
        'glow-accent': '0 0 20px rgba(212, 175, 55, 0.4)',
      },
      // ========================================
      // BORDER RADIUS
      // ========================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // ========================================
      // TRANSICIONES
      // ========================================
      transitionDuration: {
        '400': '400ms',
      },
      // ========================================
      // BACKDROP
      // ========================================
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
