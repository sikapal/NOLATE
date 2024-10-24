/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        gothic: ["'Century Gothic'", "sans-serif"], 
        arial:["'Arial'", "sans-serif"],
        regular:["'Regular'", "sans-serif"],
        europa:["'Europa","sans-serif"],
      },

      colors:{
        "dark-purple": "#081A51",
        "Light-white": "rgba(255,255,255,.018)",
        'violet':'#68089F',
        'lightgreen':'#4EC9BF',
        'darkblue':'#282A42',
        'darkblue2':'#2A133B',
        'blue':'#4826A0',
        'blue2': '#0C71BB',
        'lightblue':'#666CFF',
        'yellow':'#FFB900',
        'red':'#FF0000',
        'gradient':'#2699FB-#EB09E3',
        'green':'#13BB56',
        'skyblue':'#0996FF',
        'titre':'#727C8E',
        'contenu':'#707070',
        'indices':'#B5B5B5',
        'gris':'#D9D9D9',
        'whitegrey':'#F6F6F6',
      
      }
    },
  },
  plugins: [],
  variants:{
    extend:{
      display:["focus-group"]
    }
  }
}

