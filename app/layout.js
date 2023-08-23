import Footer from './components/footer'
import Header from './components/header'
import RequestCall from './components/requestCall'
import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const ninoMtavruli = localFont({
  src: './bpg_nino_mtavruli_normal.woff2',
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ka" data-theme="light">
      <body className={ninoMtavruli.className}>
        <Header />
        {children}
        <RequestCall />
        <Footer />
      </body>
    </html>
  )
}
