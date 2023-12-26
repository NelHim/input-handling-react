import React from "react";

function ListAllUsers(props) {
  return (
    <div>
      {props.users.map((user, i) => (
        <p key={i+1}>{user.username}</p>
      ))}
    </div>
  );
}

export default ListAllUsers;
