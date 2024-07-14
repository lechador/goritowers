import { ToastContainer } from 'react-toastify';
import localFont from 'next/font/local'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import 'react-toastify/dist/ReactToastify.css';
import Nprogress from './components/nprogress';
import TawkChat from './components/tawk';

const ninoMtavruli = localFont({
  src: './bpg_nino_mtavruli_normal.woff2',
  display: 'swap',
})

export const metadata = {
  title: 'გორი თაუერსი',
  description: 'გორი თაუერსი - AG Development',
  other: {
    'facebook-domain-verification': 'r51xzddhk797n9us9pxpfvwg6dczu1',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ka" data-theme="light">
      <body className={ninoMtavruli.className}>
        {children}
        <Nprogress />
        <ToastContainer />
        <TawkChat />
      </body>
    </html>
  )
}
