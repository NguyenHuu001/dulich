import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
////img
import imgpass from '../../assets/images/img_pass.png';
import avatarLogin from '../../assets/images/avatar_login.png';
//axios
import axios from 'axios';
function Register() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
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
                            >
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Input style={{ width: '100%' }} placeholder="User Name" />
                                </div>
                                <div className="mb-4" style={{ width: '100%' }}>
                                    <Input style={{ width: '100%' }} placeholder="Email" />
                                </div>
                                <div style={{ width: '100%' }} className="mb-4">
                                    <Input.Password style={{ width: '100%' }} placeholder="input password" />
                                </div>
                                <Button
                                    className="mb-4"
                                    style={{ width: '100%', backgroundColor: 'black' }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Register
                                </Button>
                                <div className="d-flex  ">
                                    <p className="cdk mb-0 me-3">Don't have an account? </p>
                                    <Link to='/register'>
                                        <div style={{ color: 'black' }} className="fw-bolder">
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

export default Register;
