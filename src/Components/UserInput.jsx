//importing react ;
import React from 'react';

//using the functional based components for user input field;
  const UserInput =(props) => {

//return displays my content to my user;
    return (
      <div className='UserInput'>
        <input type="text" onChange={props.change}/>
      </div>
    )
  }

export default UserInput;