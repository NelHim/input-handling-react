import React, { useState } from "react";
import Card from "./UI/Card";
import classes from './AddUser.module.css'
import Button from "./UI/Button";

function AddUser(props) {
  const [userInput, SetUserInput] = useState({ username: "", age: 0 });

  const inputChangeHandler = (input, value) => {
    SetUserInput((prev) => {
      return {
        ...prev,
        [input]: value,
      };
    });
  };

  const FormSubmithandler = (event) => {
    event.preventDefault();
    props.onFormSubmission(userInput);
  };

  return (
    <Card className={classes.input} >
      <form onSubmit={FormSubmithandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          onChange={(event) => {
            inputChangeHandler("username", event.target.value);
          }}
        />
        <label htmlFor="Years">Age(Years)</label>
        <input
          type="number"
          id="years"
          onChange={(event) => {
            inputChangeHandler("years", event.target.value);
          }}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
