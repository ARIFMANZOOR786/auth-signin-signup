import React from 'react';
import './homepage.css';
const Homepage = ({ setLoginUser }) => {
  return (
    <div className='homepage'>
        <h1>Welcome to HomePage </h1>
        <h3>Please Logout For New Registration </h3>
        <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
    </div>
  )
}

export default Homepage;