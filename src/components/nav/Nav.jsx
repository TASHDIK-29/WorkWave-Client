import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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

    // My Profile Dropdown

    const [isClicked, setIsClicked] = useState(false);

    const toggleDropdown = () => {
        setIsClicked(!isClicked);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <nav id='navBar' className="relative bg-white shadow ">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between ">
                        <Link to='/' className='text-3xl font-semibold'>
                            {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" /> */}
                            Work<span className='text-4xl font-bold'>Wave</span>
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
                    <div className={`${isOpen ? "block" : "hidden"} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-1/2 lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between `}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:justify-around lg:mx-8 gap-2  w-2/3">
                            <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-black text-black font-bold' : 'text-slate-500 font-medium'} to='/' >Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'border-b-2 border-black text-black font-bold' : 'text-slate-500 font-medium'} to='/needVolunteer'>Need Volunteer</NavLink>

                            <div className="relative inline-block">
                                {/* Dropdown toggle button */}
                                <button onClick={toggleDropdown} className="relative z-10 flex items-center p-2 text-sm border-2 rounded-lg border-black">
                                    <span className="mx-1 text-slate-600 font-bold text-sm">My Profile</span>
                                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                                    </svg>
                                </button>

                                {/* Dropdown menu */}
                                {isClicked && (
                                    <div onClick={closeDropdown} className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                                        <a href="#" className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={user?.photoURL} alt="jane avatar" />
                                            <div className="mx-1">
                                                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">{user?.displayName}</h1>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                                            </div>
                                        </a>

                                        <hr className="border-gray-200 dark:border-gray-700" />

                                        <Link to='/addPost' className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Add Volunteer Post</Link>
                                        <Link to='/postAndRequest' className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Manage My Post</Link>
                                        {/* <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">My Volunteer Requested Post</a> */}


                                    </div>
                                )}
                            </div>

                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">


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
                                    : <Link to='/login' className="flex items-center justify-center px-4 py-2 text-base font-medium leading-6  whitespace-no-wrap bg-black border-2 border-transparent rounded-full shadow-sm text-white  focus:outline-none">
                                        Login
                                    </Link>


                            }



                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
