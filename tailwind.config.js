/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/*.md", "themes/butterchicken/layouts/**/*.html"],
  theme: {
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Times New Roman', 'sans-serif'],
    }, 
    extend: {
      typography: ({ theme }) => ({ 
        default: {
          css: {
            color: theme('colors.blue'),
          }
        },
        blue: {
          css: {
            // a: { 
            //   color: theme('colors.blue[900]'),
            // },
            'h1,h2,h3,h4,h5,h6': { 
              fontSize: '100%',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '400',
              textTransform: 'uppercase',
            },
            // '--tw-prose-body': theme('colors.blue[900]'),
            // '--tw-prose-headings': theme('colors.blue[900]'),
            '--tw-prose-body': theme('colors.blue[900]'),
            '--tw-prose-headings': theme('colors.blue[900]'),
            '--tw-prose-lead': theme('colors.blue[900]'),
            '--tw-prose-links': theme('colors.blue[900]'),
            '--tw-prose-bold': theme('colors.blue[900]'),
            '--tw-prose-counters': theme('colors.blue[900]'),
            '--tw-prose-bullets': theme('colors.blue[900]'),
            '--tw-prose-hr': theme('colors.blue[900]'),
            '--tw-prose-quotes': theme('colors.blue[900]'),
            '--tw-prose-quote-borders': theme('colors.blue[900]'),
            '--tw-prose-captions': theme('colors.blue[900]'),
            '--tw-prose-code': theme('colors.blue[900]'),
            '--tw-prose-pre-code': theme('colors.blue[900]'),
            '--tw-prose-pre-bg': theme('colors.blue[900]'),
            '--tw-prose-th-borders': theme('colors.blue[900]'),
            '--tw-prose-td-borders': theme('colors.blue[900]'),
            // Everything below will be dark mode
            '--tw-prose-invert-body': theme('colors.zinc[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.zinc[300]'),
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