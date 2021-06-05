import React from 'react'


const UserInfo = ({name, email, year, desc}) => {
  return (
      <React.Fragment>
        <p><strong>User name: </strong>{name}</p>
        <p><strong>Email: </strong>{email}</p>
        <p>Semester {year}</p>
        <p>{desc}</p>
      </React.Fragment>
  )
}

export default UserInfo