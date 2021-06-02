import React, { useState } from 'react'
import {CardOut, SearchCourseCardIn} from '../index'



const SEARCHcard = ({title, courseID, email, topics, borderColor, bgColor, name, username, year, inDesc, inBorderColor, inBgColor, inTextColor}) => {

    const [toggle, setToggle] = useState(true)

    const onClickCard = () => {
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <>
            {toggle ? 
                <CardOut title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} onClick={onClickCard} /> : 
                <SearchCourseCardIn courseID={courseID} email={email} title={title} topics={topics} name={name} username={username} year={year} desc={inDesc} borderColor={inBorderColor} bgColor={inBgColor} textColor={inTextColor} onClick={onClickCard} />
            }
        </>
    )
}

export default SEARCHcard