const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#ffaf46 ",
                secondary: "#FFE5B7",
                tertiary: "#FF8E00",
            },
            dropShadow: {
                "2xl": "10px 5px 5px rgb(0 0 0 / 0.6)",
                "3xl": "1px 1px 5px rgb(0 0 0 / 0.6)",
            },
            maxWidth: {
                15: "15%",
                21.5: "21.5%",
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
            },
            margin: {
                moins4: "-4rem",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
