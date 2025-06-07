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

export const agraham = localFont({
  src: '../public/fonts/agraham.personal-use.otf',
  variable: '--font-agraham',
  display: 'swap',
}); 

export const brillant = localFont({
  src: '../public/fonts/brillant.otf',
  variable: '--font-brillant',
  display: 'swap',
})

export const specialelite = localFont({
  src: '../public/fonts/specialelite.ttf',
  variable: '--font-specialelite',
  display: 'swap',
})

export const quivert = localFont({
  src: '../public/fonts/quivert.otf',
  variable: '--font-quivert',
  display: 'swap',
})

export const deiya = localFont({
  src: '../public/fonts/deiya.otf',
  variable: '--font-deiya',
  display: 'swap',
})