import './globals.css'
import type { Metadata } from 'next'
import { Albert_Sans, Inter } from 'next/font/google'

const albert = Albert_Sans({ subsets: ['latin'], variable: '--font-albert-sans' })
// const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${albert.variable} font-albert leading-relaxed antialiased selection:bg-sky-300 selection:text-sky-900`}>{children}</body>
    </html>
  )
}
