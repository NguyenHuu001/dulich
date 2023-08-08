import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, InputNumber } from 'antd';
////img
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png'
import './Login.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function Login() {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="col-md-4">
                        <img src={imgpass} alt="anh pass" />
                    </div>
                    <div className="col-md-4 mt-5 d-flex flex-column align-items-center bg-login">
                        <img className='avatar_login' src={avatarLogin} style={{width:'80px', height:'80px', borderRadius:'50%'}}/>
                        <h3 className='title_login'>Login</h3>
                        <div className='col-md-10'>
                            <Form className='d-flex flex-column justify-content-center align-items-center form'  {...layout} name="nest-messages" >
                                <Form.Item name={['user', 'email']} label="" rules={[{ type: 'email' }]}>
                                    <Input style={{width:'200px'}} placeholder='Email'/>
                                </Form.Item>
    
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
