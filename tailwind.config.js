/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071A3B',
          darkNavy: '#040F24',
          deepBlue: '#0A2558',
          royal: '#0755E8',
          electric: '#008BFF',
          cyan: '#16D9F2',
          glow: '#38BDF8',
          lightBlue: '#F0F6FF',
          iceBlue: '#E6F0FA',
          slate: '#5B6B87',
          textNavy: '#101E3B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 26, 59, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(7, 85, 232, 0.16)',
        'glow-sm': '0 0 15px rgba(22, 217, 242, 0.25)',
        'glow-md': '0 0 30px rgba(0, 139, 255, 0.3)',
        'glow-lg': '0 0 50px rgba(7, 85, 232, 0.35)',
        'card': '0 4px 20px -2px rgba(7, 26, 59, 0.06), 0 2px 6px -1px rgba(7, 26, 59, 0.04)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(7, 85, 232, 0.15), transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(240, 246, 255, 0.65) 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(7, 26, 59, 0.95) 0%, rgba(4, 15, 36, 0.9) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #0755E8 0%, #008BFF 50%, #16D9F2 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
