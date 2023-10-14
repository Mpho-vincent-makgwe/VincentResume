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
        "custom-red": {
          10: "#ff5050",
        },
        "brownish-red": {
          10: "#9e658a",
        },
        "custom-yellow": {
          10: "#ffee4c",
          20: "#e8ee96",
        },
        "custom-green": {
          10: "#35c38d",
        },
        "awesome-colors": {
          10: "#e4eecd",
          20: "#e4eecd",
          30: "#e4eeae",
          40: "#9cbaae",
          50: "#41a8ae",
        },
        "custom-blue": "#98a4e8",
        // Light mode colors
        "light-bg": "bg-white",
        "light-text": "text-black",
        // Dark mode colors
        "dark-bg": "bg-gray-900",
        "dark-text": "text-white",
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
