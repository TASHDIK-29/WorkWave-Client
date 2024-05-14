import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './review.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Review = () => {

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);


    useEffect(() => {

        getReviews();
    }, [user])


    const getReviews = () => {
        fetch('https://assignment-11-server-nu.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }

    const handelSubmit = e => {
        e.preventDefault();

        if (!user) {
            return alert('You Have to login First');
        }

        const review = e.target.review.value;
        const data = {
            author: user?.displayName,
            photo: user?.photoURL,
            review
        }
        // setReview(data);


        fetch('https://assignment-11-server-nu.vercel.app/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully Posted')
                    getReviews();
                }
            })
    }

    // console.log(review);


    // useEffect(() => {
    //     fetch('https://assignment-11-server-nu.vercel.app/review', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 alert('Successfully Posted')
    //             }
    //         })
    // }, [review])

    return (
        <div className="my-20">
            <h1 className="text-4xl font-bold text-center mb-12">We Care Your Thoughts</h1>
            <div className="flex flex-col md:flex-row items-center review-container py-20">
                <div className="w-full md:w-2/3 lg:w-1/2 ">
                    <div className="p-4 w-full md:w-4/6 mx-auto ">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // loop={true}


                            // pagination={{
                            //     clickable: true,
                            // }}
                            // navigation={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                reviews?.map(review => <SwiperSlide key={review._id}>
                                    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                        <div className="flex justify-center -mt-16 md:justify-end">
                                            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={review.photo} />
                                        </div>

                                        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Thoughts</h2>

                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{review.review}</p>

                                        <div className="flex justify-end mt-4">
                                            <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{review.author}</a>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
                <div className="w-full  lg:w-1/2 px-4 lg:px-10 py-4 flex flex-col items-end">
                    <form onSubmit={handelSubmit} className="w-full lg:w-2/3 relative">
                        <label htmlFor="Description" className="block text-lg font-bold text-slate-400">Put tour Thoughts</label>

                        <textarea
                            placeholder="lorem..."
                            name="review"
                            className="block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-52 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300 mb-4"
                        ></textarea>
                        {/* <input className="border p-2 border-red-600 absolute right-0" type="submit" value="Submit" /> */}
                        <div className="absolute right-0">
                            <button className="relative px-6 py-3 font-bold text-black group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-400 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                                <span className="relative">
                                    <input className="" type="submit" value="Submit" />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;