'use client'
import { register } from 'swiper/element';
import ComponentTitle from './componentTitle';
register();

export default function ImageGallery({theme}) {
    const images = [
        '/image.jpg',
        '/image.jpg',
        '/image.jpg',
        '/image.jpg',
        '/image.jpg'
    ]
    return (
        <div className='pt-6 pb-10 px-4 ' data-theme={theme}> 
            <ComponentTitle title="გალერეა" />
            <swiper-container
                    slides-per-view="2"
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
