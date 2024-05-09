import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Nav = () => {

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);

    const handelMouseOver = () => {
        setMouseOver(true);
    }

    const handelMouseOut = () => {
        setMouseOver(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const handelLogout = () => {
        logOut();
        navigate('/login');
        setMouseOver(false);
    }

    return (
        <nav className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to='/' className='text-3xl'>
                            {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" /> */}
                            WorkWave
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg className={isOpen ? "hidden" : "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                                <svg className={!isOpen ? "hidden" : "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={`${isOpen ? "block" : "hidden"} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
                            <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">All Posts</a>
                            <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">My Profile</a>
                            {/* <a href="#" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Experts</a> */}
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            {/* <button className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button> */}

                            {/* <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar"/>
                                </div>

                                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                            </button> */}

                            {/* onClick={toggleDropdown} className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none" */}

                            {
                                user ?
                                    <button onMouseOver={handelMouseOver} onMouseOut={handelMouseOut} className=" items-center focus:outline-none relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white " aria-label="toggle profile dropdown">
                                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                            <img referrerPolicy='no-referrer' src={user?.photoURL} className="object-cover w-full h-full" alt="avatar" />
                                        </div>

                                        {/* Dropdown menu */}
                                        {mouseOver && (
                                            <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                                                <h1 className="cursor-default block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">{user?.displayName}</h1>

                                                {/* <div onClick={handelLogout} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"> Sign Out </div> */}

                                                <div onClick={handelLogout} className="flex justify-center items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z" fill="currentColor"></path>
                                                    </svg>

                                                    <span className="mx-1">
                                                        Sign Out
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                    </button>
                                    : <Link to='/login' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link>
                            }


                            {/* <Link to = '/login' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
