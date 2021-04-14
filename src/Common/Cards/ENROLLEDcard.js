import React, { useState } from 'react'
import {CardOut, EnrolledCardIn} from '../index'



const ENROLLEDcard = ({title, topics, borderColor, bgColor, username, name, inDesc, inBorderColor, inBgColor, inTextColor}) => {

    const [toggle, setToggle] = useState(true)

    const onClickCard = () => {
        setToggle(prevToggle => !prevToggle)
    }

    return (
        <>
            {toggle ? 
                <CardOut title={title} topics={topics} borderColor={borderColor} bgColor={bgColor} onClick={onClickCard} /> : 
                <EnrolledCardIn username={username} name={name} desc={inDesc} borderColor={inBorderColor} bgColor={inBgColor} textColor={inTextColor} onClick={onClickCard} />
            }
        </>
    )
}

export default ENROLLEDcard