/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Adjust paths to match where your components and pages are
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: 'grey',
        secondary: '#orange',
        foreground: '#000',
        background: '#blue',
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

