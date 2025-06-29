/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF8F1',
          100: '#FFEED4',
          200: '#FFD9A8',
          300: '#FFBD71',
          400: '#FF9438',
          500: '#FF5733',
          600: '#FFA07A',
          700: '#FF8C00',
          800: '#CC4A00',
          900: '#993800',
        },
        nude: {
          50: '#FDF7F3',
          100: '#F9EDE6',
          200: '#F3DBCC',
          300: '#EDC9B3',
          400: '#E7B799',
          500: '#E1A580',
          600: '#D4926D',
          700: '#C8805A',
          800: '#BB6D47',
          900: '#AE5A34',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'orange-glow': 'linear-gradient(135deg, #FF5733 0%, #FFA07A 50%, #FF8C00 100%)',
        'nude-glow': 'linear-gradient(135deg, #F9EDE6 0%, #E1A580 50%, #D4926D 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 87, 51, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 87, 51, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};