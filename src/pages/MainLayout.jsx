import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";

const MainLayout = () => {


    return (
        <div className="relative">
            <Nav />
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer />
            <div className="fixed bottom-4 right-4">
                <button className="border rounded-full p-4 bg-slate-500"><a href="#navBar"><IoMdArrowRoundUp className="text-white" /></a></button>
            </div>
        </div>
    );
};

export default MainLayout;