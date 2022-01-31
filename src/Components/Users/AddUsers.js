import React from "react";
import Card from '../UI/Card'
const AddUsers = () => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="Age">Age (years)</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUsers;
