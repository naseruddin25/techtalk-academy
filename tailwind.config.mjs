/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0a1120',
          800: '#0f1a2e',
          700: '#162240',
          600: '#1e2d52'
        },
        graphite: {
          900: '#121820',
          800: '#1a222d',
          700: '#242f3d'
        },
        electric: {
          cyan: '#00d4ff',
          purple: '#8b5cf6',
          blue: '#3b82f6'
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        }
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0, 212, 255, 0.3)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-gold': '0 0 40px rgba(251, 191, 36, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}
