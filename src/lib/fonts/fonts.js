import { DynaPuff, Inter, Roboto } from 'next/font/google'

export const dynapuff = DynaPuff({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dynapuff',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})