import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-regular-svg-icons'


const ProjectTable = ({projects}) => {

    const processEnum = word => {
        let array =  word.replace('_', ' ').toLowerCase().split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }
    
    const formatDate = date =>{
        return date.split('-').reverse().join('-');
    
    }
    
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
        
                        {projects.map((project) => {
                            return (
                                <tr key={project.id}>
                                    <td>{project.name}</td>
                                    <td>{project.client.name}</td>
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