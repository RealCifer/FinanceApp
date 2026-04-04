export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#EC4899",
        bg: "#F5F6FA",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        card: "0 6px 30px rgba(0,0,0,0.08)",
        glow: "0 0 30px rgba(124,58,237,0.3)",
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },

      fontSize: {
        xs2: "11px",
      },
    },
  },
  plugins: [],
};