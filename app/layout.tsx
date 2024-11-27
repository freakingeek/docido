import 'swiper/css'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import Phone from '@/components/Phone'

const estedad = localFont({
  src: '../public/assets/fonts/Estedad-FD.woff2',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    default: 'داکیدو',
    template: '%s - داکیدو',
  },
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={estedad.className}>
        <section className="max-w-screen-sm mx-auto">{children}</section>
        {/* <Footer className="mt-44" /> */}
      </body>
    </html>
  )
}
