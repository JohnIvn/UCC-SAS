export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
		  colors: {
			darkGray: "#2D2D2D",
			darkGreen: "#0F4D2A",
		  },
		},
	  },
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
	corePlugins: {
	  preflight: false,
	},
	variants: {
	  extend: {
		scrollBehavior: ["responsive"],
	  },
	},
  };