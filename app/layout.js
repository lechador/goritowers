import Footer from './components/footer'
import Header from './components/header'
import RequestCall from './components/requestCall'
import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import 'leaflet/dist/leaflet.css'

const inter = Inter({ subsets: ['latin'] })

const ninoMtavruli = localFont({
  src: './bpg_nino_mtavruli_normal.woff2',
  display: 'swap',
})

export const metadata = {
  title: 'გორი თაუერსი',
  description: 'გორი თაუერსი - AG Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ka" data-theme="light">
      <body className={ninoMtavruli.className}>
        <Header />
        {children}
        <RequestCall showTitle={true} theme={'garden'} />
        <Footer />
      </body>
    </html>
  )
}
