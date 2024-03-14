/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightMode: {
          primary: "#e4e5f1",
          secondary: "#25273c",
          main: "#cacde8",
        },

        darkMode: {
          primary: "#25273c",
          secondary: "#e4e5f1",
          main: "#161722",
        },
      },
    },
  },
  plugins: [],
};
