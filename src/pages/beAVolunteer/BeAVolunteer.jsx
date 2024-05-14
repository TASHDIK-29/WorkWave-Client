import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const BeAVolunteer = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { user } = useContext(AuthContext);

    // const lodePost = useLoaderData();

    const { id } = useParams();


    const [post, setPost] = useState([]);

    // console.log(post);

    useEffect(() => {

        getData();
    }, [user])

    const { thumbnail, postTitle, orgName, orgEmail, noOfVolunteers, location, description, deadline, category } = post;




    const getData = () => {
        fetch(`https://assignment-11-server-nu.vercel.app/post/${id}?view=${true}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPost(data);
            })

    }


    const handelRequest = e => {
        e.preventDefault();

        const form = e.target;

        const postTitle = form.postTitle.value;
        const category = form.category.value;
        const noOfVolunteers = form.noOfVolunteers.value;
        const thumbnail = form.thumbnail.value;
        const location = form.location.value;
        const description = form.description.value;
        const orgName = form.orgName.value;
        const orgEmail = form.orgEmail.value;
        const deadline = form.deadline.value;
        const status = form.status.value;
        const suggestion = form.suggestion.value;
        const volunteerEmail = form.volunteerEmail.value;
        const volunteerName = form.volunteerName.value;

        console.table(deadline, orgEmail, orgName, description, location, thumbnail, noOfVolunteers, category, postTitle);

        const post = { deadline, orgEmail, orgName, orgPhoto: user?.photoURL, description, location, thumbnail, noOfVolunteers, category, postTitle, volunteerName, volunteerEmail, status, suggestion }


        fetch('https://assignment-11-server-nu.vercel.app/request', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.result.insertedId) {
                    alert('Successfully requested')
                }

                if (data.update.modifiedCount) {
                    getData();
                }
            })
    }


    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <Helmet>
                <title>Ba A Volunteer | WorkWave</title>
            </Helmet>
            <form onSubmit={handelRequest} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    {/* <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Information</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div> */}
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Post Title</label>
                            <input type="text" name="postTitle" readOnly defaultValue={postTitle} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Category</label>
                            <input type="text" name="category" readOnly defaultValue={category} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">No. of volunteers needed</label>
                            <input type="number" name="noOfVolunteers" readOnly defaultValue={noOfVolunteers} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Location</label>
                            <input type="text" name="location" readOnly defaultValue={location} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Thumbnail</label>
                            <input type="text" name="thumbnail" readOnly defaultValue={thumbnail} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3 flex flex-col">
                            <label className="text-sm">Deadline</label>
                            <input type="text" name="deadline" readOnly defaultValue={deadline} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                            {/* <DatePicker name="deadline" className="p-2 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        </div>

                        <div className="col-span-full">
                            <label className="text-sm">Description</label>
                            <textarea readOnly defaultValue={description} name="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2"></textarea>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Organizer Name</label>
                            <input type="text" name="orgName" readOnly defaultValue={orgName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Organizer Email</label>
                            <input type="email" name="orgEmail" readOnly defaultValue={orgEmail} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="text-2xl font-medium">Users Profile</p>
                        <p className="text-base font-normal">Check your information. You may suggest us if you have any unique and promising ideas.</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Volunteer Name</label>
                            <input type="text" name="volunteerName" readOnly defaultValue={user?.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Volunteer Email</label>
                            <input type="email" name="volunteerEmail" readOnly defaultValue={user?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Status</label>
                            <input type="text" name="status" defaultValue={"Requested"} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>

                        <div className="col-span-full">
                            <label className="text-sm">Suggestion</label>
                            <textarea placeholder="Any suggestion ?" name="suggestion" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-600 font-bold focus:dark:ring-violet-600 dark:border-gray-300 p-2"></textarea>
                        </div>

                        <div className="col-span-full">
                            {/* <div className="flex justify-center items-center space-x-2">
                                <input className="px-4 py-2 border rounded-md dark:border-gray-800" type="submit" value="Request" />
                            </div> */}

                            <div className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-black absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                                    <input className="" type="submit" value="Request" />
                                </span>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default BeAVolunteer;