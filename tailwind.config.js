/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0f1726",
        baseAlt: "#111b2e",
        text: "#e9eef7",
        muted: "#b9c3d8",
        accent: "#31d0aa",
        accent2: "#f3ba2f",
        stroke: "rgba(152, 172, 205, 0.25)",
        surface: "rgba(17, 27, 46, 0.75)",
        surfaceStrong: "rgba(20, 34, 57, 0.92)"
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"]
      },
      boxShadow: {
        glass: "0 10px 35px rgba(5, 12, 24, 0.45)"
      }
    }
  },
  plugins: []
};
