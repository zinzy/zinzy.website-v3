/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/*.md", 
    "./src/**/*.{html,js}",
    "./themes/zadie/layouts/**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
      serif: ['Times New Roman', 'sans-serif'],
      mono: ['Andalé Mono', 'monospace'],
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
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.gray[950]'),
            '--tw-prose-lead': theme('colors.gray[500]'),
            '--tw-prose-links': theme('colors.gray[950]'),
            '--tw-prose-bold': theme('colors.gray[800]'),
            '--tw-prose-counters': theme('colors.gray[800]'),
            '--tw-prose-bullets': theme('colors.gray[800]'),
            '--tw-prose-hr': theme('colors.gray[200]'),
            '--tw-prose-quotes': theme('colors.gray[600]'),
            '--tw-prose-quote-borders': theme('colors.gray[200]'),
            '--tw-prose-captions': theme('colors.gray[800]'),
            '--tw-prose-code': theme('colors.gray[800]'),
            '--tw-prose-pre-code': theme('colors.gray[800]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.gray[200]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
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