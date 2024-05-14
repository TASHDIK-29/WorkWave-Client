import { useEffect, useState } from "react";
import Card from "../needVolunteer/Card";

const MostViewed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-nu.vercel.app/mostViewed')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Top Viewed Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {
                    posts.map(post => <Card key={post._id} post={post}></Card>)
                }
            </div>
        </div>
    );
};

export default MostViewed;