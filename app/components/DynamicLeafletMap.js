'use client'
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('./leafletMap'), {
  ssr: false,
  loading: () => <p>loading...</p>
})

export default LeafletMap
