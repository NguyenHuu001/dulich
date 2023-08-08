import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../services/Tour_services';
import axios from 'axios';
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png';

function Register() {
    const navigation = useNavigate();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
      console.log(e)
        // const lk = await fetchRegister(username, email, password).then((res) => {
        //     console.log(res);
        // });
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
                            alt="anh"
                        />
                        <h3 className="title_login">Register</h3>
                        <div className="col-md-10">
                            <Form
                                className="d-flex flex-column justify-content-center align-items-center form"
                                {...layout}
                                name="nest-messages"
                            >
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Input
                                        style={{ width: '100%' }}
                                        placeholder="User Name"
                                        value={username}
                                        required
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Input
                                        style={{ width: '100%' }}
                                        placeholder="Email"
                                        value={email}
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div style={{ width: '100%' }} className="mb-4">
                                    <Input.Password
                                        style={{ width: '100%' }}
                                        placeholder="input password"
                                        value={password}
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Button
                                    className="mb-4"
                                    style={{ width: '100%', backgroundColor: 'black' }}
                                    type="primary"
                                    htmlType="submit"
                                    onClick={() => {
                                        handleRegister();
                                    }}
                                >
                                    Register
                                </Button>
                                <div className="d-flex  ">
                                    <p className="cdk mb-0 me-3">Already have an account?</p>
                                    <Link to="/login">
                                        <div style={{ color: 'black' }} className="fw-bolder">
                                            Login
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

export default Register;
