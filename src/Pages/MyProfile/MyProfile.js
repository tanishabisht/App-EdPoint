import React, { useState, useEffect } from 'react'
import {SideNav, SideMail} from '../../Components'
import {ENROLLEDcard, COURSEScard, SocialLinks, UserInfo, CustomButton} from '../../Common'
import { db, auth } from '../../Config/firebaseConfig'
import '../../App.css'



const MyProfile = ({username}) => {

    // const coursesValsVar = [
    //     {id:0, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
    //     {id:1, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
    //     {id:2, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
    //     {id:3, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'}
    // ]

    const enrolledVals = [
        {id:0, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:1, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:2, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:3, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'}
    ]

  


    const [coursesVals, setCourseVals] = useState([])
    const [enrolledCourseVals, setEnrolledCourseVals] = useState([])
    const [userInfomation, setUserInfomation] = useState({})



    useEffect(() => {

        auth.onAuthStateChanged(user => {
          if(user){
            const uid = user.uid
            const dbRef = db.ref()
            dbRef.child("userdata").child(uid).get()
                .then(snapshot => {
                    if(snapshot.exists()){
                        setUserInfomation(snapshot.val())
                        const usercourses = snapshot.val().courses
                        const enrolledCourses = snapshot.val().enrolled
                        console.log('userCourses: ', usercourses)
                        console.log('enrolledCourses: ', enrolledCourses)

                        var usercoursesArr = []
                        for (let key in usercourses){
                            usercoursesArr.push({
                                ...usercourses[key], 
                                id:key,
                                borderColor:'#f17a7e', 
                                bgColor:'#f17a7e',
                                inBorderColor: '#f17a7e', 
                                inBgColor:'#fff', 
                                inTextColor:'#f17a7e' 
                            })
                        }
                        
                        var enrolledCoursesArr = []
                        for (let key in enrolledCourses){
                            enrolledCoursesArr.push({
                                ...enrolledCourses[key], 
                                id:key,
                                borderColor:'#ffc94b', 
                                bgColor:'#ffc94b',
                                inBorderColor: '#ffc94b', 
                                inBgColor:'#fff', 
                                inTextColor:'#ffc94b' 
                            })
                        }

                        console.log(usercoursesArr)
                        console.log(enrolledCoursesArr)

                        setEnrolledCourseVals(enrolledCoursesArr)
                        setCourseVals(usercoursesArr)
                    } 
                    else console.log("No data available")
                })
                .catch(err =>  console.error(err))   
          }
          else console.log('user does not exist !!')
        })      

     
    }, [])

    const [activeTab, setActiveTab] = useState('COURSES')
    const changeTab = (e) => {
        setActiveTab(e.target.outerText)
        console.log(e.target.outerText)
    }

    

    return (
        <div className='container-fluid myProfileWrapper'>
            <div className='row'>
                <div className='col-3'><SideNav name={userInfomation.name} /></div>
                <div className='col-7 p-5' style={{height:'200vh'}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8'><UserInfo name={userInfomation.name} username={userInfomation.name} year={userInfomation.sem} desc={userInfomation.bio} /></div>
                            <div className='col-4'><SocialLinks/></div>
                        </div>
                        <div className='row my-5'>
                            <div className='col'><CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff' onClick={(e) => changeTab(e)}>COURSES</CustomButton></div>
                            <div className='col'><CustomButton borderColor='#ffc94b' bgColor='#fff' textColor='#ffc94b' onClick={(e) => changeTab(e)}>ENROLLED</CustomButton></div>
                        </div>
                        {activeTab === 'COURSES' ?
                        coursesVals.map(({id, title, topics, borderColor, bgColor, name, email, desc, inBorderColor, inBgColor, inTextColor}) => {
                                return (
                                    <COURSEScard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} username={name} email={email} inDesc={desc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
                                )
                            }):
                            enrolledCourseVals.map(({id, title, topics, borderColor, bgColor, username, name, desc, inBorderColor, inBgColor, inTextColor}) => {
                                return (
                                    <ENROLLEDcard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} username={username} name={name} inDesc={desc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
                                )
                            })
                        }
                        
                    </div>
                </div>
                <div className='col-2'><SideMail/></div>
            </div>
        </div>
    )
}



export default MyProfile