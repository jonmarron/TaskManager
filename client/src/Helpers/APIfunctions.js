import { constants } from "../Constants/Constants";
import { Buffer } from "buffer";

export const handleLogin = async  (username, password) => {
  const headers = new Headers();
  const auth = Buffer.from(username + ':' + password).toString('base64');
  headers.set('Authorization', `Basic ${auth}`);
  const response = await fetch(constants.baseURL + constants.login, {
      headers: headers
  })

  const data = await response.json()
  const {jwtToken, authorities} = data;
  localStorage.setItem('auth', authorities);
  localStorage.setItem('jwt', jwtToken);
}

export const fetchProjects = async (sortBy, sortDirection) => {
  const jwt = localStorage.getItem('jwt');
  if(!jwt) {
      console.log('JWT not provided')
  }
  const url = new URL(`${constants.baseURL + constants.projects}/client`);
  const params = new URLSearchParams();

  if(sortBy) {
      params.append('sort', sortBy)
  }
  if(sortDirection){
      params.append('direction', sortDirection)
  }
  url.search = params.toString();

  const headers = new Headers();
  headers.set('Authorization', `Bearer ${jwt}`)

  const response = await fetch(url,{
      headers: headers
  })

  const data = await response.json();
  return data;
}

export const fetchProjectById = async (id) => {
  const jwt = localStorage.getItem('jwt');
  if(!jwt) {
    console.log('JWT not provided');
  }

  const url = new URL(`${constants.baseURL + constants.projects}/${id}`);
  
  const headers = new Headers();
  headers.set('Authorization', `Bearer ${jwt}`)

  const response = await fetch(url, {
    headers: headers
  })

  const data = response.json();
  return data;
}

export const createProject = async (project) => {
  const jwt = localStorage.getItem('jwt');
  if(!jwt) {
      console.log('JWT not provided')
  }
  const headers = new Headers();
  headers.set('Authorization', `Bearer ${jwt}`)
  headers.set('Content-Type', 'application/json');
  console.log(JSON.stringify(project))
  const response = await fetch(constants.baseURL + constants.projects, {
      method: 'POST',
      headers:headers, 
      body: JSON.stringify(project)
  })
  console.log(response);
}

export const deleteProjectById = async (id) => {
  const jwt = localStorage.getItem('jwt');
  if(!jwt) {
    console.log('JWT not provided')
  }
  const headers = new Headers();
  headers.set('Authorization', `Bearer ${jwt}`)
  const response = await fetch(constants.baseURL + constants.projects + `/${id}`, {
    method:'DELETE' ,
    headers: headers
  })
  console.log(response);
}

export const getUsers = async () => {
  const response = await fetch(constants.baseURL + constants.users, {
      headers: {
          'Authorization': `Basic ${btoa('admin:123')}`
      }
  })
  const data = await response.json();
  return data;
}

export const getStatus = async () => {
  const response = await fetch(constants.baseURL + constants.status)
  const data = await response.json();
  return data;
}

export const getProjectTypes = async () => {
  const response = await fetch(constants.baseURL + constants.projectTypes)
  const data = await response.json();
  return data;
}
