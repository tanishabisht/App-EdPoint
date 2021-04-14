import React, { useState } from 'react'
import {CardOut, CourseCardIn} from '../index'



const COURSEScard = ({title, topics, borderColor, bgColor, username, inDesc, inBorderColor, inBgColor, inTextColor}) => {

    const [toggle, setToggle] = useState(true)

    const onClickCard = () => {
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <>
            {toggle ? 
                <CardOut title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} onClick={onClickCard} /> : 
                <CourseCardIn username={username} desc={inDesc} borderColor={inBorderColor} bgColor={inBgColor} textColor={inTextColor} onClick={onClickCard} />
            }
        </>
    )
}

export default COURSEScard