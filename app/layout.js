import { ToastContainer } from 'react-toastify';
import localFont from 'next/font/local'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import 'react-toastify/dist/ReactToastify.css';
import Nprogress from './components/nprogress';

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
        {children}
        <Nprogress />
        <ToastContainer />
      </body>
    </html>
  )
}
