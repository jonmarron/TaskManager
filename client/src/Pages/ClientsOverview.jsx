import React, {useState, useEffect} from 'react'
import ClientsTable from'../Components/ClientsTable'

const ClientsOverview = ({getClients}) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients()
    .then(clients => {
      setClients(clients);
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