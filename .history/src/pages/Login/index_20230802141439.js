import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, InputNumber } from 'antd';
////img
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png';
import './Login.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function Login() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="d-flex justify-content-center className='mb-5'">
                    <div className="col-md-4">
                        <img src={imgpass} alt="anh pass" />
                    </div>
                    <div className="col-md-4 mt-5 d-flex flex-column align-items-center bg-login">
                        <img
                            className="avatar_login"
                            src={avatarLogin}
                            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                        />
                        <h3 className="title_login">Login</h3>
                        <div className="col-md-10">
                            <Form
                                className="d-flex flex-column justify-content-center align-items-center form"
                                {...layout}
                                name="nest-messages"
                            >
                                <Form.Item name={['user', 'email']} label="" rules={[{ type: 'email' }]}>
                                    <Input style={{ width: '250px' }} placeholder="Email" />
                                </Form.Item>
                                <div className="mb-4">
                                    <Input.Password style={{ width: '250px' }} placeholder="input password" />
                                </div>
                                <Button
                                    className="mb-4"
                                    style={{ width: '250px', backgroundColor: 'black' }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Login
                                </Button>
                                <div className='d-flex'>
                                    <p className='cdk mb-0 ms-3'>Don't have an account? </p>
                                    <p>Create</p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
