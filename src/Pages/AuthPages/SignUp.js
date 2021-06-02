import './authpage.scss'
import {useState} from 'react'
import {auth} from '../../Config/firebaseConfig'



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
      <div className="signUp">
        <h1>Register your account</h1>
        <input type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)}/>
        <input type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)}/>
        <button onClick={signUp}>Sign Up</button>
      </div>
    )
}



export default SignUp