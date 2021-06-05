import React, { useState } from 'react'
import {CardOut, SearchCourseCardIn} from '../../index'



const SEARCHcard = ({title, courseID, email, topics, name, year, inDesc}) => {

    const [toggle, setToggle] = useState(true)
    const onClickCard = () => setToggle(prevToggle => !prevToggle)

    return (
        <React.Fragment>
            {toggle ? 
                <CardOut title={title} topics={topics} onClick={onClickCard} /> : 
                <SearchCourseCardIn courseID={courseID} email={email} title={title} topics={topics} name={name} year={year} desc={inDesc} onClick={onClickCard} />
            }
        </React.Fragment>
    )
}

export default SEARCHcard