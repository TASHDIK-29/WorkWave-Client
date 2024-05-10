import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bg1 from "../../assets/carousel1.jpg"
import bg2 from "../../assets/carousel2.jpg"
import bg3 from "../../assets/carousel3.jpg"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Banner = () => {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={bg1} text='Slider text 1'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bg2} text='Slider text 2'></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bg3} text='Slider text 3'></Slide>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;