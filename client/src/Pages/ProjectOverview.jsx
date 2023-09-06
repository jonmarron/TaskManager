import React, {useEffect, useState} from 'react'
import ProjectTable from '../Components/ProjectTable'

const ProjectOverview = ({fetchProjects}) => {
  const [projects, setProjects] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState('');
  useEffect(() => {
      fetchProjects(sortBy, sortDirection)
      .then(projects => {
        setProjects(projects)
      })
  }, [])

  return (
    <ProjectTable
      projects={projects}
      setProjects={setProjects}
      sortBy={sortBy}
      setSortBy={setSortBy}
      sortDirection={sortDirection}
      setSortDirection={setSortDirection}
    />    
  )
}

export default ProjectOverview