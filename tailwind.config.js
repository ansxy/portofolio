/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e0e',
        paper: '#f5f0e8',
        accent: '#c8441b',
        muted: '#7a7060',
        border: '#d9d0be',
        'code-bg': '#1a1a1a',
        'code-fg': '#e8d5a3',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['DM Sans', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
      },
      fontSize: {
        'display': 'clamp(2.8rem, 6vw, 4.5rem)',
      },
      maxWidth: {
        'container': '780px',
      },
      animation: {
        'fadeUp': 'fadeUp 0.8s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

