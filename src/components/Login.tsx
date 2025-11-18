import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Register from './Register';

const Login = () => {
  return (
    <div>
      <div className='user-form'>
        <img src='/user-612x612.jpg' alt='' />
        <h4>Member Login</h4>
        <form action=''>
          <input type='text' placeholder='Enter User ID' /> <br />
          <input type='password' placeholder='Enter Password' /> <br />
          <button type='button' value='Login' />
        </form>
        <h6>Reset Password</h6>
        Don't have an account? <NavLink to='/Register'>Register</NavLink>
      </div>
    </div>
  );
};

export default Login;
