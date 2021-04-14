import './userInfo.scss'

const UserInfo = ({name, username, year, stacks, desc}) => {
  return (
      <div className='container'>        
        <div className='row' >
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{year}</p>
            <p>{stacks}</p>
            <p>{desc}</p>
        </div>
      </div>
  )
}

export default UserInfo