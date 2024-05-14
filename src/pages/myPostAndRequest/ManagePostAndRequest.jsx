import { Helmet } from "react-helmet-async";
import MyPost from "./MyPost";
import MyRequest from "./MyRequest";

const ManagePostAndRequest = () => {
    return (
        <div>
            <Helmet>
                <title>My Post & Request | WorkWave</title>
            </Helmet>
            <MyPost></MyPost>
            <MyRequest></MyRequest>
        </div>
    );
};

export default ManagePostAndRequest;