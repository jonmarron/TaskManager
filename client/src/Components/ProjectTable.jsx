import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import processEnum from '../Helpers/EnumProcessor'
import formatDate from '../Helpers/DateFormatter'
import { useUserAuthorities } from '../Context/UserContext'
import { deleteProjectById, fetchProjects } from '../Helpers/APIfunctions'
import { useNavigate } from 'react-router-dom'

const ProjectTable = ({projects,setProjects, sortBy, setSortBy, sortDirection, setSortDirection}) => {
  const navigate = useNavigate();
  const authorities = useUserAuthorities();
  const [deleting, setDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
 
  const handleSelectProject = (id) => {
    navigate(`/projects/${id}`);
  }

  const handleChooseDelete = (e) => {
    setDeleteId(e.target.id);
    setDeleting(true);
  }
 
  const handleDelete = () => {
    deleteProjectById(deleteId)
    .then(()=> {
      fetchProjects(sortBy, sortDirection)
      .then(projects =>{
        setProjects(projects)
        setDeleting(false)
      })
    })
  }
 
  return (
    <div className='overview-container'>
      {deleting &&
        <div className="modal-container">
          <div className="modal">
            <p>Are you sure you want to<br/> delete this project?</p>
            <div className="modal-btns">
              <button className='primary-btn' onClick={handleDelete}>Yes</button>
              <button className='secondary-btn' onClick={()=> setDeleting(false)}>no</button>
            </div>
          </div>
        </div>}
        <h1 className={deleting ? 'transparency-50': undefined}>Projects</h1>
        <div className={`table-container ${deleting && 'transparency-50'}`}>
            <table className='table'>
    
              <thead>
                <tr>
                    <th className='tableHeader'> Name</th>
                    {authorities.includes('ADMIN') &&
                      <th className='tableHeader'>Client</th>
                    }
                    <th className='tableHeader'>Status</th>
                    <th className='tableHeader'>Type</th>
                    <th className='tableHeader'>Briefing</th>
                    <th className='tableHeader'>Deadline</th>
                    <th className='tableHeader'><FontAwesomeIcon icon={faEye} /></th>
                    {authorities.includes('ADMIN') &&
                      <th className='tableHeader'><FontAwesomeIcon icon={faTrashCan} /></th>
                    }
                </tr>
              </thead>

              <tbody>
                {projects && projects.map((project) => {
                    return (
                        <tr key={project.id} onClick={() => handleSelectProject(project.id)}>
                            <td>{project.name}</td>
                            {authorities.includes('ADMIN') &&
                              <td>{project.user.username}</td>
                            }
                            <td>{processEnum(project.status)}</td>
                            <td>{processEnum(project.type)}</td>
                            <td className="long-text">
                              <div>
                                {project.briefing}
                                <div className="gradient"></div>
                              </div>
                            </td>
                            <td>{formatDate(project.deadline)}</td>
                            <td>
                                <a href={project.previewLink} target="_blank">
                                <FontAwesomeIcon icon={faEye}/>
                                </a>
                            </td>
                            {authorities.includes('ADMIN') &&
                              <td className='tableHeader'><FontAwesomeIcon icon={faTrashCan} id={project.id} onClick={handleChooseDelete} /></td>
                            }
                        </tr>
                    )
                })}
              </tbody>
            </table>
            </div>
    </div>
    )
}

export default ProjectTable