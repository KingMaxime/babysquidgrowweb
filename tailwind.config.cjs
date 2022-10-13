/* @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				squids: ["Squids", "sans-serif"],
				qanelas: ["Qanelas", "sans-serif"],
			},
			animation: {
				shake: "shake 0.5s ease-in-out 10",
			},
		},
	},
	plugins: [],
};
