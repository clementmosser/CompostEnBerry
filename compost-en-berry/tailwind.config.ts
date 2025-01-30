import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'green-berry': {
  				'100': '#10A29A',
  				'200': '#0B958D'
  			},
			'green-berry-l': {
  				'100': '#F3F6E3',
  				'200': '#E3E6D0'
  			},
			'yellow-berry': {
  				'100': '#EBB04E',
  				'200': '#FFC25C'
  			},
			'beige-berry': {
  				'100': '#F2E9D9',
  				'200': '#E3DBCC'
  			},
			'orange-berry': {
  				'100': '#EE964F',
  				'200': '#E08C48'
  			},
			'helloasso': "#2E2F5E",
			colors: {
				'berry-green': '#10A29A',
				'berry-green-l': "#F3F6E3",
				'berry-yellow' : '#EBB04E',
				'berry-beige' : '#F2E9D9',
				'helloasso': "#2E2F5E",
			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			scroll: 'scroll 30s linear infinite',
		},
		keyframes: {
			scroll: {
			  '0%': { transform: 'translateX(0)' },
			  '100%': { transform: 'translateX(-50%)' },
			}
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
