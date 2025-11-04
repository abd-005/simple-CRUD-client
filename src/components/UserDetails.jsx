import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const  users = useLoaderData();
    console.log(users);
    return (
        <div>
            Details
        </div>
    );
};

export default UserDetails;