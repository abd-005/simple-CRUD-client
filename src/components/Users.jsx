import React from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(name, email);
    const newUser = {name,email}

    // save this user data to the database
    fetch("http://localhost:3000/users",{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {console.log('after post:', {data})
    if(data.insertedId){
        console.log('user added successfully');
        e.target.reset;
    }});
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
    </div>
  );
};

export default Users;
