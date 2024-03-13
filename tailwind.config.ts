import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primarybg : "#101118",
        primarybtn : "1919e5",
      },
      // fontFamily : {
      //   work:["worksans","sans-serif"]
      // }
      fontFamily:{
        work : ['work sans', 'sans serif']
      }
    },
  },
  plugins: [],
};
export default config;
