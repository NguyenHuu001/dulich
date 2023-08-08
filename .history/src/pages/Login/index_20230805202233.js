import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, notification } from 'antd';
import { Link } from 'react-router-dom';
////img
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png';
// import { handleLogin } from './eventsLogin';
import { fetchLogin } from '../../services/Tour_services';
import './Login.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleLogin = async () => {
        if (!email || !password) {
            notification.open({
                type: 'error',
                message: 'Thông Báo Lỗi',
                description: 'Vui lòng điền Email hoặc mật khẩu',
                duration: 1, // Thời gian tồn tại của thông báo (tính bằng giây), mặc định là 4.5 giây
            });
        }
        let res = await fetchLogin(email, 'cityslicka');
        if (res && res.token) {
            localStorage.setItem('token', res.data.token);
        }
    };
    return (
        <div className="container col-sm-12 mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 d-flex flex-wrap justify-content-center mb-5">
                    <div className="col-md-4 col-12 d-flex align-items-center">
                        <img src={imgpass} alt="anh pass" />
                    </div>
                    <div className="col-md-4 col-12 mt-5 d-flex flex-column align-items-center bg-login">
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
                                // onFinish={login}
                            >
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Input
                                        style={{ width: '100%' }}
                                        placeholder="Email"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <div style={{ width: '100%' }} className="mb-4">
                                    <Input.Password
                                        style={{ width: '100%' }}
                                        placeholder="input password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <Button
                                    className="mb-4"
                                    style={{ width: '100%', backgroundColor: 'black' }}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={() => handleLogin()}
                                >
                                    Login
                                </Button>
                                <div className="d-flex  ">
                                    <p className="cdk mb-0 me-3">Don't have an account? </p>
                                    <Link to="/register">
                                        <div style={{ textDecoration: 'none', color: 'black' }} className="fw-bolder">
                                            Create
                                        </div>
                                    </Link>
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
