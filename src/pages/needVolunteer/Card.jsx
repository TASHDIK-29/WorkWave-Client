import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";


const Card = ({ post }) => {

    // console.log(post);
    const { _id, thumbnail, postTitle, orgName, orgEmail, noOfVolunteers, location, description, deadline, category, view } = post;
    return (
        <div className="flex flex-col p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{category}</span>
                <h2 className="text-xl font-semibold tracking-wide">{postTitle}</h2>
            </div>
            <div className="flex justify-between items-center px-2 flex-1">
                <p className="dark:text-gray-800">Deadline : {deadline}</p>
                <p className="flex items-center gap-2"><IoEyeSharp /> {view}</p>
            </div>
            {/* <Link to={`/details/${_id}`} className="border border-red-600 p-2 mx-auto">View Details</Link> */}

            <div className="flex justify-center mt-2">
                <Link to={`/details/${_id}`} className="relative inline-block px-4 py-2 font-medium group w-full">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white flex justify-center font-bold">View Details</span>
                </Link> 
            </div>
        </div>
    );
};

export default Card;