'use client'
import Review from "./review";
import { register } from 'swiper/element';
import ComponentTitle from "./componentTitle";
register();

export default function ReviewSlider() {
  return (
    <div className="py-10" data-theme="dark">
        <ComponentTitle title='შეფასებები' />
        <swiper-container slides-per-view="2" >   
            <swiper-slide>
                <Review />
            </swiper-slide>
            <swiper-slide>
                <Review />
            </swiper-slide>
            <swiper-slide>
                <Review />
            </swiper-slide>
            <swiper-slide>
                <Review />
            </swiper-slide>
        </swiper-container>
    </div>
  )
}
