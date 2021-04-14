import React, { useState } from 'react'
import {SideNav, SideMail} from '../../Components'
import {SEARCHcard} from '../../Common'
import '../../App.css'
import './searchcourse.scss'



const SearchCourses = ({username}) => {

    const allCoursesVals = [
        {id:0, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:1, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:2, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:3, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:4, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:5, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:6, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:7, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:8, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:9, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:10, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', year:'SEACOND YEAR', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'}
    ]

   

    return (
        <div className='container-fluid myProfileWrapper'>
            <div className='row'>
                <div className='col-3'><SideNav/></div>
                <div className='col-7 p-5' style={{height:'200vh'}}>
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col mx-auto'><input type="text" className='searchCourse_InpBox' name="search"/></div>
                        </div>
                        {allCoursesVals.map(({id, title, topics, borderColor, bgColor, name, username, year, inDesc, inBorderColor, inBgColor, inTextColor}) => {
                            return(
                                <SEARCHcard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} name={name} username={username} year={year} inDesc={inDesc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
                            )
                        })}
                    </div>
                </div>
                <div className='col-2'><SideMail/></div>
            </div>
        </div>
    )
}



export default SearchCourses





// <div className='row my-5'>
// <div className='col'><CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff' onClick={(e) => changeTab(e)}>COURSES</CustomButton></div>
// <div className='col'><CustomButton borderColor='#ffc94b' bgColor='#fff' textColor='#ffc94b' onClick={(e) => changeTab(e)}>ENROLLED</CustomButton></div>
// </div>