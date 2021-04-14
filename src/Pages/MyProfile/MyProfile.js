import React, { useState } from 'react'
import {SideNav, SideMail} from '../../Components'
import {ENROLLEDcard, COURSEScard, SocialLinks, UserInfo, CustomButton} from '../../Common'
import '../../App.css'



const MyProfile = ({username}) => {

    const coursesVals = [
        {id:0, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:1, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:2, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'},
        {id:3, category:'COURSES', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#f17a7e', bgColor:'#f17a7e', username:username, inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#f17a7e', inBgColor:'#fff', inTextColor:'#f17a7e'}
    ]

    const enrolledVals = [
        {id:0, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:1, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:2, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'},
        {id:3, category:'ENROLLED', title:'WEB DEVELOPMENT', topics:'HTML basics . CSS basics . HTML Dom . JS language . NodeJS', borderColor:'#ffc94b', bgColor:'#ffc94b', username:username, name:'Tanisha Bisht', inDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloue laudantium, totam rem aperiam, eaqu. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', inBorderColor:'#ffc94b', inBgColor:'#fff', inTextColor:'#ffc94b'}
    ]

    const [activeTab, setActiveTab] = useState('COURSES')
    const changeTab = (e) => {
        setActiveTab(e.target.outerText)
        console.log(e.target.outerText)
    }

    

    return (
        <div className='container-fluid myProfileWrapper'>
            <div className='row'>
                <div className='col-3'><SideNav/></div>
                <div className='col-7 p-5' style={{height:'200vh'}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8'><UserInfo name='Tanisha Bisht' username={username} year='SECOND YEAR' stacks='ReactJS . MongoDB . HTML . CSS' desc='Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.' /></div>
                            <div className='col-4'><SocialLinks/></div>
                        </div>
                        <div className='row my-5'>
                            <div className='col'><CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff' onClick={(e) => changeTab(e)}>COURSES</CustomButton></div>
                            <div className='col'><CustomButton borderColor='#ffc94b' bgColor='#fff' textColor='#ffc94b' onClick={(e) => changeTab(e)}>ENROLLED</CustomButton></div>
                        </div>
                        {activeTab === 'COURSES' ?
                            coursesVals.map(({id, title, topics, borderColor, bgColor, username, inDesc, inBorderColor, inBgColor, inTextColor}) => {
                                return (
                                    <COURSEScard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} username={username} inDesc={inDesc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
                                )
                            }):
                            enrolledVals.map(({id, title, topics, borderColor, bgColor, username, name, inDesc, inBorderColor, inBgColor, inTextColor}) => {
                                return (
                                    <ENROLLEDcard key={id} title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} username={username} name={name} inDesc={inDesc} inBorderColor={inBorderColor} inBgColor={inBgColor} inTextColor={inTextColor} />
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