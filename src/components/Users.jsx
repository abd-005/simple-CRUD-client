import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialData = use(usersPromise);
  const [users, setUsers] = useState(initialData);

  // Add users function
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name, email);
    const newUser = { name, email };

    // save this user data to the database
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post:", { data });
        if (data.insertedId) {
          console.log("user added successfully");
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
          e.target.reset;
        }
      });
  };

  // Delete users function
  const handleDeleteUser = (id) => {
    console.log("wanna delete", id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete: ", data);

        if(data.deletedCount){
          const remaining = users.filter(user=>user._id !== id);
          setUsers(remaining);
        }
          
      });
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name..." />
        <br />
        <input type="email" name="email" placeholder="email..." />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <p>____________________________</p>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
