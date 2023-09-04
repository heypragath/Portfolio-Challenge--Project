import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        "heading": "25ch",
        "heading-sub": "min(58ch, 100%)"

      },
      width: {
        "fluid-width-1280": "min(85vw, 1280px)",
      },
      fontFamily: {
        "heading-font": "Prata, serif"
      },
      margin: {
        "margin--64-80": "clamp(4.00rem, calc(3.67rem + 1.67vw), 5.00rem)",
        "margin--18-40": "clamp(1.13rem, calc(0.21rem + 4.57vw), 3.75rem)"
      },
      padding: {
        "padding--18-40": "clamp(1.13rem, calc(0.21rem + 4.57vw), 3.75rem)",
        "padding--18-30": " clamp(1.13rem, calc(0.86rem + 1.30vw), 1.88rem)",
        "padding--14-20": "clamp(0.88rem, calc(0.74rem + 0.65vw), 1.25rem)"
      },
      fontSize: {
        "size--39-60": "clamp(2.4rem, calc(1.42rem + 2.92vw), 3.75rem)"
      },
      gridTemplateColumns: {
        "grid-fluid-2": "repeat(auto-fit, minmax(min(320px, 50vw), 1fr))"
      }
    },
  },
  plugins: [],
}
export default config
