import { useState, useEffect } from 'react'
import { db, auth } from '../../Config/firebaseConfig'
import {CustomButton} from '../../Common'
import classes from './AddCourseForm.module.scss'
import { Layout } from '../../Components'
import { useHistory } from 'react-router-dom'



function AddCourseForm() {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [topics, setTopics] = useState('')
    const [desc, setDesc] = useState('')

    const [uid, setUid] = useState('')
    const [userData, setUserData] = useState('')


    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user){
          setUid(user.uid)
          setUserData(user)
        } 
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
      <Layout userData={userData}>
        <div className={classes.Center_content}>
          <div className={classes.Container}>
            <h1 className={classes.Title}>ADD A NEW COURSE</h1>
            <div className={classes.Input_wrapper}>
              <input type="text" placeholder='Enter title of the course' onChange={e => setTitle(e.target.value)} className={classes.Input} />
            </div>
            <div className={classes.Input_wrapper}>
              <input type="text" placeholder='Enter topics in the course' onChange={e => setTopics(e.target.value)} className={classes.Input} />
            </div>
            <div className={classes.Input_wrapper}>
              <input type="text" placeholder='Write course description' onChange={e => setDesc(e.target.value)} className={classes.Input} />
            </div><br/>
            <CustomButton onClick={submitDetails} borderColor='#4A6163' bgColor='#2F3D3F' textColor='#fff' >Submit</CustomButton>
          </div>
        </div>
      </Layout>
    )
}



export default AddCourseForm