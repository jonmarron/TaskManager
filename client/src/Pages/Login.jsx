import React from 'react'

const Login = () => {

  const handleSubmit = e => {
    e.preventDefault();
    console.log('not implemented yet');
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button type="submit" className='primary-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login