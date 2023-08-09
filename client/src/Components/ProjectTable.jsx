import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-regular-svg-icons'


const ProjectTable = ({projects}) => {

    const processEnum = word => {
        let array =  word.replace('_', ' ').toLowerCase().split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }
    
  return (
    <div className="table-container">
           <table className='table'>
               
                    <tr>
                        <th className='tableHeader'>Project Name</th>
                        <th className='tableHeader'>Status</th>
                        <th className='tableHeader'>Type</th>
                        <th className='tableHeader'>Briefing</th>
                        <th className='tableHeader'>Deadline</th>
                        <th className='tableHeader'>Preview</th>
                        
                    </tr>
                
                    {projects.map((project) => {
                        return (
                            <tr key={project.id}>
                                <td className="content">{project.name}</td>
                                <td className="content">{processEnum(project.status)}</td>
                                <td className="content">{processEnum(project.type)}</td>
                                <td className="content">{project.briefing}</td>
                                <td className="content">{project.deadline}</td>
                                <td className="content">
                                    <a href={project.previewLink} target="_blank">
                                    <FontAwesomeIcon icon={faEye} />
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
            </table>
        </div>
    )
}

export default ProjectTable