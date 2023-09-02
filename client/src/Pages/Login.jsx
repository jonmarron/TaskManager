import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = ({handleLogin, setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    username:'',
    password:''
  })

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
      navigate('/projects')
    });
    
  }

  return (
    <div className="login">
      <img src="/LogoVertical.svg" alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" value={loginCredentials.username} onChange={handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={loginCredentials.password} onChange={handleChange}/>
        <div className="btn-set">
          <button type="submit" className='primary-btn'>Login</button>
          <Link to="/"><button className='secondary-btn'>Sign up</button></Link>
        </div>
      </form>
    </div>
  )
}

export default Login