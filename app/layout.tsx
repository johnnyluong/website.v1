import './globals.css'
import type { Metadata } from 'next'
import { Albert_Sans, Inter } from 'next/font/google'

const font = Albert_Sans({ subsets: ['latin'], variable: '--font-albert-sans' })
// const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johnny Luong',
  description: 'Software Engineering Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${font.variable} font-albert`}>{children}</body>
    </html>
  )
}
