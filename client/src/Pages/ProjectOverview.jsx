import React, {useEffect, useState} from 'react'
import ProjectTable from '../Components/ProjectTable'

const ProjectOverview = () => {
  const [projects, setProjects] = useState([])

  const getProjects = async () => {
      const response = await fetch('http://localhost:8080/projects')
      const data = await response.json()
      console.log("test")
      console.log(data)
      setProjects(data)
  }

  useEffect(() => {
      getProjects()
      console.log(projects)
  }, [])

  return (
    <ProjectTable
      projects={projects}
    />    
  )
}

export default ProjectOverview