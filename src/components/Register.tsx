import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className='user-form'>
        <img src='/user-612x612.jpg' alt='' />
        <h4>New Member Register</h4>
        <form action=''>
          <input type='text' placeholder='Enter User ID' /> <br />
          <input type='password' placeholder='Enter Password' /> <br />
          <button type='button' value='Login' />
        </form>
        Already have an account? <NavLink to='/Login'>Login</NavLink>
      </div>
    </div>
  );
};

export default Register;
