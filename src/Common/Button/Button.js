import styled from 'styled-components'

export const BtnWrapper = styled.div`
  width: 80%;
  margin: auto;
  clip-path: polygon(40% 0, 95% 0, 100% 40%, 100% 95%, 60% 100%, 5% 100%, 0 60%, 0 5%);
  background: ${({color}) => color || '#f17a7e'};
  border: 2px solid ${({color}) => color || '#f17a7e'};
  margin-bottom: 1rem;
`

export const Btn = styled.div`
  margin: auto;
  clip-path: polygon(40% 0, 95% 0, 100% 40%, 100% 95%, 60% 100%, 5% 100%, 0 60%, 0 5%);
  background: ${({color}) => color || '#f17a7e'};
  color: ${({textColor}) => textColor || '#fff'};
  padding: 15px;
  text-align: center;
  &:hover{
    cursor: pointer;
  }
  &:active{
    background-color: #000;
    color: #fff;
  }
  h5{
    margin: 0;
  }
`

const CustomButton = ({children, borderColor, bgColor, textColor, onClick}) => {
  return (
    <BtnWrapper color={borderColor} onClick={onClick}>
      <Btn color={bgColor} textColor={textColor}><h5>{children}</h5></Btn>
    </BtnWrapper>
  )
}

export default CustomButton