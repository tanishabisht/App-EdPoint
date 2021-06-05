import { useState } from 'react'
import { auth } from '../../Config/firebaseConfig'

import { NavLink } from 'react-router-dom'
import { CustomButton } from '../../Common'
import SIGNIn from '../../Images/SIGNIn.svg'
import classes from './authpage.module.scss'


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => console.log(userCredential))
    .catch(error => console.log(error))
  }

  return (
    <div className={`container-fluid ${classes.AuthWrapper}`}>
      <img src={SIGNIn} alt='main' className={classes.AuthBox} />
      <div className='row' style={{height:'100vh'}}>
          <div className='col'></div>
          <div className='col'></div>
          <div className={`col ${classes.Signup_wrapper}`}>
              <h3 className={classes.TitleSignIn}>Sign in to your account</h3>
              <div className={classes.Input_wrapper}>
                  <input type="email" placeholder='Enter your email' className={classes.Input} name="username" onChange={e => setEmail(e.currentTarget.value)}/>
              </div><br/>
              <div className={classes.Input_wrapper}>
                  <input type="password" placeholder='Enter your password' className={classes.Input} name="username" onChange={e => setPassword(e.currentTarget.value)}/>
              </div><br/>
              <NavLink className={classes.Link} to="/profile">
                  <CustomButton borderColor='#f9a66c' bgColor='#f9a66c' textColor='#fff' onClick={signIn}>SIGN IN</CustomButton>
              </NavLink>
          </div>
          <div className='col'></div>
      </div>
    </div>
  )
}


export default SignIn