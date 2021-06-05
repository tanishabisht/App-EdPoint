import YellowCard from '../../../Images/yellowCustom.svg'
import {CardWrapper, Card} from '../card.elements'


const EnrolledCardIn = ({email, name, desc, onClick}) => {
    const borderTextColor = '#ffc94b'
    const bgColor = '#fff'
    return (
        <CardWrapper color={borderTextColor} onClick={onClick}>
            <Card color={bgColor} textColor={borderTextColor}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2 my-auto'>
                            <img src={YellowCard} style={{maxWidth:'100%'}} alt='yellow_card' />
                        </div>
                        <div className='col-10 my-auto'>
                            <h4>Mentor: {name}</h4>
                            <p style={{fontSize:'0.8rem'}}>{email}</p>
                            <p style={{textAlign:'justify', marginTop:'10px'}}>{desc}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default EnrolledCardIn