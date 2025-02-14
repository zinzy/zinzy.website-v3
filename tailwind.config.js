/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
      sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', ],
      serif: [ 'Libre Baskerville', '-apple-system', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif', ],
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
            '--tw-prose-body': theme('colors.gray[600]'),
            '--tw-prose-headings': theme('colors.gray[950]'),
            '--tw-prose-lead': theme('colors.gray[950]'),
            '--tw-prose-links': theme('colors.gray[950]'),
            '--tw-prose-bold': theme('colors.gray[950]'),
            '--tw-prose-counters': theme('colors.gray[950]'),
            '--tw-prose-bullets': theme('colors.gray[950]'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.gray[950]'),
            '--tw-prose-quote-borders': theme('colors.gray[950]'),
            '--tw-prose-captions': theme('colors.gray[950]'),
            '--tw-prose-code': theme('colors.gray[950]'),
            '--tw-prose-pre-code': theme('colors.gray[950]'),
            '--tw-prose-pre-bg': theme('colors.gray[950]'),
            '--tw-prose-th-borders': theme('colors.gray[950]'),
            '--tw-prose-td-borders': theme('colors.gray[950]'),
            // Everything below will be dark mode
            '--tw-prose-invert-body': theme('colors.neutral[400]'),
            '--tw-prose-invert-headings': theme('colors.neutral[300]'),
            '--tw-prose-invert-lead': theme('colors.neutral[300]'),
            '--tw-prose-invert-links': theme('colors.neutral[300]'),
            '--tw-prose-invert-bold': theme('colors.neutral[300]'),
            '--tw-prose-invert-counters': theme('colors.neutral[300]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[300]'),
            '--tw-prose-invert-hr': theme('colors.neutral[600]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[300]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions': theme('colors.neutral[300]'),
            '--tw-prose-invert-code': theme('colors.neutral[100]'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.neutral[800]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[800]'),
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