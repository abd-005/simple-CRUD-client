import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  console.log(user);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          name="name"
          placeholder="name"
          defaultValue={user.name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={user.email}
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
