import facebookLogo from '../../Images/link-facebook-brush.svg'
import instagramLogo from '../../Images/link-instagram-brush.svg'
import linkedinLogo from '../../Images/link-linkedin-brush.svg'

const SocialLinks = ({children}) => {
  return (
      <div className='container'>        
        <div className='row' style={{'width':'250px'}} >
            <div className='col'><img src={facebookLogo} alt='fbLogo' style={{maxWidth:'100%'}} /></div>
            <div className='col'><img src={instagramLogo} alt='instaLogo' style={{maxWidth:'100%'}} /></div>
            <div className='col'><img src={linkedinLogo} alt='linekdinLogo' style={{maxWidth:'100%'}} /></div>
        </div>
      </div>
  )
}

export default SocialLinks