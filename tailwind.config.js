/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export const content = [
    "./src/**/*.{html,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
//export const darkMode = "class";
export const theme = {
    extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        },
    },
};
export const plugins = [
    nextui({
        addCommonColors: true,
        themes: {
            light: {
                colors: {
                    primary: "#11181c",
                    secondary: "#646b70",
                    accent: "#7e868c",
                    background: "#f8f9fa",
                    success: "#9BCBEB",
                },
            },
            dark: {
                colors: {
                    primary: "#d1d5db",
                    secondary: "#9ca3af",
                    accent: "#6b7280",
                    background: "#0c0f11",
                    success: "#9BCBEB",
                },
            },
        },
    }),
];


