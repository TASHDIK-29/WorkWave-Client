import { Link, useLoaderData } from "react-router-dom";
import placeHolder from '../../assets/user.png'

import { FaMapMarkerAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const DetailsCard = () => {

    const post = useLoaderData();
    console.log(post);

    const { _id, thumbnail, postTitle, orgName, orgEmail, orgPhoto, noOfVolunteers, location, description, deadline, category, view } = post;

    const handelNoOfVolunteer = () =>{
        alert('No Vacancy')
    }

    return (
        <div className="w-2/3 mx-auto my-20 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover w-full h-64" src={thumbnail} alt="Article" />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
                    <h1 className="block mt-2 text-xl font-semibold text-white transition-colors duration-300 transform ">{postTitle}</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>

                <div className="mt-2 flex justify-between w-2/3">
                    <h1 className="text-white">Deadline : {deadline}</h1>
                    <h1 className="text-white">No. of Volunteer : {noOfVolunteers}</h1>
                    <p className="flex items-center gap-2 text-white"><IoEyeSharp /> {view}</p>
                </div>

                <div className="my-4">
                    <h1 className="text-white text-xl font-semibold flex items-center gap-2"><FaMapMarkerAlt className="text-xl text-white" />{location}</h1>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={orgPhoto ? orgPhoto : placeHolder} alt="Avatar" />
                            <div>
                                <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{orgName}</h1>

                                <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{orgEmail}</h1>
                            </div>
                        </div>
                        {noOfVolunteers > 0 ? <Link to = {`/beAVolunteer/${_id}`} className="text-white border border-red-800 p-2">Be a Volunteer</Link>
                        : <button onClick={handelNoOfVolunteer} className="text-white border border-red-800 p-2">Be a Volunteer</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;