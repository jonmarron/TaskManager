import React, {useState, useEffect} from 'react'
import { fetchProjectById } from '../Helpers/APIfunctions'
import formatDate from '../Helpers/DateFormatter';
import { useParams } from 'react-router-dom';
import processEnum from '../Helpers/EnumProcessor';

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  let params = useParams();

  useEffect(() => {
    fetchProjectById(params.id)
    .then(response => {
      setProject({
        ...response,
        status: processEnum(response.status),
        deadline: formatDate(response.deadline)
      });
    })
  
  }, [])
  
  return (
    <div className='project-details'>
      <h1>{project.name}</h1>
      <div className="project-details-container">
        <div className="briefing">
          <h2>Briefing:</h2>
          <p>{project.briefing}</p>
        </div>
        <div className="details">
          <h2>Details:</h2>
          <div className="detail">
            <h3>Status:</h3>
            <p>{project.status}</p>
          </div>
          <div className="detail">
            <h3>Deadline:</h3>
            <p>{project.deadline}</p>
          </div>
          <div className="detail">
            <h3>Preview:</h3>
            <a href={project.previewLink} target='_blank'>Link</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails