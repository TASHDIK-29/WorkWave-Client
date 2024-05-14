import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedPost from "./FeaturedPost";
import MostViewed from "./MostViewed";
import Review from "./Review";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home | WorkWave</title>
            </Helmet>
            <Banner />
            <FeaturedPost />
            <MostViewed />
            <Review />
        </div>
    );
};

export default Home;