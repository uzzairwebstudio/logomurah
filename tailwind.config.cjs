/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", "system-ui"],
                heading: ["Space Grotesk"],
            },
        },
    },
    plugins: [],
};