import { useState, useEffect } from 'react'
import { Layout } from '../../Components'
import { SEARCHcard } from '../../Common'
import { db, auth } from '../../Config/firebaseConfig'
import classes from './Searchcourse.module.scss'
import { objToArr } from '../../Utils/javascript.function'



const SearchCourses = () => {

    
    // State for getting data
    const [allCoursesData, setAllCoursesData] = useState([])
    const [userData, setUserData] = useState({})

    // State for filtering cards wrt the search box
    const [searchString, setSearchString] = useState('')
    const handleChange = e => setSearchString(e.target.value.trim().toLowerCase())
    


    // get data for the user and all courses
    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                const dbRef = db.ref()
                dbRef.child("userdata").child(user.uid).get()
                .then(res => {
                    if(res.exists()) setUserData(res.val())
                    else console.log("No user data available")
                }).catch(err => console.log(err))
            }
        })

        const dbRef = db.ref()
        dbRef.child("posts").get()
        .then(res => {
            if (res.exists()){
                const dataArr = objToArr(res.val())
                setAllCoursesData(dataArr)
            } 
            else console.log("No data available")
        })
        .catch(err =>  console.error(err))

    }, [])
   


    return (
        <Layout userData={userData}>
            <div className='row my-5'>
                <div className='col mx-auto'>
                    <input type="text" className={classes.SearchBox} onChange={handleChange} placeholder="type name of the course here" />
                </div>
            </div>
            {allCoursesData.filter(user =>  user.title.toLowerCase().match(searchString)).map(c => {
                return <SEARCHcard key={c.id} courseID={c.id} email={c.email} name={c.name} year={c.sem} title={c.title} topics={c.topics} inDesc={c.desc} />
            })}
        </Layout>
    )
}


export default SearchCourses