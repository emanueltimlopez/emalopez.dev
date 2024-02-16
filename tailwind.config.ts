import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      'sans': ['"Inria Sans"'],
      'serif': ['"Inknut Antiqua"'],
    },
    colors: {
      'normal-text': '#3D405B',
      'secondary-text': '#E07A5F'
    },
    boxShadow: {
      'normal': '-10px -10px 4px 0px rgba(0,0,0,0.1)',
      'reverse': '10px 10px 4px 0px rgba(0,0,0,0.1)'
    },
    keyframes: {
      'slideDown': {
        "0%": {
          transform: 'translateY(-100%)'
        },
        "100%": {
          transform: 'translateY(0)'
        }
      }
    },
    animation: {
      'header': 'slideDown 0.50s ease-out'
    }
    }
  },
  plugins: [],
}
export default config;
