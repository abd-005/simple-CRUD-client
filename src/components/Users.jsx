import React from 'react';

const Users = () => {
    return (
        <div>
            <form>
                <input type="text" name="name" placeholder='Name...' />
                <br />
                <input type="email" name="email" placeholder='email...' />
                <br />
                <input type="button" value="Add User" />
            </form>
        </div>
    );
};

export default Users;