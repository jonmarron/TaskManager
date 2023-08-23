import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-regular-svg-icons'
import processEnum from '../Helpers/EnumProcessor'
import formatDate from '../Helpers/DateFormatter'

const ProjectTable = ({projects, sortBy, setSortBy, sortDirection, setSortDirection}) => {

  return (
    <div>
        <h1>Projects</h1>
        <div className="table-container">
               <table className='table'>
        
                        <tr>
                            <th className='tableHeader'> Name</th>
                            <th className='tableHeader'>Client</th>
                            <th className='tableHeader'>Status</th>
                            <th className='tableHeader'>Type</th>
                            <th className='tableHeader'>Briefing</th>
                            <th className='tableHeader'>Deadline</th>
                            <th className='tableHeader'><FontAwesomeIcon icon={faEye} /></th>
        
                        </tr>
        
                        {projects && projects.map((project) => {
                            return (
                                <tr key={project.id}>
                                    <td>{project.name}</td>
                                    <td>{project.user.username}</td>
                                    <td>{processEnum(project.status)}</td>
                                    <td>{processEnum(project.type)}</td>
                                    <td className="long-text">{project.briefing}</td>
                                    <td>{formatDate(project.deadline)}</td>
                                    <td>
                                        <a href={project.previewLink} target="_blank">
                                        <FontAwesomeIcon icon={faEye}/>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                </table>
            </div>
    </div>
    )
}

export default ProjectTable