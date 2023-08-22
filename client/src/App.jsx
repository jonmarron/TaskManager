// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import ProjectOverview from './Pages/ProjectOverview';
import {Link, Routes, Route} from 'react-router-dom'
import ClientsOverview from './Pages/ClientsOverview';

import { constants } from './Constants/Constants';
import NewProject from './Pages/NewProject';

const fetchProjects = async () => {
    const response = await fetch(constants.baseURL + constants.projects,{
      headers:{
        'Authorization': `Basic ${btoa('admin:123')}`
    }
})
const data = await response.json();
return data;
}

const createProject = async (project) => {
    return fetch(constants.baseURL + constants.projects, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
            'Authorization': `Basic ${btoa('admin:123')}`
        }, 
        body: JSON.stringify(project)
    }).then(res => res.json());
}

const getClients = async () => {
    const response = await fetch(constants.baseURL + constants.clients, {
        headers: {
            'Authorization': `Basic ${btoa('admin:123')}`
        }
    })
    const data = await response.json();
    return data;
}

const getStatus = async () => {
    const response = await fetch(constants.baseURL + constants.status)
    const data = await response.json();
    return data;
}

const getProjectTypes = async () => {
    const response = await fetch(constants.baseURL + constants.projectTypes)
    const data = await response.json();
    return data;
}


function App() {
  const [navBarVisible, setNavBarVisible] = useState(true);

  const handleMenuSideBar = () => {
    setNavBarVisible(!navBarVisible);
  }

  return (
    <>
        <div className={navBarVisible? "navBar": "navBar hidden"}>
            <div className="logo">
                <Link to="/"><img src="/LogoVertical.svg" alt="" /></Link>
                <FontAwesomeIcon id="burger-menu" icon={faBars} size='lg' onClick={handleMenuSideBar}/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <button id='dashboard'>Dashboard</button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/projects">
                            <button id="projects">Projects</button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/clients">
                            <button id="clients">Clients</button>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/new-project">
                            <button id="create">New Project</button>
                        </Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="bottom-nav">
                <span id="copyright">Made with  </span> <span> by <a href="https://www.google.com" target="_blank">Jon</a></span>
            
            </div>
        </div>
        <Routes>
            <Route path="/" element={<ProjectOverview fetchProjects={fetchProjects}/>}/>
            <Route path='/projects' element={<ProjectOverview fetchProjects={fetchProjects}/>}/>
            <Route path="/clients" element={<ClientsOverview getClients={getClients}/>}/>
            <Route path="/new-project" element={<NewProject getClients={getClients} getStatus={getStatus} getProjectTypes={getProjectTypes} createProject={createProject}/>}/>
        </Routes>
    </>
  )
}

export default App
