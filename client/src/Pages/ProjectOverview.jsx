import React, {useEffect, useState} from 'react'
import ProjectTable from '../Components/ProjectTable'

const ProjectOverview = ({fetchProjects}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetchProjects()
      .then(projects => {
        setProjects(projects)
      })
  }, [])

  return (
    <ProjectTable
      projects={projects}
    />    
  )
}

export default ProjectOverview