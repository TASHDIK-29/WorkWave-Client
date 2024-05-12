import Banner from "./Banner";
import FeaturedPost from "./FeaturedPost";
import MostViewed from "./MostViewed";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedPost />
            <MostViewed />
            <Review />
        </div>
    );
};

export default Home;