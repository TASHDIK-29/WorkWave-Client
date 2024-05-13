import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddPost from "../pages/addPost/AddPost";
import NeedVolunteer from "../pages/needVolunteer/NeedVolunteer";
import DetailsCard from "../pages/needVolunteer/DetailsCard";
import BeAVolunteer from "../pages/beAVolunteer/BeAVolunteer";
import ManagePostAndRequest from "../pages/myPostAndRequest/ManagePostAndRequest";
import UpdateMyPost from "../pages/myPostAndRequest/UpdateMyPost";
import PrivateRoute from "../private/PrivateRoute";



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
                element: <PrivateRoute><AddPost /></PrivateRoute>
            },
            {
                path: '/needVolunteer',
                element: <NeedVolunteer />
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><DetailsCard /></PrivateRoute>,
                loader : ({params}) => fetch(`https://assignment-11-server-nu.vercel.app/post/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateMyPost /></PrivateRoute>,
            },
            {
                path: '/beAVolunteer/:id',
                element: <PrivateRoute><BeAVolunteer /></PrivateRoute>,
            },
            {
                path: '/postAndRequest',
                element: <PrivateRoute><ManagePostAndRequest /></PrivateRoute>,
                // loader : ({params}) => fetch(`https://assignment-11-server-nu.vercel.app/post/${params.id}`)
            },
        ]
    },
]);

export default router;