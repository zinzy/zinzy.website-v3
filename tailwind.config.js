/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/*.md", 
    "./src/**/*.{html,js}",
    "./themes/softlife/layouts/**/*.html"
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '1000px',
      },
    },
    fontFamily: {
      sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      serif: ['FreightText Pro Book', 'serif'],
      mono: ['SF Mono', 'monospace'],
    }, 
    extend: {
			animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
      typography: ({ theme }) => ({ 
        default: {
          css: {
            color: theme('colors.gray'),
          },
        },
        gray: {
          css: { 
            '--tw-prose-body': theme('colors.gray[950]'),
            '--tw-prose-headings': theme('colors.gray[950]'),
            '--tw-prose-lead': theme('colors.gray[950]'),
            '--tw-prose-links': theme('colors.gray[950]'),
            '--tw-prose-bold': theme('colors.gray[950]'),
            '--tw-prose-counters': theme('colors.gray[950]'),
            '--tw-prose-bullets': theme('colors.gray[950]'),
            '--tw-prose-hr': theme('colors.gray[950]'),
            '--tw-prose-quotes': theme('colors.gray[950]'),
            '--tw-prose-quote-borders': theme('colors.gray[950]'),
            '--tw-prose-captions': theme('colors.gray[950]'),
            '--tw-prose-code': theme('colors.gray[950]'),
            '--tw-prose-pre-code': theme('colors.gray[950]'),
            '--tw-prose-pre-bg': theme('colors.gray[950]'),
            '--tw-prose-th-borders': theme('colors.gray[950]'),
            '--tw-prose-td-borders': theme('colors.gray[950]'),
            // Everything below will be dark mode
            '--tw-prose-invert-body': theme('colors.zinc[400]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[300]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[300]'),
            '--tw-prose-invert-hr': theme('colors.zinc[600]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[300]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.zinc[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.zinc[800]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[800]'),
          }
        }
      })
    }
  },
  plugins: [
    require(
      '@tailwindcss/typography',
      'tailwind-container-break-out'
    ),
  ],
}