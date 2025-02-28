import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				dark: '#1b1b1b',
				light: '#f5f5f5',
				yellow: '#FFFF00',
				primary: '#B63E96', // 240,86,199
				primaryDark: '#58E6D9', // 80,230,217
				bgAuth: '#043f34'
			}
		}
	},
	plugins: []
} satisfies Config
