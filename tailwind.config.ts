import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['var(--font-baloo)'],
        instrumental: ['var(--font-instrumental)'],
        pacifico: ['var(--font-pacifico)'],
      },
    },
  },
  plugins: [],
}

export default config;
