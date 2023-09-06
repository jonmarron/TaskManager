import React, {useState, useEffect} from 'react'
import ClientsTable from'../Components/ClientsTable'

const ClientsOverview = ({getUsers}) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getUsers()
    .then(clients => {
      setClients(clients);
      console.log(clients);
    })
  }, [])
  

  return (
    <>
    <h1>Clients</h1>
      <ClientsTable
        clients = {clients}
      />
    </>
  )
}

export default ClientsOverview