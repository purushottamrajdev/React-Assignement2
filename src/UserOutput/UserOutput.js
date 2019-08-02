import React from 'react';
import './UserOutput.css'
const UserOutput=(props)=>
{
     return(
         <div className="UserOutput">
         <h1>User Output</h1>
         <p>{props.username}</p>
         </div>
     )
};

export default UserOutput;