import React, {useState, useEffect} from 'react'
import ClientsTable from'../Components/ClientsTable'

const DashBoard = () => {
  const [clients, setClients] = useState([])
  
  const getClients = async () => {
    const response = await fetch('http://localhost:8080/clients');
    const data = await response.json();
    setClients(data);
  } 

  useEffect(() => {
    getClients();
  }, [])
  

  return (
    <>
    <h1>Dashboard</h1>
      <ClientsTable
        clients = {clients}
      />
    </>
  )
}

export default DashBoard