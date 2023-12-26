import React, { useState } from "react";
import AddUser from "./components/AddUser";
import ListAllUsers from "./components/ListAllUsers";

function App() {
  const [users, SetUsers] = useState([]);


  const AddUserHandler = (userInput) => {
    console.log(userInput)
    SetUsers(prev => [...prev, userInput]) 
  };
  return (
    <div>
      <AddUser onFormSubmission={AddUserHandler} />
      <ListAllUsers users={users} />
    </div>
  );
}

export default App;
