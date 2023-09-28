/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "512px",
			md: "768px",
			lg: "1200px",
			xl: "1440px",
		},
		extend: {
			colors: {
				primary: "#120B48",
				"primary-100": "#1B233D",
				grey: "#616163",
				"grey-100": "#F4F6F8",
				"grey-900": "#141414",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				manrope: ["Manrope", "sans-serif"],
				sora: ["Sora", "sans-serif"],
				workSans: ["Work Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
