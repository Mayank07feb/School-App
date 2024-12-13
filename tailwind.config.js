/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}', // Main entry file (App.tsx or App.js)
    './components/**/*.{js,jsx,ts,tsx}', // If you have a components directory
    './screens/**/*.{js,jsx,ts,tsx}', // If you have a screens directory
    './services/**/*.{js,jsx,ts,tsx}', // For service-related files if any
  ],
  presets: [require('nativewind/preset')], // Preset for NativeWind
  theme: {
    extend: {
      colors: {
        primary: '#3B7CB8', // Professional deep blue
        secondary: '#2C5E8F', // Slightly darker blue for depth
        background: '#FFFFFF', // Clean white background for modal
        text: {
          primary: '#FFFFFF', // White for header text
          secondary: '#1E3A8A', // Deep blue for user name
          muted: '#4A5568', // Slate gray for menu items
          logout: '#E53E3E', // Red for logout
        },
        profile: {
          background: '#1A365D', // Dark navy for profile circle
          text: '#FFFFFF', // White for profile text
        },
      },
    },
  },
  plugins: [],
};