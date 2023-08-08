import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, message } from 'antd';
////img
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png';
//axios
import axios from 'axios';
import './Login.scss';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function Login() {
    const handleLogin = async (values) => {
        try {
            // Gửi yêu cầu đăng nhập tới server
            const response = await axios.post('/login', values);
            const { token, data, role } = response.data;

            // Lưu token vào localStorage hoặc cookie nếu cần thiết
            // localStorage.setItem('accessToken', token);

            // Hiển thị thông báo đăng nhập thành công
            message.success('Login successful!');

            // Tiến hành chuyển hướng người dùng tới trang sau khi đăng nhập thành công (nếu cần)
            // window.location.href = '/dashboard';

            // Hoặc sử dụng một phương thức chuyển hướng khác trong React Router
            // history.push('/dashboard');
        } catch (error) {
            // Xử lý lỗi đăng nhập (nếu có)
            if (error.response) {
                message.error(error.response.data.message);
            } else {
                message.error('Failed to login. Please try again.');
            }
        }
    };
    const [form] = Form.useForm();
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
                                form={form}
                                className="d-flex flex-column justify-content-center align-items-center form"
                                {...layout}
                                name="nest-messages"
                                onFinish={handleLogin}
                            >
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input style={{ width: '100%' }} placeholder="Email" />
                                    </Form.Item>
                                </div>
                                <div style={{ width: '100%' }} className="mb-4">
                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password style={{ width: '100%' }} placeholder="input password" />
                                    </Form.Item>
                                </div>
                                <Button
                                    className="mb-4"
                                    style={{ width: '100%', backgroundColor: 'black' }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Login
                                </Button>
                                <div className="d-flex">
                                    <p className="cdk mb-0 me-3">Don't have an account? </p>
                                    <a
                                        href="/register"
                                        style={{ textDecoration: 'none', color: 'black' }}
                                        className="fw-bolder"
                                    >
                                        Create
                                    </a>
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
