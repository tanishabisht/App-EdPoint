import { useState, useEffect } from 'react'
import { Layout } from '../../Components'
import { SEARCHcard } from '../../Common'
import { db, auth } from '../../Config/firebaseConfig'
import '../../App.css'
import './searchcourse.scss'



const SearchCourses = () => {

    const [coursesVals, setCourseVals] = useState([])
    const [searchString, setSearchString] = useState('')
    const [userData, setUserData] = useState({})

    const handleChange = e => {
        const data = e.target.value
        setSearchString(data.trim().toLowerCase())
    }
    

    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                const dbRef = db.ref()
                dbRef.child("userdata").child(user.uid).get()
                .then(snapshot => {
                    if(snapshot.exists()){
                        setUserData(snapshot.val())
                    }
                }).catch(err => console.log(err))
            }
        })



        const dbRef = db.ref()
        dbRef.child("posts").get()
        .then((snapshot) => {
            if (snapshot.exists()){
                const data = snapshot.val()
                console.log(data)
                var dataArr = []
                for (let key in data){
                    dataArr.push({
                        ...data[key], 
                        id:key,
                        borderColor:'#f17a7e', 
                        bgColor:'#f17a7e',
                        inBorderColor: '#f17a7e', 
                        inBgColor:'#fff', 
                        inTextColor:'#f17a7e' 
                    })
                }
                console.log(dataArr)
                setCourseVals(dataArr)
            } 
            else console.log("No data available")
        })
        .catch(err =>  console.error(err))
    }, [])
   

    return (
        <Layout userData={userData}>
            <div className='row my-5'>
                <div className='col mx-auto'>
                    <input
                        type="text"
                        className='searchCourse_InpBox'
                        onChange={handleChange}
                        placeholder="type name of the course here" 
                        name="search"/>
                </div>
            </div>
            {coursesVals.filter(user =>  user.title.toLowerCase().match(searchString)).map(({id, email, title, topics, borderColor, bgColor, name, sem, desc, inBorderColor, inBgColor, inTextColor}) => {
                return(
                    <SEARCHcard key={id} courseID={id} title={title} email={email} topics={topics} borderColor={borderColor} bgColor={bgColor} name={name} username={name} year={sem} inDesc={desc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
                )
            })}
        </Layout>  
    )
}



export default SearchCourses


// <div className='row my-5'>
// <div className='col'><CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff' onClick={(e) => changeTab(e)}>COURSES</CustomButton></div>
// <div className='col'><CustomButton borderColor='#ffc94b' bgColor='#fff' textColor='#ffc94b' onClick={(e) => changeTab(e)}>ENROLLED</CustomButton></div>
// </div>



// const allCoursesVals = [
//     {id:0, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
//     {id:1, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
//     {id:2, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
//     {id:3, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
//     {id:4, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
//     {id:5, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
//     {id:6, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
//     {id:7, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
//     {id:8, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
//     {id:9, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
//     {id:10, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'}
// ]



// <div className='container-fluid myProfileWrapper'>
//             <div className='row'>
//                 <div className='col-3'><SideNav/></div>
//                 <div className='col-7 p-5' style={{height:'200vh'}}>
//                     <div className='container'>
//                         <div className='row my-5'>
//                             <div className='col mx-auto'>
//                                 <input
//                                     type="text"
//                                     className='searchCourse_InpBox'
//                                     onChange={handleChange}
//                                     placeholder="type name of the course here" 
//                                     name="search"/>
//                             </div>
//                         </div>
//                         {coursesVals.filter(user =>  user.title.toLowerCase().match(searchString)).map(({id, email, title, topics, borderColor, bgColor, name, sem, desc, inBorderColor, inBgColor, inTextColor}) => {
//                             return(
//                                 <SEARCHcard key={id} courseID={id} title={title} email={email} topics={topics} borderColor={borderColor} bgColor={bgColor} name={name} username={name} year={sem} inDesc={desc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
//                             )
//                         })}
//                     </div>
//                 </div>
//                 <div className='col-2'><SideMail/></div>
//             </div>
//         </div>