import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { MdOutlineDeleteForever } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
// import { FaUserEdit } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyRequest = () => {

    const { user } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData();
    }, [user])

    const getData = () => {
        fetch(`https://assignment-11-server-nu.vercel.app/myRequest/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })

    }



    const handelCancel = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://assignment-11-server-nu.vercel.app/request?id=${id}&email=${user?.email}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            getData();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })



            }
        });
        

    }


    return (
        <div>
        <h1 className="text-3xl font-bold my-5 text-center">{user?.displayName ? user.displayName : 'Your'}'s Request List</h1>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-xl font-semibold">Post Title</th>
                        <th className="text-xl font-semibold">Category</th>
                        <th className="text-xl font-semibold">Volunteers Need</th>
                        <th className="text-xl font-semibold">Deadline</th>
                        {/* <th></th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        posts.map((post, idx) => <tr key={idx}>
                            <th className="text-lg font-normal">{idx + 1}</th>
                            <td className="text-lg font-normal">{post.postTitle}</td>
                            <td className="text-lg font-normal">{post.category}</td>
                            <td className="text-lg font-normal">{post.noOfVolunteers}</td>
                            <td className="text-lg font-normal">{post.deadline}</td>
                            {/* <td>
                                <button>
                                    <Link to={`/update/${post._id}`}
                                        data-tooltip-id="update" data-tooltip-content="Update"><FaUserEdit className="text-2xl text-rose-600 font-bold" /></Link>
                                    <Tooltip id="update"
                                        place="top"
                                    />
                                </button>
                            </td> */}
                            <td>
                                <button className="border px-3 py-1 rounded-lg bg-black text-white text-base font-medium" onClick={() => handelCancel(post._id)}>Cancel</button>
                            </td>
                        </tr>)
                    }
                    {
                        posts.length === 0 && <tr>
                            <th></th>
                            <td className="text-xl font-bold">None</td>
                            <td className="text-xl font-bold">None</td>
                            <td className="text-xl font-bold">None</td>
                            <td className="text-xl font-bold">None</td>
                        </tr>
                    }
                    {/* const {visitorsPerYear, travelTime, spotName, seasonality, photo, avgCost, _id} = spot; */}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyRequest;