/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //when you write an object here, you over ride value
    fontFamily: {
      sans: "Robot Mano, monospace",
    },
    extend: {
      //when you write an object here, you add new property
      colors: {
        pizza: "#23235",
      },
      //modern unit useful for mobile
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
