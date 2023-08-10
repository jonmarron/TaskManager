import React from 'react'

const ClientsTable = ({clients}) => {
  const formatDate = date =>{
    return date.split('-').reverse().join('-');

}
  return (
      <div className='table-container clients'>
        <table className="table">
          <tr>
            <th>Client name</th>
            <th>Registration Date</th>
          </tr>
          {clients.map(client => {
            return (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{formatDate(client.registrationDate)}</td>
              </tr>
            )
          })}
        </table>
      </div>
  )
}

export default ClientsTable