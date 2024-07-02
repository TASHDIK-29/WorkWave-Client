import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";
import Modal from "./home/Modal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const MainLayout = () => {


    const [isExist, setIsExist] = useState(true);
    const [selection, setSelection] = useState('');
    const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     window.scroll(0, 0);
    // }, []);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`http://localhost:5000/user/${user?.email}`)
            console.log(res.data);

            if(res.data.result === false){
                setIsExist(false)
            }
        }

       

        fetchData();
    }, [user])



    console.log(isExist);

    const handleSelection = (event) => {
        console.log('User selected:', event.target.value);
        setSelection(event.target.value);

        const userPref = {
            email: user?.email,
            preference: event.target.value
        }

        const res = axios.post('http://localhost:5000/user', userPref);

        console.log(res.data);





        setIsExist(true)
        // Save the user's selection (e.g., send to API or update local storage)

    };


    return (
        <div className="relative">
            <Nav />
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            {!isExist && user && <Modal handleSelection={handleSelection} call='modal call'></Modal>}
            <Footer />
            <div className="fixed bottom-4 right-4">
                <button className="border rounded-full p-4 bg-slate-500"><a href="#navBar"><IoMdArrowRoundUp className="text-white" /></a></button>
            </div>
        </div>
    );
};

export default MainLayout;