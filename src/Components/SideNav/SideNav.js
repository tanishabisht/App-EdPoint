// import edPointLogo from '../../Images/edPointLogo.svg'
import edPointText from '../../Images/edPointText.svg'
import avatar from '../../Images/avatar.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import classes from './SideNav.module.scss'


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
  return (
      <SideNavWrapper>
      <div className='container-fluid'>
        <img src={edPointText} alt='text' />
        <div className='container'>
          <div className='userinfo' style={{textAlign:'center', display:'inline-block'}}>
            <img src={avatar} alt='avatar' />
            <h6>{props.name}</h6>
          </div>
          <div className='navs mt-5'>
            <NavLink activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/profile"><h5>My Profile</h5></NavLink>
            <NavLink activeClassName={classes.SecLinkActive} className={classes.SecLink} to="/searchcourse"><h5>Search Courses</h5></NavLink>
          </div>
        </div>
      </div>
      </SideNavWrapper>
  )
}

export default SideNav