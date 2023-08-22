import React, {useState, useEffect} from 'react'
import processEnum from '../Helpers/EnumProcessor';
import formatDate from '../Helpers/DateFormatter';
import { useNavigate } from 'react-router-dom';

const NewProject = ({getClients, getStatus, getProjectTypes, createProject}) => {
  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState([]);
  const [projectTypes, setProjectTypes] = useState([])
  const [output, setOutput] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    setOutput({
      ...output,
      [e.target.name]: e.target.value
    })
    
  }
  
  const handleDateChange = e => {
    setOutput({
      ...output,
      deadline:formatDate(e.target.value)
    })
  }

  const handleClientSelect = e => {
    setOutput({
      ...output,
      client:clients[e.target.value]
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    createProject(output)
    .then(() => navigate('/'));
  }

  useEffect(() => {
    getClients()
      .then(clients => {
        setClients(clients);
      })  
    getStatus()
      .then(statusRes => {
        setStatus(statusRes);
        console.log(status);
      }) 
    getProjectTypes()
      .then(types => {
        setProjectTypes(types);
        console.log(projectTypes);
      })
    
  }, [])
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project-name">Project Name</label>
        <input type="text" id='project-name'name='name' onChange={handleChange}/>

        <label htmlFor="client">Client:</label>
        <select name="client" id="client" onChange={handleClientSelect}>
          <option value="">Choose Client</option>
          {clients.map((client, index) => {
            return (
              <option value={index} key={client.id}>{client.name}</option> 
            )
          })}
        </select>
        
        <label htmlFor="type">Type:</label>
        <select name="type" id="type" onChange={handleChange}>
          <option value="">Choose Type</option>
          {projectTypes.map(type => {
            return (
              <option value={type} key={type}>{processEnum(type)}</option>
            )
          })}
        </select>
        <label htmlFor="briefing">Briefing:</label>
        <textarea name="briefing" id="briefing" cols="30" rows="10" placeholder='Write your briefing here...' onChange={handleChange}></textarea>
        
        <label htmlFor="deadline">Deadline:</label>
        <input type="text" name="deadline" id="deadline" placeholder='dd-mm-yyyy' onChange={handleDateChange}/>
        <button>submit</button>

      </form>
    </div>

  )
}

export default NewProject