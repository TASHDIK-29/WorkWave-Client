


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import './banner.css'
import { Cursor, Typewriter } from "react-simple-typewriter";

const Banner = () => {

    // const { text } = useTypewriter({
    //     words: ['Discover', 'Explore', 'Memories'],
    //     loop: {},
    //     typeSpeed: 120,
    // })



    return (
        <div className="mt-0">

            <Swiper
                className='h-[100vh]'
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
            >
                <SwiperSlide>
                    <div className='flex flex-col px-10 py-10 justify-center items-center banner-container2 h-full mt-0'>
                        <div className=' space-y-4 md:w-1/2'>
                            <h1 className='text-white font-semibold text-2xl'>Work<span className="text-4xl text-blue-800 font-bold">Wave</span></h1>
                            <h1 className='text-white font-bold text-4xl border-l-4 pl-2 border-blue-700'>
                                Grab Opportunities & Spared
                                <span> </span>
                                <span className="text-blue-600">
                                    {/* {text} */}
                                    <Typewriter
                                        words={['Positivity', 'Happiness']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>

                            </h1>

                            <p className='text-white font-semibold'>WorkWave: Where a ripple of volunteerism becomes a tidal wave of change. Join us in shaping tomorrow, one act of kindness at a time. Dive into the current of giving back today.</p>
                            <button className='py-2 px-3 bg-black rounded-lg text-white font-bold'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-10 py-10 justify-center items-center banner-container3' >
                        <div className='space-y-4 md:w-1/2'>
                            <h1 className='text-white font-semibold text-2xl'>Work<span className="text-4xl text-blue-800 font-bold">Wave</span></h1>
                            <h1 className='text-white font-bold text-4xl border-l-4 pl-2 border-blue-700'>
                                Grab Opportunities & Spared
                                <span> </span>
                                <span className="text-blue-600">
                                    {/* {text} */}
                                    <Typewriter
                                        words={['Positivity', 'Happiness']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>

                            </h1>
                            <p className='text-white font-semibold'>WorkWave: Where a ripple of volunteerism becomes a tidal wave of change. Join us in shaping tomorrow, one act of kindness at a time. Dive into the current of giving back today.</p>
                            <button className='py-2 px-3 bg-black rounded-lg text-white font-bold'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col px-10 py-10 justify-center items-center banner-container'>
                        <div className='space-y-4 md:w-1/2'>
                            <h1 className='text-white font-semibold text-2xl'>Work<span className="text-4xl text-blue-800 font-bold">Wave</span></h1>
                            <h1 className='text-white font-bold text-4xl border-l-4 pl-2 border-blue-700'>
                                Grab Opportunities & Spared
                                <span> </span>
                                <span className="text-blue-600">
                                    {/* {text} */}
                                    <Typewriter
                                        words={['Positivity', 'Happiness']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>

                            </h1>
                            <p className='text-white font-semibold'>WorkWave: Where a ripple of volunteerism becomes a tidal wave of change. Join us in shaping tomorrow, one act of kindness at a time. Dive into the current of giving back today.</p>
                            <button className='py-2 px-3 bg-black rounded-lg text-white font-bold'>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;