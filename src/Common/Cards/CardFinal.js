import WhiteCard from '../../Images/whiteCustom.svg'
import styled from 'styled-components'



export const CardWrapper = styled.div`
    width: fit-content;
    margin: auto;
    clip-path: polygon(20% 0, 97% 0, 100% 15%, 100% 97%, 80% 100%, 3% 100%, 0 85%, 0 3%);
    background: ${({color}) => color || '#f17a7e'};
    border: 2px solid ${({color}) => color || '#f17a7e'};
    margin-bottom: 1rem;
`

export const Card = styled.div`
    margin: auto;
    clip-path: polygon(20% 0, 97% 0, 100% 15%, 100% 97%, 80% 100%, 3% 100%, 0 85%, 0 3%);
    background: ${({color}) => color || '#f17a7e'};
    padding: 20px 20px;
    text-align: left;
    color: ${({textColor}) => textColor || '#fff'};
    &:hover{
        cursor: pointer;
    }
    &:active{
        background-color: #000;
        color: #fff;
    }
`



const CardOut = ({title, topics, borderColor, bgColor, username, name, inDesc, borderColor, bgColor, textColor}) => {
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