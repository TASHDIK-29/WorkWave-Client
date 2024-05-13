import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";

const MainLayout = () => {

    // const [scrollPosition, setScrollPosition] = useState(0);


    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosition(window.pageYOffset);
    //     };

    //     // Add event listener to update scroll position
    //     window.addEventListener('scroll', handleScroll);

    //     // Remove event listener on cleanup
    //     // return () => {
    //     //     window.removeEventListener('scroll', handleScroll);
    //     // };
    // }, [scrollPosition]);

    return (
        <div className="relative">
            <Nav />
            <Outlet></Outlet>
            <Footer />
            {/* {scrollPosition > 730 & <div className="fixed bottom-4 right-4">
                <button className="border rounded-full p-4 bg-slate-500"><a href="#navBar"><IoMdArrowRoundUp className="text-white" /></a></button>
            </div>} */}
            <div className="fixed bottom-4 right-4">
                <button className="border rounded-full p-4 bg-slate-500"><a href="#navBar"><IoMdArrowRoundUp className="text-white" /></a></button>
            </div>
        </div>
    );
};

export default MainLayout;