import React, {useState, useEffect} from 'react'
import { fetchProjectById, getProjectTypes, getStatus } from '../Helpers/APIfunctions'
import formatDate from '../Helpers/DateFormatter';
import { useParams } from 'react-router-dom';
import processEnum from '../Helpers/EnumProcessor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const [status, setStatus] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getProjectTypes()
      .then(types => setProjectTypes(types));
    getStatus()
      .then(status => setStatus(status));
    fetchProjectById(params.id)
      .then(response => {
        setProject({
          ...response,
          type: processEnum(response.type),
          deadline: formatDate(response.deadline)
        });
      })
  
  }, [])


  const handleChange = e => {
    setProject({
      ...project,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <div className='project-details'>
      <h1>{project.name}</h1>
      <div className="project-details-container">
        <div className="briefing">
          <h2>Briefing:</h2>
          <textarea value={project.briefing} name='briefing' onChange={handleChange}></textarea>
        </div>
        <div className="details">
          <h2>Details:</h2>
          <div className="detail">
            <h3>Type:</h3>
            <p>{project.type}</p>
          </div>
          <div className="detail">
            <h3>Status:</h3>
            <select name="status" id="status" value={project.status}>
              {status.map(status => {
                return (
                  <option value={status} key={status}>{processEnum(status)}</option>
                )
              })}
            </select>
          </div>
          <div className="detail">
            <h3>Deadline:</h3>
            <p>{project.deadline}</p>
          </div>
          <div className="detail">
            <h3>Preview:</h3>
            <a href={project.previewLink} target='_blank'><FontAwesomeIcon icon={faEye}/></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails