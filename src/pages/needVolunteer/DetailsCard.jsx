import { Link, useLoaderData } from "react-router-dom";
import placeHolder from '../../assets/user.png'

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const DetailsCard = () => {

    const post = useLoaderData();
    console.log(post);

    const { _id, thumbnail, postTitle, orgName, orgEmail, orgPhoto, noOfVolunteers, location, description, deadline, category, view } = post;

    const handelNoOfVolunteer = () => {
        alert('No Vacancy')
    }

    return (
        <div className="md:w-2/3 mx-auto my-20 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover w-full h-64" src={thumbnail} alt="Article" />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                    <h1 className="block mt-2 text-xl font-semibold text-white transition-colors duration-300 transform ">{postTitle}</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="mt-2 md:flex justify-between md:w-2/3 space-y-2">
                    <h1 className="text-white">Deadline : {deadline}</h1>
                    <h1 className="text-white">No. of Volunteer : {noOfVolunteers}</h1>
                    <p className="flex items-center gap-2 text-white"><IoEyeSharp /> {view}</p>
                </div>

                <div className="my-4">
                    <h1 className="text-white text-xl font-semibold flex items-center gap-2"><FaMapMarkerAlt className="text-xl text-white" />{location}</h1>
                </div>

                <div className="mt-4">
                    <div className="md:flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={orgPhoto ? orgPhoto : placeHolder} alt="Avatar" />
                            <div>
                                <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{orgName}</h1>

                                <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{orgEmail}</h1>
                            </div>
                        </div>
                        {noOfVolunteers > 0 ? <Link to={`/beAVolunteer/${_id}`} className="text-white p-2">
                            

                            <button className="relative inline-flex items-center mt-2 px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center mt-2 justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative">Be a Volunteer</span>
                            </button>
                        </Link>
                            : <button onClick={handelNoOfVolunteer} className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Be a Volunteer</span>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;