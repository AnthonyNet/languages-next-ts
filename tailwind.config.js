/** @type {import('tailwindcss').Config} */

/*Plugin is used in MainPage Card */
const plugin = require("tailwindcss/plugin");

const myClass = plugin(function ({ addUtilities }) {
	addUtilities({
		".my-rotate-y-180": {
			transform: "rotateY(180deg)",
		},
		".preserve-3d": {
			transformStyle: "preserve-3d",
		},
		".perspective": {
			perspective: "1000px",
		},
		".backface-hidden": {
			backfaceVisibility: "hidden",
		},
	});
});

module.exports = {
	darkMode: ["class", '[data-mode="dark"]'],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./sections/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 13s linear infinite",
				"ping-slow": "bounce 1s linear infinite",
				"ping-slower": "bounce 3s linear infinite",
			},
		},
		keyframes: {
			shimmer: {
				"100%": {
					transform: "translateX(100%)",
				},
			},
		},
	},
	plugins: [myClass],
};
