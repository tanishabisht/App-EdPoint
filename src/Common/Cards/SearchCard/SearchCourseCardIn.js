import PinkCard from '../../../Images/pinkCustom.svg'
import { CardWrapper, Card } from '../card.elements'
import { useState, useEffect } from 'react'
import { db, auth } from '../../../Config/firebaseConfig'
import classes from '../Cards.module.scss'
import { NavLink } from 'react-router-dom'


const SearchCourseCardIn = ({courseID, title, topics, email, name, year, desc, onClick}) => {

    // State for getting data
    const [uid, setUid] = useState('')
    const [creatorID, setCreatorID] = useState('')
    const [userData, setUserData] = useState({})


    // Set Styling variables
    const borderTextColor = '#f17a7e'
    const bgColor = '#fff'




    // get data for the user and all courses
    useEffect(() => {

        // get uid and userdata
        auth.onAuthStateChanged(user => {
            if (user){
                setUid(user.uid)
                const dbRef = db.ref()
                dbRef.child("userdata").child(user.uid).get()
                    .then(res => {
                        if(res.exists()) setUserData(res.val())
                        else console.log("No data available")
                    }).catch(err =>  console.error(err))  
            }
            else console.log('user does not exist !!')
        })

        // get the id of the creator
        db.ref('posts/' + courseID ).get()
        .then(res => setCreatorID(res.val().creatorsID))
        .catch(err => console.log(err))

    }, [courseID])




    const enrolHandler = () => {
        const data = { desc, email, name, sem:year, title, topics }
        const studData = { name:userData.name, sem:userData.sem, email:userData.email }

        // update in the creator's db that loggen in user is enrolled
        var enrolledStudListRef = db.ref('studentsEnrolled')
        var newEnrolledStudRef = enrolledStudListRef.push(studData)
        var enrolledStudId = newEnrolledStudRef.key
        db.ref('userdata/' + creatorID + '/courses/' + courseID + '/studentsEnrolled/' + enrolledStudId).set(studData)

        // add in the user's enrolledCourses
        var EnrollListRef = db.ref('enroll')
        var newEnrollRef = EnrollListRef.push(data)
        var EnrollId = newEnrollRef.key
        db.ref('userdata/' + uid + '/enrolled/' + EnrollId).set(data)
    }


    
    return (
        <CardWrapper color={borderTextColor} onClick={onClick}>
            <Card color={bgColor} textColor={borderTextColor}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 my-auto'>
                            <img src={PinkCard} style={{maxWidth:'100%'}} alt='pink_card' />
                            <NavLink to='/profile'><button onClick={enrolHandler} className={classes.EnrollBtn}>ENROLL</button></NavLink>
                        </div>
                        <div className='col-10 my-auto'>
                            <h4>Mentor: {name}</h4>
                            <p style={{fontSize:'0.8rem'}}>Semester {year} | {email}</p>
                            <p style={{textAlign:'justify', marginTop:'10px'}}>{desc}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </CardWrapper>
    )
}


export default SearchCourseCardIn