import React, {useState, useEffect} from 'react'
import ClientsTable from'../Components/ClientsTable'

const ClientsOverview = ({getUsers}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
    .then(users => {
      setUsers(users);
      console.log(users);
    })
  }, [])
  

  return (
    <>
    <h1>Clients</h1>
      <ClientsTable
        users = {users}
      />
    </>
  )
}

export default ClientsOverview