import { useEffect, useState } from "react";
import Card from "../needVolunteer/Card";
import { Link } from "react-router-dom";

const FeaturedPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sortedPost')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
    }, [])

    return (
        <div>
            <h1 className="text-3xl text-center my-5">Featured post</h1>
            <div className="grid grid-cols-3 gap-6 my-6">
                {
                    posts.map(post => <Card key={post._id} post={post}></Card>)
                }
            </div>
            <div className="flex justify-center">
                <Link className="border border-red-700 p-2 my-3" to = '/needVolunteer'>See All</Link>
            </div>
        </div>
    );
};

export default FeaturedPost;