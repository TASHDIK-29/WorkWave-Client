import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

import reg from '../../assets/reg.jpg'
import logo from '../../assets/W.png'
import { Helmet } from "react-helmet-async";

const Register = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { user, setUser, updateUserProfile, createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();


    const handelSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // console.log(name, email, photo, password);

        if (!/^(?=.*[A-Z]).*$/.test(password)) {
            toast.error('Password must contain at least one Uppercase Character');
            return;
        }

        if (!/^(?=.*[a-z]).*$/.test(password)) {
            toast.error('Password must contain at least one Lowercase Character');
            return;
        }

        if (!/^.{6,}$/.test(password)) {
            toast.error('Password must contain at least six Character');
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);

                updateUserProfile(name, photo)
                setUser({ ...res?.user, displayName: name, photoURL: photo })

                navigate('/');

                const email = res.user.email;
                const user = { email }
                console.log(user);
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {

                        console.log(res.data);

                    }).catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
                if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('This email already been used');
                }
            })


    }


    const handelGoogle = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                navigate('/');

                const email = res.user.email;
                const user = { email }
                console.log(user);
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {

                        console.log(res.data);

                    }).catch(err => {
                        console.log(err);
                    })

            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="flex flex-row-reverse justify-around w-full  mx-auto overflow-hidden bg-white rounded-lg shadow-lg p-2 md:p-12">
            <Helmet>
                <title>Sign Up | WorkWave</title>
            </Helmet>
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${reg})` }}></div>

            <form onSubmit={handelSignUp} className="w-full px-6 py-8 md:px-8 lg:w-2/5 border-2 border-black">
                <div className="flex justify-center mx-auto h-14">
                    <img className="w-20 h-14" src={logo} alt="Logo" />
                </div>

                <p className="mt-3 text-xl font-semibold text-center text-gray-600 ">
                    Welcome To WorkWave
                </p>


                <a onClick={handelGoogle} className="cursor-pointer flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-gray-50 ">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <a href="#" className="text-xs text-center text-gray-500 font-bold uppercase hover:underline">or Sign Up with email</a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">Your Name</label>
                    <input className="block w-full px-4 py-2 text-gray-700 font-medium bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" name="name" />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">Email Address</label>
                    <input className="block w-full px-4 py-2 text-gray-700 font-medium bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" name="email" />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 ">Photo URL</label>
                    <input className="block w-full px-4 py-2 text-gray-700 font-medium bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" name="photo" />
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block mb-2 text-sm font-medium text-gray-600 ">Password</label>
                    </div>

                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password" />
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to='/login' href="#" className="text-xs text-gray-500 font-bold uppercase hover:underline">or sign in</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </form>
        </div>
    );
};

export default Register;