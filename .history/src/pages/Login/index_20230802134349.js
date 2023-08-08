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
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-10 d-flex">
                    <div className="col-md-6">
                        <img src={imgpass} alt="anh pass" />
                    </div>
                    <div className="col-md-6 mt-5 d-flex flex-column align-items-center bg-login">
                        <img className='avatar_login' src={avatarLogin} style={{width:'80px', height:'80px', borderRadius:'50%'}}/>
                        <h3 className='title_login'>Login</h3>
                        <div className='col-md-8'>
                            <Form  {...layout} name="nest-messages" >
                                <Form.Item name={['user', 'email']} label="" rules={[{ type: 'email' }]}>
                                    <Input placeholder='Email'/>
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
