import React,{ useContext } from "react";
import UserContext from "./UserContext";



const UserProfile = () => {
  const UserData =useContext(UserContext);
    return (
      <div>
        {/* <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p> */}
        
        <h2>User Profile</h2>
      <p>Name: {UserData.name}</p>
      <p>Email: {UserData.email}</p>

      </div>
    );
  };

  export default UserProfile
