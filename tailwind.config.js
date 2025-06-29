/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Enhanced Orange Palette - Better contrast ratios
        orange: {
          50: '#FFF8F1',   // Very light background
          100: '#FFEED4',  // Light background
          200: '#FFD9A8',  // Subtle accent
          300: '#FFBD71',  // Medium accent
          400: '#FF9438',  // Interactive elements
          500: '#FF6B47',  // Primary brand (merged)
          600: '#E55A3C',  // Hover states
          700: '#CC4A00',  // Active states
          800: '#B33E00',  // Dark accent
          900: '#993300',  // Very dark accent
        },
        // Enhanced Nude Palette - Warmer and more cohesive
        nude: {
          50: '#FBF2ED',   // Merged light background
          100: '#F7E6D9',  // Light background
          200: '#F0D4C0',  // Subtle background
          300: '#E8C2A7',  // Medium background
          400: '#E0B08E',  // Accent background
          500: '#D89E75',  // Medium accent
          600: '#C8855C',  // Darker accent
          700: '#B86D43',  // Dark accent
          800: '#A8552A',  // Very dark accent
          900: '#8B4513',  // Darkest accent
        },
        // Enhanced Gray Palette - Better contrast progression
        gray: {
          50: '#F9FAFB',   // Almost white
          100: '#F3F4F6',  // Very light
          200: '#E5E7EB',  // Light
          300: '#D1D5DB',  // Medium light
          400: '#9CA3AF',  // Medium
          500: '#6B7280',  // Medium dark
          600: '#4B5563',  // Dark
          700: '#374151',  // Very dark
          800: '#1F2937',  // Almost black
          900: '#0F1419',  // Merged dark background
        },
        // Accessibility-focused colors
        success: {
          light: '#10B981',  // WCAG AA compliant
          dark: '#059669',   // WCAG AAA compliant
        },
        warning: {
          light: '#F59E0B',  // WCAG AA compliant
          dark: '#D97706',   // WCAG AAA compliant
        },
        error: {
          light: '#EF4444',  // WCAG AA compliant
          dark: '#DC2626',   // WCAG AAA compliant
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Enhanced gradients with better color harmony
        'orange-glow': 'linear-gradient(135deg, #FF6B47 0%, #E55A3C 50%, #CC4A00 100%)',
        'nude-glow': 'linear-gradient(135deg, #FBF2ED 0%, #D89E75 50%, #C8855C 100%)',
        'dark-glow': 'linear-gradient(135deg, #0F1419 0%, #1F2937 50%, #374151 100%)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 71, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 71, 0.8)' },
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