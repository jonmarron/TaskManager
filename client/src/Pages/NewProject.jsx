import React, {useState, useEffect} from 'react'
import processEnum from '../Helpers/EnumProcessor';
import formatDate from '../Helpers/DateFormatter';
import isDateValid from '../Helpers/DateValidator';
import { useNavigate } from 'react-router-dom';

const NewProject = ({getClients, getStatus, getProjectTypes, createProject}) => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [status, setStatus] = useState([]);
  const [projectTypes, setProjectTypes] = useState([])
  const [formData, setFormData] = useState({
    name:'',
    client:'',
    type:'',
    briefing:'',
    deadline:''
  });
  const [inputErrors, setInputErrors] = useState({});
  

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
  }

  const handleDateChange = e => {
    setFormData({
      ...formData,
      deadline:formatDate(e.target.value)
    })
  }

  const handleClientSelect = e => {
    setFormData({
      ...formData,
      client:clients[e.target.value]
    })
  }
  
  const validateInputs = () => {
    const errors = {};
  
    if (!formData.name) {
      errors.name = 'Name is required.';
    }
  
    if (!formData.client) {
      errors.client = 'Client is required.';
    }
  
    if (!formData.type) {
      errors.type = 'Type is required.';
    }
  
    if (!formData.briefing) {
      errors.briefing = 'Briefing is required.';
    }
  
    if (!formData.deadline) {
      errors.deadline = 'Deadline is required.';
    } else {

      if (!isDateValid(formData.deadline)) {
        errors.deadline = 'Date must be in the future.';
      }
    }
  
    setInputErrors(errors);
  
    return Object.keys(errors).length === 0;
  };



  const handleSubmit = e => {
    e.preventDefault();
    const isInputValid = validateInputs();
    if(isInputValid) {
      console.log(formData);
      createProject(formData)
      .then(() => navigate('/'));
    }
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
    <div className='createProject'>
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project-name">Project Name</label>
        {inputErrors.name && <span className='error-message'>{inputErrors.name}</span>}
        <input type="text" className={inputErrors.name && 'error'}id='project-name'name='name' value={formData.name} onChange={handleChange}/>


        <label htmlFor="client">Client:</label>
        {inputErrors.client && <span className='error-message'>{inputErrors.client}</span>}
        <select name="client" id="client" className={inputErrors.client && 'error'} value= {formData.client} onChange={handleClientSelect}>
          <option value="">Choose Client</option>
          {clients.map((client, index) => {
            return (
              <option value={index} key={client.id}>{client.name}</option> 
              )
            })}
        </select>
        
        <label htmlFor="type">Type:</label>
        {inputErrors.type && <span className='error-message'>{inputErrors.type}</span>}
        <select name="type" id="type" className={inputErrors.type && 'error'} value={formData.type} onChange={handleChange}>
          <option value="">Choose Type</option>
          {projectTypes.map(type => {
            return (
              <option value={type} key={type}>{processEnum(type)}</option>
              )
            })}
        </select>
        <label htmlFor="briefing">Briefing:</label>
        {inputErrors.briefing && <span className='error-message'>{inputErrors.type}</span>}
        <textarea name="briefing" id="briefing" className={inputErrors.briefing && 'error'} value={formData.briefing} cols="50" rows="10" placeholder='Write your briefing here...' onChange={handleChange}></textarea>
        
        <label htmlFor="deadline">Deadline:</label>
        {inputErrors.deadline && <span className='error-message'>{inputErrors.deadline}</span>}
        <input type="text" name="deadline" id="deadline" placeholder='dd-mm-yyyy' className={inputErrors.deadline && 'error'} onChange={handleDateChange}/>
        <button className='primary-btn'>submit</button>

      </form>
    </div>

  )
}

export default NewProject