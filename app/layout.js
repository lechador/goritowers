import { ToastContainer } from 'react-toastify';
import localFont from 'next/font/local'
import './globals.css'
import 'leaflet/dist/leaflet.css'
import 'react-toastify/dist/ReactToastify.css';
import Nprogress from './components/nprogress';
import TawkChat from './components/tawk';
import Script from 'next/script';
import Head from 'next/head';

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
        <Script id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1000407334820321');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1000407334820321&ev=PageView&noscript=1" />
        </noscript>
        <Nprogress />
        <ToastContainer />
        <TawkChat />
      </body>
    </html>
  )
}
