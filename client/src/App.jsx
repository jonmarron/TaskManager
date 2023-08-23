// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import ProjectOverview from './Pages/ProjectOverview';
import {Link, Routes, Route} from 'react-router-dom'
import ClientsOverview from './Pages/ClientsOverview';
import { Buffer } from 'buffer';

import { constants } from './Constants/Constants';
import NewProject from './Pages/NewProject';
import Login from './Pages/Login';

const handleLogin = (username, password) => {
    const headers = new Headers();
    const auth = Buffer.from(username + ':' + password).toString('base64');
    headers.set('Authorization', `Basic ${auth}`);
    return  fetch(constants.baseURL + constants.login, {
        headers: headers
    })
    .then(response => response.text())
    .then(jwt => {
        localStorage.setItem('jwt', jwt)
        console.log(jwt)
    })
}
const fetchProjects = async (sortBy, sortDirection) => {
    const url = new URL(`${constants.baseURL + constants.projects}`);
    const params = new URLSearchParams();

    if(sortBy) {
        params.append('sort', sortBy)
    }
    if(sortDirection){
        params.append('direction', sortDirection)
    }
    url.search = params.toString();

    const headers = new Headers();
    
    const auth = Buffer.from(
        constants.username + ':' + constants.password
    ).toString('base64');

    headers.set('Authorization', 'Basic ' + auth);

    const response = await fetch(url,{
        headers: headers
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

const getUsers = async () => {
    const response = await fetch(constants.baseURL + constants.users, {
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
        <div className={`navBar ${navBarVisible? '':'hidden'}`}>
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
                        <Link to="/users">
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
            <Route path="/" element={<Login handleLogin={handleLogin}/>}/>
            <Route path='/projects' element={<ProjectOverview fetchProjects={fetchProjects}/>}/>
            <Route path="/users" element={<ClientsOverview getUsers={getUsers}/>}/>
            <Route path="/new-project" element={<NewProject getUsers={getUsers} getStatus={getStatus} getProjectTypes={getProjectTypes} createProject={createProject}/>}/>
        </Routes>
    </>
  )
}

export default App
