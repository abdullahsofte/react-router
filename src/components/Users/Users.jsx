import { useLoaderData } from "react-router-dom";
import User from "../User/User.jsx";
import './UserS.css'

const Users = () => {
    const users = useLoaderData();

    return (
        <div>

            <h2>All user here : {users.length} </h2>
            <div className="users">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;