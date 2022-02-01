import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'

import  './AddUsers.css'
const AddUsers = () => {
  const [enteredUser,setEnteredUser] = useState('')
  const [enterdAge,setEnteredAge] = useState('')
  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredUser.trim().length === 0 || enterdAge.trim().length === 0){
       return
    }
    if(enterdAge < 1){
      return
    }
    console.log(enteredUser,enterdAge)
    setEnteredUser('')
    setEnteredAge('')
  };

  const usernameChangeHandler = (e) =>{
    setEnteredUser(e.target.value)
  }
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }
  return (
    <Card inputClass = 'input' >
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text"  value = {enteredUser} onChange={usernameChangeHandler}/>
        <label htmlFor="Age">Age (years)</label>
        <input type="number"  onChange={ageChangeHandler} value = {enterdAge}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
