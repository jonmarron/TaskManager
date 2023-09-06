import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faTrashCan} from '@fortawesome/free-regular-svg-icons'
import processEnum from '../Helpers/EnumProcessor'
import formatDate from '../Helpers/DateFormatter'
import { useUserAuthorities } from '../Context/UserContext'
import { deleteProjectById, fetchProjects } from '../Helpers/APIfunctions'

const ProjectTable = ({projects,setProjects, sortBy, setSortBy, sortDirection, setSortDirection}) => {
  const authorities = useUserAuthorities();
  const handleDelete = (e) => {
    deleteProjectById(e.target.id)
    .then(()=> {
      fetchProjects(sortBy, sortDirection)
      .then(projects => setProjects(projects))
    })
  }
  return (
    <div>
        <h1>Projects</h1>
        <div className="table-container">
            <table className='table'>
    
              <thead>
                <tr>
                    <th className='tableHeader'> Name</th>
                    {!authorities.includes('ADMIN') &&
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
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            {!authorities.includes('ADMIN') &&
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
                              <td className='tableHeader'><FontAwesomeIcon icon={faTrashCan} id={project.id} onClick={handleDelete} /></td>
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