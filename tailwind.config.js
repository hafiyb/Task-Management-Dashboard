/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      offWhite: '#F8F9FB',
      grayBackground: '#ECEFF4',
      blueMain: '#8BB2F2',
      blueHover: '#7DA0D9',
      redMain: '#F06464',
      grayText: '#666666',
      darkText: '#333333',
    },
    height: {
      navbar: '64px',
      screen: 'calc(100vh - 64px)',
    },
    width: {
      sidebar: '64px',
    },
    // minWidth:{
    //   sidebar: '64px',
    // },
    plugins: [],
  },
};
