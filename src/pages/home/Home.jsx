import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedPost from "./FeaturedPost";
import MostViewed from "./MostViewed";
import Review from "./Review";
import { useEffect } from "react";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import axios from "axios";
// import Modal from "./Modal";

const Home = () => {

    // const [isExist, setIsExist] = useState(true);

    // const { user } = useContext(AuthContext);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    // useEffect(() => {
    //     if (user) {
    //         const res = axios.get(`http://localhost:5000/user/${user?.email}`)

    //         console.log(res.data);

    //         if (!res.data) {
    //             setIsExist(false)
    //         }
    //     }
    // }, [user])

    // console.log(isExist);

    // const handleSelection = (selection) => {
    //     console.log('User selected:', selection);
    //     setIsExist(true)
    //     // Save the user's selection (e.g., send to API or update local storage)
        
    // };

    return (
        <div className="space-y-14">
            <Helmet>
                <title>Home | WorkWave</title>
            </Helmet>
            <Banner />
            {/* {!isExist && user && <Modal handleSelection={handleSelection} call='modal call'></Modal>} */}
            <FeaturedPost />
            <MostViewed />
            <Review />
            
        </div>
    );
};

export default Home;