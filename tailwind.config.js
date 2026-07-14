/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan the page for used utility classes (JIT).
  content: ['./index.html'],
  // The page ships its own CSS reset, so keep Tailwind's Preflight off to avoid
  // clashing with the hand-written base styles.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        navy: '#0F2E8A',
        'navy-deep': '#062660',
        lime: '#B7FF2A',
        paper: '#F7F1E8',
        panel: '#FFFAF2',
        coral: '#D96A4A',
        clay: '#C95A3A',
        peach: '#F4B08A',
        muted: '#65708C',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'sans-serif'],
        body: ['"DM Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: { xl2: '20px' },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(11,31,85,.16), 0 4px 10px -6px rgba(11,31,85,.10)',
        float: '0 34px 66px -22px rgba(11,31,85,.30), 0 10px 24px -12px rgba(11,31,85,.14)',
      },
    },
  },
  plugins: [],
}
