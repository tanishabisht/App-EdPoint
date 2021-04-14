import MailIcon from '../../Images/mailIcon.svg'
import BgImg from '../../Images/bgImg.png'
import styled from 'styled-components'

const SideMailWrapper = styled.div`
  background-image: url(${BgImg});
  height: 100%;
  width: 16%; 
  position: fixed; 
  z-index: 1; 
  top: 0;
  right: 0;
  overflow-x: hidden;
`

const Mail = styled.img`
  height: 120px;
  width: 120px;
  position: fixed;
  z-index: 1; 
  bottom: 0; 
  right: 0;
  overflow-x: hidden; 
  padding: 20px;
`
Mail.defaultProps = {
  src: MailIcon,
  alt: 'mailLogo'
};


const SideMail = ({children}) => {
  return (
      <SideMailWrapper>
        <Mail/>
      </SideMailWrapper>
  )
}

export default SideMail