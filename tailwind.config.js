module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "465px",
      "600bp": "600px",
    },
  },
};
