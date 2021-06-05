import PinkCard from '../../Images/pinkCustom.svg'
import {CardWrapper, Card} from './card.elements'


const CourseCardIn = ({desc, onClick}) => {
    const borderTextColor = '#f17a7e'
    const bgColor = '#fff'
    return (
        <CardWrapper color={borderTextColor} onClick={onClick}>
            <Card color={bgColor} textColor={borderTextColor}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 my-auto'>
                            <img src={PinkCard} style={{maxWidth:'100%'}} alt='pink_card' />
                        </div>
                        <div className='col-10 my-auto'>
                            <p style={{textAlign:'justify'}}>{desc}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default CourseCardIn