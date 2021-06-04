import { useState, useEffect } from 'react'
import { db, auth } from '../../Config/firebaseConfig'



function CourseForm() {

    const [title, setTitle] = useState('')
    const [topics, setTopics] = useState('')
    const [desc, setDesc] = useState('')

    const [uid, setUid] = useState('')


    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) setUid(user.uid)
        else console.log('user does not exist !!')
      })      
    }, [])



    const submitDetails = () => {
        const dbRef = db.ref()

        dbRef.child("userdata").child(uid).get()
          .then((snapshot) => {
            if (snapshot.exists()){
              const res = snapshot.val()
              console.log(res)
              const userINFO = { name: res.name, sem: res.sem, email: res.email }
              const data = {
                title: title,
                topics: topics,
                desc: desc,
                creatorsID: uid,
                ...userINFO
              }
              console.log(data)
              var postListRef = db.ref('posts')
              var newPostRef = postListRef.push(data)
              var postID = newPostRef.key
              db.ref('userdata/' + uid + '/courses/' + postID).set(data)
            } 
            else console.log("No data available")
          })
          .catch(err => console.log(err))
    }
  


    return (
      <div>
        <h1>Course Details</h1>
        <input onChange={e => setTitle(e.target.value)} type='text' placeholder='Enter title of the course' />
        <input onChange={e => setTopics(e.target.value)} type='text' placeholder='Enter topics in the course' />
        <input onChange={e => setDesc(e.target.value)} type='text' placeholder='Write course description' />
        <button onClick={submitDetails}>Submit</button>
      </div>
    )
}



export default CourseForm