import { useEffect, useState } from "react";
import Card from "../needVolunteer/Card";
import { Link } from "react-router-dom";

const FeaturedPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-nu.vercel.app/sortedPost')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Featured Posts</h1>
            <div className="grid grid-cols-3 gap-6 my-6">
                {
                    posts.map(post => <Card key={post._id} post={post}></Card>)
                }
            </div>
            <div className="flex justify-center">

                <Link to='/needVolunteer' className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">See All</span>
                    <span className="relative invisible">Button Text</span>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedPost;