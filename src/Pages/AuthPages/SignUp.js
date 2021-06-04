import { useState } from 'react'
import { auth } from '../../Config/firebaseConfig'

import { NavLink } from 'react-router-dom'
import {CustomButton} from '../../Common'
import SIGNUp from '../../Images/SIGNUp.svg'
import './authpage.scss'



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
      <div className="signUp container-fluid SIGNINUPWrapper">
        <img src={SIGNUp} alt='main' className='loginBox' />

        <div className='row' style={{height:'100vh'}}>
          <div className='col'></div>


          <div className='col signup_wrapper'>
            <h1>Register your account</h1>
            <div className='login_input_wrapper'>
              <input type="text" placeholder='Enter your email' className='login_input' name="username" onChange={e => setEmail(e.currentTarget.value)}/>
            </div><br/>
    
            <div className='login_input_wrapper'>
              <input type="password" placeholder='Enter your password' className='login_input' name="username" onChange={e => setPassword(e.currentTarget.value)}/>
            </div><br/>
    
            <NavLink className='loginLink' to="/signin">
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


// <div className="signUp">
//   <h1>Register your account</h1>
//   <input type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)}/>
//   <input type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)}/>
//   <button onClick={signUp}>Sign Up</button>
// </div>





// <div className='container-fluid SIGNINUPWrapper'>
// <img src={SIGNUp} alt='main' className='loginBox' />
// <div className='row' style={{height:'100vh'}}>
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
//         <NavLink className='loginLink' to="/signin">
//             <CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff'>SIGN UP</CustomButton>
//         </NavLink>
//     </div>
//     <div className='col'></div>
//     <div className='col'></div>
// </div>
// </div>