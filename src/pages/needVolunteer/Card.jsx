
const Card = ({post}) => {

    console.log(post);
    const {_id, thumbnail, postTitle, orgName, orgEmail, noOfVolunteers, location, description, deadline, category} = post ;
    return (
        <div className="p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={thumbnail} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{category}</span>
                <h2 className="text-xl font-semibold tracking-wide">{postTitle}</h2>
            </div>
            <p className="dark:text-gray-800">Deadline : {deadline}</p>
            <button className="border border-red-600 p-2 mx-auto">View Details</button>
        </div>
    );
};

export default Card;