'use client'
import dynamic from 'next/dynamic'

const ImageGallery = dynamic(() => import('./imageGallery'), {
  ssr: false
})

export default ImageGallery
