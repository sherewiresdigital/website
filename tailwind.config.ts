import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '6xl': ['64px', '96px']
      },
      colors: {
        'darkgrey': '#1C1B1F',
        'middlegrey': '#373C40',
        'lightgrey': '#636366',
        'whitegrey': '#E4E4E4',
        'bluepurple': '#CAD2FF',
        'lightpurple': '#E5D1FF',
        'lightpink': '#FFD7E3',

      },
      spacing: {
        '114': '456px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
