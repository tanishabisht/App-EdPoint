import { useState, useEffect } from 'react'
import { Layout } from '../../Components'
import { ENROLLEDcard, COURSEScard, UserInfo, CustomButton } from '../../Common'
import { db, auth } from '../../Config/firebaseConfig'
import { objToArr } from '../../Utils/javascript.function'




const MyProfile = () => {


    // State for getting data
    const [userCoursesData, setUserCoursesData] = useState([])
    const [enrolledCoursesData, setEnrolledCoursesData] = useState([])
    const [userData, setUserData] = useState({})

    // State for switching between tabs : courses & enrolled
    const [activeTab, setActiveTab] = useState('COURSES')
    const changeTab = (e) => setActiveTab(e.target.outerText)
  
    

    // get data for the user, courses created, courses enrolled
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                const dbRef = db.ref()
                dbRef.child("userdata").child(user.uid).get()
                .then(res => {
                    if(res.exists()){
                        setUserData(res.val())

                        // convert courses object to array
                        var userCoursesArr = objToArr(res.val().courses)                        
                        var enrolledCoursesArr = objToArr(res.val().enrolled, {cardColor:'#ffc94b'})

                        // update the state
                        setUserCoursesData(userCoursesArr)
                        setEnrolledCoursesData(enrolledCoursesArr)
                    } 
                    else console.log("No data available")
                })
                .catch(err =>  console.error(err))
            } 
            else console.log('user does not exist !!')
        })
    }, [setUserData, setUserCoursesData, setEnrolledCoursesData])

    

    return (
        <Layout userData={userData}>

            <UserInfo name={userData.name} email={userData.email} year={userData.sem} desc={userData.bio} />
          
            <div className='row my-5'>
                <div className='col'><CustomButton onClick={(e) => changeTab(e)}>COURSES</CustomButton></div>
                <div className='col'><CustomButton borderColor='#ffc94b' textColor='#ffc94b' onClick={(e) => changeTab(e)}>ENROLLED</CustomButton></div>
            </div>
            {activeTab === 'COURSES' ?
            userCoursesData.map(c => <COURSEScard key={c.id} title={c.title} topics={c.topics} inDesc={c.desc} />) :
            enrolledCoursesData.map(c => <ENROLLEDcard key={c.id} title={c.title} topics={c.topics} name={c.name} email={c.email} inDesc={c.desc} cardColor={c.cardColor} />) }
        </Layout>
    )
}


export default MyProfile



// for (let key in usercourses){
//     usercoursesArr.push({ ...usercourses[key], id:key })
// }


// for (let key in enrolledCourses){
//     enrolledCoursesArr.push({ ...enrolledCourses[key], id:key, cardColor:'#ffc94b' })
// }

// <div className='container-fluid myProfileWrapper'>
//             <div className='row'>
//                 <div className='col-3'><SideNav name={userData.name} /></div>
//                 <div className='col-7 p-5' style={{height:'200vh'}}>
//                     <div className='container'>
//                         <div className='row'>
//                             <div className='col-8'><UserInfo name={userData.name} username={userData.name} year={userData.sem} desc={userData.bio} /></div>
//                             <div className='col-4'></div>
//                         </div>
//                         <div className='row my-5'>
//                             <div className='col'><CustomButton onClick={(e) => changeTab(e)}>COURSES</CustomButton></div>
//                             <div className='col'><CustomButton borderColor='#ffc94b' textColor='#ffc94b' onClick={(e) => changeTab(e)}>ENROLLED</CustomButton></div>
//                         </div>
//                         {activeTab === 'COURSES' ?
//                         coursesVals.map(({id, title, topics, borderColor, bgColor, name, email, desc, inBorderColor, inBgColor, inTextColor}) => {
//                                 return (
//                                     <COURSEScard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} username={name} email={email} inDesc={desc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
//                                 )
//                             }):
//                             enrolledCourseVals.map(({id, title, topics, borderColor, bgColor, username, name, desc, inBorderColor, inBgColor, inTextColor}) => {
//                                 return (
//                                     <ENROLLEDcard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} username={username} name={name} inDesc={desc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
//                                 )
//                             })
//                         }
                        
//                     </div>
//                 </div>
//                 <div className='col-2'><SideMail/></div>
//             </div>
//         </div>








// useEffect(() => {

//     console.log(userData)
//     auth.onAuthStateChanged(user => {
//         if (user) {
//             // set the uid
//             const uidVar = user.uid
//             setUid(user.uid)

//             const dbRef = db.ref()
//             dbRef.child("userdata").child(uidVar).get()
//             .then(snapshot => {
//                 if(snapshot.exists()){
//                     console.log(snapshot.val())
//                     setUserData(snapshot.val())
//                     const usercourses = snapshot.val().courses
//                     const enrolledCourses = snapshot.val().enrolled
//                     console.log('userCourses: ', usercourses)
//                     console.log('enrolledCourses: ', enrolledCourses)

//                     var usercoursesArr = []
//                     for (let key in usercourses){
//                         usercoursesArr.push({
//                             ...usercourses[key], 
//                             id:key,
//                             borderColor:'#f17a7e', 
//                             bgColor:'#f17a7e',
//                             inBorderColor: '#f17a7e', 
//                             inBgColor:'#fff', 
//                             inTextColor:'#f17a7e' 
//                         })
//                     }
                    
//                     var enrolledCoursesArr = []
//                     for (let key in enrolledCourses){
//                         enrolledCoursesArr.push({
//                             ...enrolledCourses[key], 
//                             id:key,
//                             borderColor:'#ffc94b', 
//                             bgColor:'#ffc94b',
//                             inBorderColor: '#ffc94b', 
//                             inBgColor:'#fff', 
//                             inTextColor:'#ffc94b' 
//                         })
//                     }

//                     console.log(usercoursesArr)
//                     console.log(enrolledCoursesArr)

//                     setEnrolledCourseVals(enrolledCoursesArr)
//                     setCourseVals(usercoursesArr)
//                 } 
//                 else console.log("No data available")
//             })
//             .catch(err =>  console.error(err))   

//         } 
//         else console.log('user does not exist !!')
//         })

    
    
// }, [])
