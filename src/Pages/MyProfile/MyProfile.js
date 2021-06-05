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