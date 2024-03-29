import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    //공통 컬러입니다
    colors: {
      neutral: {
        100: '#030303',
        90: '#1A1A1A',
        80: '#333333',
        70: '#4D4D4D',
        60: '#666666',
        50: '#808080',
        40: '#999999',
        30: '#B3B3B3',
        20: '#CCCCCC',
        10: '#E6E6E6',
        5: '#F3F3F3',
        white: '#FFFFFF',
      },
      primary: {
        100: '#0059FF',
        90: '#196AFF',
        80: '#337AFF',
        70: '#4C8BFF',
        60: '#669BFF',
        50: '#7FACFF',
        40: '#99BDFF',
        30: '#B2CDFF',
        20: '#CCDEFF',
        10: '#E5EEFF',
        5: '#F5F8FF',
        white: '#FFFFFF',
      },
      stroke: { 
        blue: '#99BDFF', 
        10: '#E6E6E6', 
        5: '#F3F3F3'
      },
      background: {
        100: '#666666',
        50: {
          opacity : '#0000004D',
          basic: '#B5B5B5',
        },
        5: '#F8F8F9',
        blue: '#F5F8FF',
  
      },
      system: {
        warning: '#FF0000',
        success: '#07A320',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
