import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";



const AddPost = () => {

    const { user } = useContext(AuthContext);

    const [startDate, setStartDate] = useState(new Date());

    const handelAddPost = e => {
        e.preventDefault();

        const form = e.target;

        const postTitle = form.postTitle.value;
        const category = form.category.value;
        const noOfVolunteersInString = form.noOfVolunteers.value;
        const thumbnail = form.thumbnail.value;
        const location = form.location.value;
        const description = form.description.value;
        const orgName = form.orgName.value;
        const orgEmail = form.orgEmail.value;
        const deadline = form.deadline.value;

        const noOfVolunteers = parseInt(noOfVolunteersInString);

        console.table(deadline, orgEmail, orgName, description, location, thumbnail, noOfVolunteers, category, postTitle);

        const post = { deadline, orgEmail, orgName, orgPhoto: user?.photoURL, description, location, thumbnail, noOfVolunteers, category, postTitle, view: 0 }


        fetch('http://localhost:5000/post', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Successfully Posted');
                }
            })
    }

    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <Helmet>
                <title>Add Post | WorkWave</title>
            </Helmet>
            <form onSubmit={handelAddPost} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    {/* <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div> */}
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Post Title</label>
                            <input type="text" name="postTitle" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Category</label>
                            <input type="text" name="category" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">No. of volunteers needed</label>
                            <input type="number" name="noOfVolunteers" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Location</label>
                            <input type="text" name="location" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Thumbnail</label>
                            <input type="text" name="thumbnail" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3 flex flex-col">
                            <label className="text-sm">Deadline</label>
                            {/* <input type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" /> */}
                            <DatePicker name="deadline" className="p-2 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea placeholder="" name="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2"></textarea>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="text-2xl font-medium">Users Profile</p>
                        <p className="text-base">You can not edit this section.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Username</label>
                            <input type="text" name="orgName" readOnly defaultValue={user?.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Email</label>
                            <input type="email" name="orgEmail" readOnly defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>

                        <div className="col-span-full">
                            {/* <div className="flex justify-center items-center space-x-2">
                                <input className="px-4 py-2 border rounded-md dark:border-gray-800" type="submit" value="Add Post" />
                            </div> */}


                            <div className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                                    <input className="" type="submit" value="Add Post" />
                                </span>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddPost;