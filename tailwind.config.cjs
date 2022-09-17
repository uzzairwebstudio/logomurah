/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", "system-ui"],
                heading: ["Space Grotesk"],
            },
            colors: {
                cyan: colors.cyan
            }
        },
    },
    plugins: [],
};