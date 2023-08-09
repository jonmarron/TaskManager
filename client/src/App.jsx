// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faBars} from '@fortawesome/free-solid-svg-icons'
import ProjectOverview from './Pages/ProjectOverview';
import {Link, Routes, Route} from 'react-router-dom'

function App() {
  const [navBarShown, setNavBarShown] = useState(true);

  const handleMenuSideBar = () => {
    setNavBarShown(!navBarShown);
  }

  return (
    <>
        <div className={navBarShown? "navBar": "navBar hidden"}>
            <div className="logo">
                <Link to="/"><img src="/LogoVertical.svg" alt="" /></Link>
                <FontAwesomeIcon id="burger-menu" icon={faBars} size='lg' onClick={handleMenuSideBar}/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/projects">
                            <button id='dashboard'>Dashboard</button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/projects">
                            <button id="projects">Projects</button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/projects">
                            <button id="create">Create New</button>
                        </Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="bottom-nav">
                <span id="copyright">Made with  </span> <span> by <a href="https://www.google.com" target="_blank">Jon</a></span>
            </div>
        </div>
        <Routes>
            <Route path="/" element={<ProjectOverview/>}/>
            <Route path='/projects' element={<ProjectOverview/>}/>
        </Routes>
    </>
  )
}

export default App
