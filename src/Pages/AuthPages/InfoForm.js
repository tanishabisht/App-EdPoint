import { useState } from 'react'
import { db, auth } from '../../Config/firebaseConfig'


function InfoForm() {

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputBio, setInputBio] = useState('')
    const [inputSem, setInputSem] = useState('')
    const [inputCgpa, setInputCgpa] = useState('')
    const [inputCer, setInputCer] = useState('')


    const [uid, setUid] = useState('')

    auth.onAuthStateChanged(user => {
      if (user) setUid(user.uid)
      else console.log('user does not exist !!')
    })

    const submitDetails = () => {

        const data = {
            name: inputName,
            email: inputEmail,
            bio: inputBio,
            sem: inputSem,
            cgpa: inputCgpa,
            certificate: inputCer
        }

        db.ref('userdata/' + uid).set(data)
    }
  


    return (
      <div>
        <h1>Fill In Your details</h1>
        <input onChange={e => setInputName(e.target.value)} type='text' id='name_field' placeholder='Enter your name' />
        <input onChange={e => setInputSem(e.target.value)} type='text' id='sem_field' placeholder='Enter your semester' />
        <input onChange={e => setInputEmail(e.target.value)} type='text' id='email_field' placeholder='Enter your Email' />
        <input onChange={e => setInputBio(e.target.value)} type='text' id='bio_field' placeholder='Tell something about yourself' />
        <input onChange={e => setInputCgpa(e.target.value)} type='text' id='cgpa_field'   placeholder='What is your CGPA' />
        <input onChange={e => setInputCer(e.target.value)} type='text' id='cer_field'   placeholder='Enter URL of your Certificate' />
        <button onClick={submitDetails}>Submit</button>
      </div>
    )
}



export default InfoForm