import { useState } from 'react'
import { auth } from '../../Config/firebaseConfig'

import { NavLink } from 'react-router-dom'
import { CustomButton } from '../../Common'
import SIGNIn from '../../Images/SIGNIn.svg'
import './authpage.scss'


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => console.log(userCredential))
    .catch(error => console.log(error))
  }

  return (
    <div className='container-fluid SIGNINUPWrapper'>
      <img src={SIGNIn} alt='main' className='loginBox' />
      <div className='row' style={{height:'100vh'}}>
          <div className='col'></div>
          <div className='col'></div>
          <div className='col signup_wrapper'>
              <h1>Sign in to your account</h1>
              <div className='login_input_wrapper'>
                  <input type="email" placeholder='Enter your email' className='login_input' name="username" onChange={e => setEmail(e.currentTarget.value)}/>
              </div><br/>
              <div className='login_input_wrapper'>
                  <input type="password" placeholder='Enter your password' className='login_input' name="username" onChange={e => setPassword(e.currentTarget.value)}/>
              </div><br/>
              <NavLink className='loginLink' to="/profile">
                  <CustomButton borderColor='#f9a66c' bgColor='#f9a66c' textColor='#fff' onClick={signIn}>SIGN IN</CustomButton>
              </NavLink>
          </div>
          <div className='col'></div>
      </div>
    </div>
  )
}


export default SignIn



// <div className="signIn">
// <h1>Sign in to your account</h1>
// <input type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)}/>
// <input type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)}/>
// <button onClick={signIn}>Sign In </button>
// </div>




// <div className='container-fluid SIGNINUPWrapper'>
// <img src={SIGNIn} alt='main' className='loginBox' />
// <div className='row' style={{height:'100vh'}}>
//     <div className='col'></div>
//     <div className='col'></div>
//     <div className='col signup_wrapper'>
//         <label className='login_label' for="username">Email Id:</label>
//         <div className='login_input_wrapper'>
//             <input type="text" className='login_input' name="username"/>
//         </div><br/>
//         <label className='login_label' for="username">Password:</label>
//         <div className='login_input_wrapper'>
//             <input type="text" className='login_input' name="username"/>
//         </div><br/>
//         <NavLink className='loginLink' to="/profile">
//             <CustomButton borderColor='#f9a66c' bgColor='#f9a66c' textColor='#fff'>SIGN IN</CustomButton>
//         </NavLink>
//     </div>
//     <div className='col'></div>
// </div>
// </div>