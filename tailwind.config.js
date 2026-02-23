/** @type {import('tailwindcss').Config} */
 const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  
  // Modo escuro baseado em classe
  darkMode: 'class',
  
  theme: {
    screens: {
      // Breakpoints customizados
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl' : '1919px',
      '4xl' : '2500px',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
        '3xl': '100%',
        '4xl': '100%'
      },
    },
    
    extend: {
      // 🎯 Cores do Design System
      colors: {
        // Cores da marca
        brand: {
          lightbrown: '#d9c0a3',
          brown: '#8c5f4f',
          strongbrown:'#332214',
          green: '#3b4e4c',
          black: '#363535',
          white: '#ededed'
        },
        screens: {
      '3xl': '1919px',
      '4xl': '2500px',
        },
        // Cores semânticas
        success: {
          lightgreen: '#568f67ff',
          green: '#085824ff'
        },
        
        warning: {
          lightyellow: '#fde68a',
          yellow: '#fcd34d'
        },
        
        error: {
          lightred: '#f87171',
          red: '#b91c1c'
        },
        
        // Cores de texto
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          inverted: 'rgb(var(--text-inverted) / <alpha-value>)',
        },
        
        // Cores de background
        background: {
          primary: '(var(--bg-primary) / <alpha-value>)',
          secondary: '(var(--bg-secondary) / <alpha-value>)',
          linearprimary: 'linear-gradient(180deg, #3b4e4c, #33243)',
          linearsecondary: 'linear-gradient(135deg,var(--bg-linearsecondary) / <alpha-value>)',
        },
      },
      
      // 🖋️ Tipografia
      fontFamily: {
        // Fontes customizadas
        primary: ['"Roboto", sans-serif'],
        secondary: ['"Work Sans", sans-serif']
      },
      
      fontSize: {
        // Tamanhos customizados
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        
        // Tamanhos customizados
        'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      // 📐 Espaçamento
      spacing: {
        // Espaçamentos customizados
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        
        // Layout específico
        'header': '4rem',
        'container': 'min(100% - 2rem, 1200px)',
      },
      
      // 🔲 Border Radius
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      
      // 📦 Box Shadow
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        
        // Sombras customizadas
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'dropdown': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.06)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      
      // 🎭 Animations e Transitions
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 1.5s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // 📱 Outras customizações
      zIndex: {
        'dropdown': 1000,
        'sticky': 1020,
        'fixed': 1030,
        'modal': 1040,
        'popover': 1050,
        'tooltip': 1060,
        'toast': 1070,
      },
      
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
      
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  
  plugins: [
    // Plugin para container centralizado
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1536px',
          },
          '@screen 3xl': {
            maxWidth: '1920px',
          },
          '@screen 4xl': {
            maxWidth: '2500px',
          },
        },
      })
    },
    
    // Plugin para utilitários customizados
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
        '.scroll-smooth': {
          scrollBehavior: 'smooth',
        },
        '.bg-grid': {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='m0 .5h31.5v32h-32z'/%3e%3c/svg%3e")`,
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

export default config;