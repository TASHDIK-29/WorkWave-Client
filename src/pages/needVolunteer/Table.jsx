
const Table = ({ post }) => {

    console.log(post);
    const { _id, thumbnail, postTitle, orgName, orgEmail, noOfVolunteers, location, description, deadline, category } = post;


    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
            <td className="p-3">
                <p>{category}</p>
            </td>
            <td className="p-3">
                <p>{postTitle}</p>
            </td>
            <td className="p-3">
                <p>{deadline}</p>
            </td>
            <td className="p-3">
                <p>{noOfVolunteers}</p>
            </td>
            <td className="p-3 text-right">
                {/* <p>$15,792</p> */}
            </td>
            <td className="p-3 text-right">
                <button className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span>Details</span>
                </button>
            </td>
        </tr>
    );
};

export default Table;