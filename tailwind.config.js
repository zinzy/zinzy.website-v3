/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["themes/nostyleplease/content/*.md", "themes/nostyleplease/layouts/**/*.html"],
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
            a: { 
              color: theme('colors.blue[900]'),
            },
            'h1,h2,h3,h4,h5,h6': { 
              fontSize: '100%',
              fontFamily: 'Arial, sans-serif',
              fontWeight: '400',
              textTransform: 'uppercase',
            },
            '--tw-prose-body': theme('colors.blue[900]'),
            '--tw-prose-headings': theme('colors.blue[900]'),
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}