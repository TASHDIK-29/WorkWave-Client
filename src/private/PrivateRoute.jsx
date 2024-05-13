import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    // const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to Login first!"
        });

    return (
        <>
            <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
        </>
    )
};

export default PrivateRoute;