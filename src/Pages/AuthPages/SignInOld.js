import {CustomButton} from '../../Common'
import SIGNIn from '../../Images/SIGNIn.svg'
import {NavLink} from 'react-router-dom'
import './authpage.scss'




const SignIn = () => {
        

    return (
        <div className='container-fluid SIGNINUPWrapper'>
            <img src={SIGNIn} alt='main' className='loginBox' />
            <div className='row' style={{height:'100vh'}}>
                <div className='col'></div>
                <div className='col'></div>
                <div className='col signup_wrapper'>
                    <label className='login_label' for="username">Email Id:</label>
                    <div className='login_input_wrapper'>
                        <input type="text" className='login_input' name="username"/>
                    </div><br/>
                    <label className='login_label' for="username">Password:</label>
                    <div className='login_input_wrapper'>
                        <input type="text" className='login_input' name="username"/>
                    </div><br/>
                    <NavLink className='loginLink' to="/profile">
                        <CustomButton borderColor='#f9a66c' bgColor='#f9a66c' textColor='#fff'>SIGN IN</CustomButton>
                    </NavLink>
                </div>
                <div className='col'></div>
            </div>
        </div>
    )
}



export default SignIn