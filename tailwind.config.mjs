/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      /*
       * All colors reference CSS custom properties from tokens.css.
       * Usage: text-text-primary, bg-bg-card, border-border-focus
       */
      colors: {
        bg: {
          base:         'rgb(var(--rgb-bg-base) / <alpha-value>)',
          surface:      'rgb(var(--rgb-bg-surface) / <alpha-value>)',
          card:         'rgb(var(--rgb-bg-card) / <alpha-value>)',
          'card-hover': 'rgb(var(--rgb-bg-card-hover) / <alpha-value>)',
          overlay:      'var(--color-bg-overlay)',
          input:        'var(--color-bg-input)',
        },
        border: {
          DEFAULT: 'rgb(var(--rgb-border) / <alpha-value>)',
          muted:   'var(--color-border-muted)',
          focus:   'var(--color-border-focus)',
          hover:   'var(--color-border-hover)',
        },
        text: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted:     'var(--color-text-muted)',
          disabled:  'var(--color-text-disabled)',
          inverse:   'var(--color-text-inverse)',
        },
        accent: {
          DEFAULT: 'rgb(var(--rgb-accent) / <alpha-value>)',
          hover:   'var(--color-accent-hover)',
          subtle:  'var(--color-accent-subtle)',
          border:  'var(--color-accent-border)',
        },
        secondary: 'var(--color-secondary)',
        success:   'var(--color-success)',
        error:     'var(--color-error)',
        warning:   'var(--color-warning)',

        /*
         * LEGACY ALIASES — kept for backward compatibility with existing components.
         * Migrate components to use semantic token names above over time.
         * Do not use these in new components.
         */
        primary: {
          DEFAULT: 'rgb(var(--rgb-accent) / <alpha-value>)',
          light:   'var(--color-accent-hover)',
          dark:    'var(--primitive-indigo-600)',
          glow:    'var(--color-accent-glow-md)',
        },
        surface:  'rgb(var(--rgb-bg-surface) / <alpha-value>)',
        card:     'rgb(var(--rgb-bg-card) / <alpha-value>)',
        // 'border' is already defined above as a semantic token
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        'token-2xs':  ['var(--text-2xs)', { lineHeight: 'var(--leading-normal)' }],
        'token-xs':   ['var(--text-xs)',   { lineHeight: 'var(--leading-normal)' }],
        'token-sm':   ['var(--text-sm)',   { lineHeight: 'var(--leading-relaxed)' }],
        'token-base': ['var(--text-base)', { lineHeight: 'var(--leading-relaxed)' }],
        'token-md':   ['var(--text-md)',   { lineHeight: 'var(--leading-normal)' }],
        'token-lg':   ['var(--text-lg)',   { lineHeight: 'var(--leading-snug)' }],
        'token-xl':   ['var(--text-xl)',   { lineHeight: 'var(--leading-snug)' }],
        'token-2xl':  ['var(--text-2xl)',  { lineHeight: 'var(--leading-tight)' }],
        'token-3xl':  ['var(--text-3xl)',  { lineHeight: 'var(--leading-tight)' }],
        'token-4xl':  ['var(--text-4xl)',  { lineHeight: 'var(--leading-tight)' }],
        'token-5xl':  ['var(--text-5xl)',  { lineHeight: 'var(--leading-tight)' }],
      },

      borderRadius: {
        sm:   'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },

      boxShadow: {
        sm:           'var(--shadow-sm)',
        md:           'var(--shadow-md)',
        lg:           'var(--shadow-lg)',
        xl:           'var(--shadow-xl)',
        card:         'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'glow-sm':    'var(--shadow-glow-sm)',
        'glow-md':    'var(--shadow-glow-md)',
        'glow-lg':    'var(--shadow-glow-lg)',
      },

      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
      },

      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      animation: {
        'pulse-glow': 'pulseGlow 2s ease infinite',
        'fade-up':    'fadeUp 0.4s ease forwards',
      },

      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.55' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
