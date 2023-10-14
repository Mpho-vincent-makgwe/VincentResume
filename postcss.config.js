module.exports = {
  plugins: {
    "postcss-modules": {
      // Configuration options for CSS Modules
      generateScopedName: "[local]__[hash:base64:5]",
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
