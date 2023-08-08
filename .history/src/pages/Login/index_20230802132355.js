import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, InputNumber } from 'antd';
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
                    <div></div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
