/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f4',
        'cream-warm': '#f2ede4',
        stone: '#e8e0d4',
        'stone-mid': '#b0a898',
        'text-primary': '#2a2520',
        'text-soft': '#6b6258',
        green: '#2d4a26',
        'green-mid': '#3d6334',
        'green-light': '#e8f0e4',
        sage: '#7a9468',
        gold: '#b8832a',
        'gold-light': '#d4a04a',
        'gold-pale': '#f5e8cc',
        ink: '#111008',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.6rem', { letterSpacing: '0.28em', fontWeight: '600' }],
        nav: ['0.68rem', { letterSpacing: '0.16em', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
