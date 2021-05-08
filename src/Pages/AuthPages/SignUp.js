import {CustomButton} from '../../Common'
import SIGNUp from '../../Images/SIGNUp.svg'
import {NavLink} from 'react-router-dom'
import './authpage.scss'




const SignUp = () => {
        

    return (
        <div className='container-fluid SIGNINUPWrapper'>
            <img src={SIGNUp} alt='main' className='loginBox' />
            <div className='row' style={{height:'100vh'}}>
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
                    <NavLink className='loginLink' to="/signin">
                        <CustomButton borderColor='#f17a7e' bgColor='#f17a7e' textColor='#fff'>SIGN UP</CustomButton>
                    </NavLink>
                </div>
                <div className='col'></div>
                <div className='col'></div>
            </div>
        </div>
    )
}



export default SignUp