import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'
import './globalicons.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <section>
          <nav>
            <Header />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>
        </section>
      </body>
    </html>
  )
}
