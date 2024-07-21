'use client'
import { register } from 'swiper/element/bundle';
import ComponentTitle from './componentTitle';
import 'swiper/swiper-bundle.css';
import { useTranslations } from 'next-intl';
register();



export default function ImageGallery({theme}) {
    const t = useTranslations("Gallery")
    const images = [
        '/gallery/4_result.webp',
        '/gallery/8_result.webp',
        '/gallery/9_result.webp',
        '/gallery/14_result.webp',
        '/gallery/17_result.webp',
        '/gallery/20_result.webp',
        '/gallery/21_result.webp',
        '/gallery/22_result.webp',
        '/gallery/23_result.webp',
        '/gallery/24_result.webp',
        '/gallery/25_result.webp',
        '/gallery/28_result.webp',
        '/gallery/30_result.webp'
    ]
    return (
        <div className='pt-6 pb-10 px-4 ' data-theme={theme}> 
            <ComponentTitle title={t('title')} />
            <swiper-container
                    slides-per-view="2"
                    navigation="true" scrollbar="true"
                    
                >   
                    {images.map((image, index) => (
                        <swiper-slide key={index}>
                            <div className='flex justify-center'> 
                                <img src={image} alt='image' width='80%' />
                            </div>
                        </swiper-slide>
                    ))}
            </swiper-container>
      </div>
    )
}
