/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        layout: "#F1F3F6",
        bBlack: "#1B1B1B",
        cBlack: "#0C111A",
        cGrey: "#5C5C5C",
        navbar: "#4B5563",
      },
      fontFamily: {
        inter: ["Inter"],
        figtree: ["Figtree"],
        proxima: [],
      },
    },
  },
  plugins: [require("daisyui")],
};
