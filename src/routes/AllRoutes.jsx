import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddPost from "../pages/addPost/AddPost";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import DetailsCard from "../pages/needVolunteer/DetailsCard";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addPost',
                element: <AddPost />
            },
            {
                path: '/needVolunteer',
                element: <NeedVolunteer />
            },
            {
                path: '/details/:id',
                element: <DetailsCard />,
                loader : ({params}) => fetch(`http://localhost:5000/post/${params.id}`)
            },
        ]
    },
]);

export default router;