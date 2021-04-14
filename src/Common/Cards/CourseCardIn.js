import PinkCard from '../../Images/pinkCustom.svg'
import {CardWrapper, Card} from './card.elements'


const CourseCardIn = ({username, desc, borderColor, bgColor, textColor, onClick}) => {
  return (
    <CardWrapper color={borderColor} onClick={onClick}>
        <Card color={bgColor} textColor={textColor}>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 my-auto'>
                        <img src={PinkCard} style={{'max-width':'100%'}}/>
                        {username}
                    </div>
                    <div className='col-9 my-auto'>
                        <p>{desc}</p>
                    </div>
                    <div className='col-1'><h6>WHY ME</h6></div>
                </div>
            </div>
        </Card>
    </CardWrapper>
  )
}

export default CourseCardIn