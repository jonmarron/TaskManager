import React from 'react'
import formatDate from '../Helpers/DateFormatter'

const ClientsTable = ({users}) => {

  return (
      <div className='table-container clients'>
        <table className="table">
          <tr>
            <th>Client name</th>
            <th>Registration Date</th>
          </tr>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{formatDate(user.registrationDate)}</td>
              </tr>
            )
          })}
        </table>
      </div>
  )
}

export default ClientsTable