/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Configure your color palette here
        "custom-color-mixed": {
          10: "e8ffd4",
          20:"#d2dbd1",
        },
      },
      fontFamily: {
        alkatra: ["Alkatra", "sans"],
        dm_mono: ["DM Mono", "italic"],
        eduNswActFoundation: ["Edu NSW ACT Foundation", "sans"],
      },
    },
  },
  plugins: [],
};
