import WhiteCard from '../../Images/whiteCustom.svg'
import {CardWrapper, Card} from './card.elements'

const CardOut = ({title, topics, borderColor, bgColor, onClick}) => {    

    return (
        <CardWrapper color={borderColor} onClick={onClick}>
            <Card color={bgColor}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-2 my-auto'><img src={WhiteCard} style={{maxWidth:'100%'}}/></div>
                        <div className='col-8 my-auto'>
                            <h2>{title}</h2>
                            <p>{topics}</p>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
            </Card>
        </CardWrapper>
    )
}

export default CardOut