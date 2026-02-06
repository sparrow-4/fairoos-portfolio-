/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#020c1b',
                'dark-secondary': '#112240',
                'neon-green': '#23ff88', // Slightly more vibrant
                'neon-cyan': '#00f2ff', // Brighter cyan
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backdropBlur: {
                'glass': '16px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'orbit': 'orbit 20s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                orbit: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' },
                    '100%': { boxShadow: '0 0 30px rgba(0, 255, 136, 0.8)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
