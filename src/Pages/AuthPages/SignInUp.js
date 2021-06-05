import {CustomButton} from '../../Common'
import SIGNInUp from '../../Images/SIGNInUp.svg'
import {NavLink} from 'react-router-dom'
import classes from './authpage.module.scss'




const SignInUp = () => {

    const onSignIn = () => {
        console.log('sign in')
    }

    const onSignUp = () => {
        console.log('sign up')
    }
        

    return (
        <div className={`container-fluid ${classes.AuthWrapper}`}>
            <img src={SIGNInUp} alt='main' className={classes.AuthBox} />
            <div className='row' style={{height:'100vh'}}>
                <div className='col'></div>
                <div className={`col ${classes.SignInBtn}`}>
                    <NavLink className={classes.Link} to="/signin">
                        <CustomButton borderColor='#f9a66c' bgColor='#f9a66c' textColor='#fff' onClick={onSignIn}>SIGN IN</CustomButton>
                    </NavLink>                    
                </div>
                <div className={`col ${classes.SignUpBtn}`}>
                    <NavLink className={classes.Link} to="/signup">
                        <CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff' onClick={onSignUp}>SIGN UP</CustomButton>
                    </NavLink>                    
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}



export default SignInUp