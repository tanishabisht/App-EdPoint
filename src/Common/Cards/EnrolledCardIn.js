import YellowCard from '../../Images/yellowCustom.svg'
import {CardWrapper, Card} from './card.elements'


const EnrolledCardIn = ({username, name, desc, borderColor, bgColor, textColor, onClick}) => {
  return (
    <CardWrapper color={borderColor} onClick={onClick}>
        <Card color={bgColor} textColor={textColor}>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 my-auto'>
                        <img src={YellowCard} style={{'max-width':'100%'}}/>
                        {username}
                    </div>
                    <div className='col-9 my-auto'>
                        <h2>{name}</h2>
                        <p>{desc}</p>
                    </div>
                    <div className='col-1'><h6>STATUS</h6></div>
                </div>
            </div>
        </Card>
    </CardWrapper>
  )
}

export default EnrolledCardIn