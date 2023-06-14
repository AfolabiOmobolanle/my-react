//importing react and components;
import React from 'react';
//using the class based components to create an object or userdetails.
const UserOutput = (props) =>{


// rendering my Userdetails to my UserOutput;
    return (
        <div className='UserOutput'>
            <h1>My name is {props.userName}</h1>
            <h1>I live in Costa-Rica</h1>
    
        </div>
        )
    }
export default UserOutput;
