import edPointText from '../../Images/edPointText.svg'
import avatar from '../../Images/avatar.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import classes from './SideNav.module.scss'
import { auth } from '../../Config/firebaseConfig'


const SideNavWrapper = styled.div`
  height: 100%;
  width: 28%; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
`

const SideNav = props => {

  const logoutHandler = () => {
    auth.signOut().then(res => {
      console.log('Sign Out successful', res)
    }).catch(err => console.log('error: ', err))
  }

  return (
      <SideNavWrapper>
      <div className='container-fluid'>
        <img src={edPointText} alt='text' />
        <div className='container'>
          <div className='userinfo mt-5' style={{textAlign:'center', display:'inline-block'}}>
            <img src={avatar} alt='avatar' />
            <h6>{props.name}</h6>
          </div>
          <div className='navs mt-5'>
            <NavLink activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/profile"><h4 className={classes.MenuItems}>My Profile</h4></NavLink>
            <NavLink activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/searchcourse"><h4 className={classes.MenuItems}>Search Courses</h4></NavLink>
            <NavLink activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/courseform"><h4 className={classes.MenuItems}>Add Course</h4></NavLink>
            <NavLink activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/chatbox"><h4 className={classes.MenuItems}>Discussion Forum</h4></NavLink>
            <NavLink onClick={logoutHandler} activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/login"><h4 className={classes.MenuItems}>Logout</h4></NavLink>
          </div>
        </div>
      </div>
      </SideNavWrapper>
  )
}

export default SideNav