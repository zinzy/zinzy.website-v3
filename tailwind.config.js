/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/*.md", "themes/butterchicken/layouts/**/*.html"],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Times New Roman', 'sans-serif'],
      mono: ['Andalé Mono', 'monospace'],
    }, 
    extend: {
      typography: ({ theme }) => ({ 
        default: {
          css: {
            color: theme('colors.gray'),
          }
        },
        gray: {
          css: {
            // a: { 
            //   color: theme('colors.black'),
            // },
            'h1,h2,h3,h4,h5,h6': { 
              fontSize: '100%',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '400',
              textTransform: 'uppercase',
            },
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.red[600]'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-captions': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.black'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
            // Everything below will be dark mode
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.blue[300]'),
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
            '--tw-prose-invert-th-borders': theme('colors.zinc[600]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[700]'),
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}