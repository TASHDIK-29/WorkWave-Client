import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { TfiLayoutMenuV } from "react-icons/tfi";
import Card from "./Card";
import Table from "./Table";


const NeedVolunteer = () => {

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search);

    useEffect(() => {
        fetch(`https://assignment-11-server-nu.vercel.app/post?search=${search}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPosts(data)
            })
    }, [search])

    // console.log(posts);

    const [toggle, setToggle] = useState(false);
    console.log(toggle);


    // Search Operation

    const handelSearch = e => {
        e.preventDefault();

        const text = e.target.search.value;
        // console.log(text);
        setSearch(text);
    }


    return (
        <div>
            <div className="flex justify-between items-center my-6 p-5">
                {/* <div className="flex items-center gap-2">
                    <FaSearch />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div> */}
                <div className="flex items-center w-1/2">
                    <form onSubmit={handelSearch} className="w-1/2 flex">
                        <input className="p-2  w-full border" type="text" name="search" placeholder="search by title" />
                        {/* <input className="border border-red-600 p-2" type="submit" value="Search" /> */}

                        <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-black  hover:bg-gradient-to-r hover:from-black hover:to-black text-white hover:ring-2 hover:ring-offset-2 hover:ring-black transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease "></span>
                            <span className="flex justify-center">
                                <input className="" type="submit" value="Search" />
                            </span>
                        </button>
                    </form>
                </div>

                <div className="flex gap-4 items-center text-2xl">
                    <button onClick={() => setToggle(false)}><RiLayoutGrid2Fill /></button>
                    <button onClick={() => setToggle(true)}><TfiLayoutMenuV /></button>
                </div>
            </div>

            <h1 className="text-4xl font-bold text-center my-4">Grab The Opportunity</h1>

            {!toggle &&
                <div className="grid grid-cols-3 gap-6 my-10">
                    {
                        posts?.map(post => <Card key={post._id} post={post}></Card>)
                    }
                </div>
            }

            {toggle &&
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-300">
                                <tr className="text-left">
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Post Title</th>
                                    <th className="p-3">Deadline</th>
                                    <th className="p-3">No. of Volunteer</th>
                                    <th className="p-3 text-right"></th>
                                    <th className="p-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts?.map(post => <Table key={post._id} post={post}></Table>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </div>
    );
};

export default NeedVolunteer;