import './authpage.scss'
import { useState } from 'react'
import { auth } from '../../Config/firebaseConfig'



function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log(userCredential)
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <div className="signIn">
      <h1>Sign in to your account</h1>
      <input type='text' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)}/>
      <input type='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)}/>
      <button onClick={signIn}>Sign In </button>
    </div>
  )
    }


export default SignIn