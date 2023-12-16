/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fbfbfb",
          "200": "#272727",
        },
        lightgray: {
          "100": "#d6d6d6",
          "200": "#d4d4d4",
          "300": "#d1d1d1",
        },
        white: "#fff",
        dimgray: "#4d4d4d",
        palegreen: "#80ffa3",
        skyblue: "#62d9ff",
        cornflowerblue: "#4ca9ff",
        darkslategray: {
          "100": "#3f4152",
          "200": "#3a3636",
          "300": "#323443",
        },
        "text-2": "rgba(239, 237, 232, 0.65)",
        "text-1": "#fafaf9",
        mistyrose: "#edcece",
        mediumspringgreen: "#3bf686",
        gainsboro: "#dedede",
        darkgray: "#9c9c9c",
        silver: "#c9c9c9",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#eff4f1",
        },
      },
      spacing: {},
      fontFamily: {
        "small-normal": "Inter",
        poppins: "Poppins",
        "heading-h3": "Sora",
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
    },
    fontSize: {
      base: "16px",
      "29xl": "48px",
      "9xl": "28px",
      lg: "18px",
      sm: "14px",
      "37xl": "56px",
      inherit: "inherit",
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
}

