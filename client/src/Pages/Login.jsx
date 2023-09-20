import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSetUserAuthorities, useUserAuthorities } from '../Context/UserContext';

const Login = ({handleLogin, setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    username:'demo_admin',
    password:'123'
  })

  const setAuthorities = useSetUserAuthorities();

  const handleChange = e => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(loginCredentials.username, loginCredentials.password)
    .then(()=> {
      setIsLoggedIn(true);
      setAuthorities(localStorage.getItem('auth').split(','))
      navigate('/projects')
    });
    
  }

  return (
    <div className="login">
      <img src="/LogoVertical.svg" alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <select name="username" id="username" onChange={handleChange}>
          <option value="demo_admin">demo_admin</option>
          <option value="demo_user">demo_user</option>
        </select>
        {/* <input type="text" name="username" id="username" value={loginCredentials.username} onChange={handleChange}/> */}
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={loginCredentials.password}/>
        <div className="btn-set">
          <button type="submit" className='primary-btn'>Login</button>
          {/* <Link to="/"><button className='secondary-btn'>Sign up</button></Link> */}
        </div>
      </form>
    </div>
  )
}

export default Login