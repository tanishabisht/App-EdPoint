import React, { useState } from 'react'
import {CardOut, CourseCardIn} from '../index'



const COURSEScard = ({title, topics, inDesc}) => {

    const [toggle, setToggle] = useState(true)
    const onClickCard = () => setToggle(prevToggle => !prevToggle)

    return (
        <React.Fragment>
            {toggle ? 
            <CardOut title={title} topics={topics} onClick={onClickCard}/> :
            <CourseCardIn desc={inDesc} onClick={onClickCard}/>}
        </React.Fragment>
    )
}


export default COURSEScard




// title, topics, borderColor, bgColor, username, email, inDesc, inBorderColor, inBgColor, inTextColor