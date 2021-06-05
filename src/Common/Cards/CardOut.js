import WhiteCard from '../../Images/whiteCustom.svg'
import {CardWrapper, Card} from './card.elements'

const CardOut = ({title, topics, cardColor, onClick}) => {    

    return (
        <CardWrapper color={cardColor} onClick={onClick}>
            <Card color={cardColor}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-2 my-auto'><img src={WhiteCard} style={{maxWidth:'100%'}} alt='white_card' /></div>
                        <div className='col-8 my-auto'>
                            <h4>{title}</h4>
                            <p style={{textAlign:'justify'}}>{topics}</p>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default CardOut