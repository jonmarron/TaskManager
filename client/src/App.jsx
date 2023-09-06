// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import ProjectOverview from './Pages/ProjectOverview';
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import ClientsOverview from './Pages/ClientsOverview';
import {handleLogin, fetchProjects, createProject, getUsers, getStatus, getProjectTypes} from './Helpers/APIfunctions'
import NewProject from './Pages/NewProject';
import Login from './Pages/Login';
import { useSetUserAuthorities, useUserAuthorities } from './Context/UserContext';



function App() {
  const navigate = useNavigate();
  const [navBarVisible, setNavBarVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authorities = useUserAuthorities();
  const setAuthorities = useSetUserAuthorities();
  const handleMenuSideBar = () => {
    setNavBarVisible(!navBarVisible);
  }
  const handleLogout = e => {
    e.preventDefault();
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/')
  }
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setAuthorities(localStorage.getItem('auth'))
    }
    if(localStorage.getItem('jwt')) {
      setIsLoggedIn(true);
    }
  }, [])
  

  return (
    <>
        <div className={`navBar ${navBarVisible? '':'hidden'}`} onMouseEnter={()=> setNavBarVisible(true)} onMouseLeave={()=> setNavBarVisible(false)}>
            <div className="logo">
                <Link to="/"><img src="/LogoVertical.svg" alt="" /></Link>
                <FontAwesomeIcon id="burger-menu" icon={faBars} size='lg' onClick={handleMenuSideBar}/>
            </div>
            <nav>
                <ul>
                  {isLoggedIn ? (
                    
                      <>
                        {/* <li>
                            <Link to="/projects">
                                <button id='dashboard'>Dashboard</button>
                            </Link>
                        </li> */}
                        
                        <li>
                            <Link to="/projects">
                                <button id="projects">Projects</button>
                            </Link>
                        </li>
                        {authorities.includes('ADMIN') &&
                          <li>
                              <Link to="/users">
                                  <button id="clients">Clients</button>
                              </Link>
                          </li>
                        }
                        
                        <li>
                            <Link to="/new-project">
                                <button id="create">New Project</button>
                            </Link>
                        </li>
                        <li>
                          <button id='logout' onClick={handleLogout}>Log-out</button>
                        </li>
                      </>
                  ):(
                    <li>
                      <Link to="/">
                          <button id='login'>Login</button>
                      </Link>
                    </li>
                  )}
                    
                </ul>
            </nav>
            <div className="bottom-nav">
                <span id="copyright">Made with  </span> <span> by <a href="http://www.jonmarron.com" target="_blank">Jon</a></span>
            
            </div>
        </div>
        <Routes>
            <Route path="/" element={!isLoggedIn?<Login handleLogin={handleLogin} setIsLoggedIn={setIsLoggedIn}/>:<ProjectOverview fetchProjects={fetchProjects}/>}/>
            <Route path='/projects' element={<ProjectOverview fetchProjects={fetchProjects}/>}/>
            <Route path="/users" element={<ClientsOverview getUsers={getUsers}/>}/>
            <Route path="/new-project" element={<NewProject getUsers={getUsers} getStatus={getStatus} getProjectTypes={getProjectTypes} createProject={createProject}/>}/>
        </Routes>
    </>
  )
}

export default App
