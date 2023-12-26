import React, { useState } from "react";

function AddUser(props) {
  const [userInput, SetUserInput] = useState({ username: "", age: 0 });

    const inputChangeHandler = (input, value) =>{
        SetUserInput((prev) => {
            return {
                ...prev, 
                [input]: value
            }
        })
    }

  const FormSubmithandler = (event) => {
    event.preventDefault()
    props.onFormSubmission(userInput);
  };
    
    return (
      <form onSubmit={FormSubmithandler}>
        <div>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            id="username"
            onChange={(event) => {
              event.preventDefault();
              inputChangeHandler("username", event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="Years">Age(Years)</label>
          <input
            type="number"
            id="years"
            onChange={(event) => {
              inputChangeHandler("years", event.target.value);
            }}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    );
}

export default AddUser;
