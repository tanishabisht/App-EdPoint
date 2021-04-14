import PinkCard from '../../Images/pinkCustom.svg'
import YellowCard from '../../Images/yellowCustom.svg'
import {CardWrapper, Card} from './card.elements'


const SearchCourseCardIn = ({name, username, year, desc, borderColor, bgColor, textColor, onClick}) => {
  return (
    <CardWrapper color={borderColor} onClick={onClick}>
        <Card color={bgColor} textColor={textColor}>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 my-auto'>
                        <h5>{name}</h5>
                        <p>{year}</p>
                    </div>
                    <div className='col-8 my-auto'>
                        <p>{desc}</p>
                    </div>
                    <div className='col-2'>
                        {textColor==='#ffc94b' ?
                        <img src={YellowCard} style={{'max-width':'100%'}}/> :
                        <img src={PinkCard} style={{'max-width':'100%'}}/>}                        
                        {username}
                    </div>
                </div>
            </div>
        </Card>
    </CardWrapper>
  )
}

export default SearchCourseCardIn