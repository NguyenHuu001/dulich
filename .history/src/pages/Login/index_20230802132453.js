import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, InputNumber } from 'antd';
////img
import imgpass from '../../assets/images/img_pass.png'
import './Login.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


function Login() {
    return (
        <div className='container'> 
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-8'>
                <div className='col-md-6'>
                    <img src={imgpass}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
