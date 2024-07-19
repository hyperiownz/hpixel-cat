import localFont from 'next/font/local'
export const pixelFonts = localFont({
    src: [
      {
        path: './fonts/DePixelIllegible.otf',
        weight: '100',
        style: 'normal',
      },
      {
        path: './fonts/DePixelKlein.otf',
        weight: '300',
        style: 'italic',
      },
      {
        path: './fonts/DePixelBreit.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './fonts/DePixelHalbfett.otf',
        weight: '500',
        style: 'italic',
      },
      {
        path: './fonts/DePixelBreitFett.otf',
        weight: '600',
        style: 'normal',
      },
    ],
  })