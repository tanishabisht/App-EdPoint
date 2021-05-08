import './modal.scss'
import Avatar from '../../Images/avatar.svg'
import {CustomButton} from '../../Common'

const InputModal = () => {
  return (
      <div className='center_content'>
            <div className='modal_container'>
                <img className='modal_avatar' src={Avatar}/>
                <div className='modalfield'>
                    <label className='modal_label' for="course_title">Course Title:</label>
                    <span className='modal_input_wrapper'><input type="text" className='modal_input' name="course_title"/></span>
                </div>
                <div className='modalfield'>
                    <label className='modal_label' for="sub_topics">Sub Topics:</label>
                    <span className='modal_input_wrapper'><input type="text" className='modal_input' name="sub_topics"/></span>
                </div>
                <div className='modalfield'>
                    <label className='modal_label' for="description">Description:</label>
                    <span className='modal_input_wrapper'><input type="text" className='modal_input' name="description"/></span>
                </div>
                <div className='modalfield'>
                    <label className='modal_label' for="cgpa">CGPA:</label>
                    <span className='modal_input_wrapper'><input type="text" className='modal_input' name="cgpa"/></span>
                </div>
                <div className='modalfield'>
                    <label className='modal_label' for="achievement">Achievements:</label>
                    <span className='modal_input_wrapper'><input type="text" className='modal_input' name="achievement"/></span>
                </div><br/><br/>
                <CustomButton borderColor='#4A6163' bgColor='#2F3D3F' textColor='#fff' >Submit</CustomButton>
            </div>
      </div>
  )
}

export default InputModal