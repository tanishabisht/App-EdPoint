import { useState } from 'react'
import { auth } from '../../Config/firebaseConfig'

import { NavLink } from 'react-router-dom'
import {CustomButton} from '../../Common'
import SIGNUp from '../../Images/SIGNUp.svg'
import classes from './authpage.module.scss'



function SignUp() {
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = ()=> {
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log(userCredential)
        })
        .catch((error) => {
          console.log(error)
        })
    }


    return (
      <div className={`signUp container-fluid ${classes.AuthWrapper}`}>
        <img src={SIGNUp} alt='main' className={classes.AuthBox} />

        <div className='row' style={{height:'100vh'}}>
          <div className='col'></div>


          <div className={`col ${classes.Signup_wrapper}`}>
            <h3 className={classes.TitleSiginUp}>Register your account</h3>
            <div className={classes.Input_wrapper}>
              <input type="text" placeholder='Enter your email' className={classes.Input} name="username" onChange={e => setEmail(e.currentTarget.value)}/>
            </div><br/>
    
            <div className={classes.Input_wrapper}>
              <input type="password" placeholder='Enter your password' className={classes.Input} name="username" onChange={e => setPassword(e.currentTarget.value)}/>
            </div><br/>
    
            <NavLink className={classes.Link} to="/infoform">
              <CustomButton onClick={signUp} borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff'>SIGN UP</CustomButton>
            </NavLink>
          </div>


          <div className='col'></div>
          <div className='col'></div>
        </div>

      </div>
    )
}



export default SignUp