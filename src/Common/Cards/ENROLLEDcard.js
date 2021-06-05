import React, { useState } from 'react'
import {CardOut, EnrolledCardIn} from '../index'



const ENROLLEDcard = ({title, topics, cardColor, email, name, inDesc}) => {

    const [toggle, setToggle] = useState(true)
    const onClickCard = () => setToggle(prevToggle => !prevToggle)

    return (
        <React.Fragment>
            {toggle ? 
            <CardOut title={title} topics={topics} cardColor={cardColor} onClick={onClickCard} /> : 
            <EnrolledCardIn email={email} name={name} desc={inDesc} onClick={onClickCard} />}
        </React.Fragment>
    )
}


export default ENROLLEDcard