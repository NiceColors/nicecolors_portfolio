import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        "wave-2": "wave 2s ease-in-out infinite",
        "wave-4": "wave 4s ease-in-out infinite",
        "wave-6": "wave 6s ease-in-out infinite",
        "wave-8": "wave 8s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
