import {SideNav, SideMail} from '../index'
import classes from './Layout.module.scss'



const Layout = ({userData, children}) => {
    
    return (
        <div className={`container-fluid ${classes.BgImgWrapper}`}>
            <div className='row'>
                <div className='col-3'>
                    <SideNav name={userData.name} />
                </div>
                <div className='col-7 p-5'>
                    <div className='container'>{children}</div>
                </div>
                <div className='col-2'>
                    <SideMail/>
                </div>
            </div>
        </div>
    )
}



export default Layout