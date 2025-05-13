import localFont from 'next/font/local';

export const avenir = localFont({
  src: [
    {
      path: '../public/fonts/Avenir-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-avenir',
  display: 'swap',
}); 