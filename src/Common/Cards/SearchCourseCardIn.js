import PinkCard from '../../Images/pinkCustom.svg'
import {CardWrapper, Card} from './card.elements'
import { useState, useEffect } from 'react'
import { db, auth } from '../../Config/firebaseConfig'


const SearchCourseCardIn = ({courseID, title, email, topics, name, username, year, desc, borderColor, bgColor, textColor, onClick}) => {

    const [uid, setUid] = useState('')
    const [creatorID, setCreatorID] = useState('')
    const [userInfomation, setUserInfomation] = useState('')


    useEffect(() => {        
        auth.onAuthStateChanged(user => {
            if (user){
                setUid(user.uid)
                const uid = user.uid
                const dbRef = db.ref()
                dbRef.child("userdata").child(uid).get()
                .then(snapshot => {
                    if(snapshot.exists()){
                        setUserInfomation(snapshot.val())
                        console.log(snapshot.val())
                    } 
                    else console.log("No data available")
                })
                .catch(err =>  console.error(err))  
            } 
            else console.log('user does not exist !!')
        })

        
        db.ref('posts/' + courseID ).get()
        .then(res => {
            setCreatorID(res.val().creatorsID)
            console.log(res.val())
        })
        .catch(err => console.log(err))

        


    }, [])


    const enrolHandler = e => {
        const data = {
            desc:desc,
            email:email,
            name:name,
            sem:year,
            title:title,
            topics:topics
        }


        const studData = {
            name: userInfomation.name,
            sem: userInfomation.sem,
            email: userInfomation.email
        }

        var enrolledStudListRef = db.ref('studentsEnrolled')
        var newEnrolledStudRef = enrolledStudListRef.push(studData)
        var enrolledStudId = newEnrolledStudRef.key
        db.ref('userdata/' + creatorID + '/courses/' + courseID + '/studentsEnrolled/' + enrolledStudId).set(studData)
        


        // .child(courseID).child('studentsEnrolled')
        // var newPostRef = postListRef.push({...data, studentId:uid})
        // var postID = newPostRef.key



        console.log(data)
        var EnrollListRef = db.ref('enroll')
        var newEnrollRef = EnrollListRef.push(data)
        var EnrollId = newEnrollRef.key
        db.ref('userdata/' + uid + '/enrolled/' + EnrollId).set(data)


    }


    return (
        <CardWrapper color={borderColor} onClick={onClick}>
            <Card color={bgColor} textColor={textColor}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 my-auto'>
                            <h5>{name}</h5>
                            <p>{year}</p>
                        </div>
                        <div className='col-8 my-auto'>
                            <p>{desc}</p>
                        </div>
                        <div className='col-2'>
                                <img src={PinkCard} style={{'max-width':'100%'}}/>
                                <button onClick={enrolHandler} style={{border:0, fontSize:'0.8rem'}}>ENROLL</button>
                            {username}
                        </div>
                    </div>
                </div>
            </Card>
        </CardWrapper>
  )
}

export default SearchCourseCardIn