import './AccountDetails.scss';
import { fetchAccountDetails, UpdateAccount } from '../../services/Tour_services';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, notification } from 'antd';

function AccountDetails() {
    const id = localStorage.getItem('userId');
    const [none, setNone] = useState(true);
    const [name, setName] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    useEffect(() => {
        getAccount();
    }, []);
    const getAccount = async () => {
        const config = {
            withCredentials: true,
        };
        try {
            const response = await fetchAccountDetails(id, config);
            setName(response.data.username);
            setEmail(response.data.email);
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Lấy thông tin không thành công',
                duration: 2,
            });
        }
    };
    const UpdateInformation = async () => {
        const config = {
            withCredentials: true,
        };
        const accountData = {
            username: name,
            email: email,
        };
        try {
            const response = await UpdateAccount(id, accountData, config);
            localStorage.setItem('UserName', response.data.username);
            notification.open({
                type: 'success',
                message: 'Thành công',
                description: 'Cập nhật thông tin thành công',
                duration: 2,
            });
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Cập nhật thông tin thất bại',
                duration: 2,
            });
        }
    };
    const UpdatePassWord = async () => {
        const config = {
            withCredentials: true,
        };
        const accountData = {
            password: password,
        };
        try {
            const response = await UpdateAccount(id, accountData, config);
            localStorage.setItem('UserName', response.data.username);
            notification.open({
                type: 'success',
                message: 'Thành công',
                description: 'Cập nhật thông tin thành công',
                duration: 2,
            });
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Cập nhật thông tin thất bại',
                duration: 2,
            });
        }
    };
    return (
        <div className="container d-flex mt-5 flex-wrap" style={{ height: '100vh' }}>
            <div className="col-md-6 col-12 d-flex justify-content-center">
                <Form
                    className="col-md-12 d-flex flex-column"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    style={{
                        maxWidth: 900,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Item>

                    <div className=" d-flex justify-content-center">
                        <Form.Item
                            className="me-4"
                            wrapperCol={{
                                offset: 10,
                                span: 20,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={UpdateInformation}>
                                Cập nhật thông tin
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
            <div className="col-md-6 ">
                <Form
                    className=""
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    style={{
                        maxWidth: 900,
                    }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={(e) => setPassWord(e.target.value)} />
                    </Form.Item>
                    <div className="d-flex justify-content-center">
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 20,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={Upda}>
                                Đổi mật khẩu
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default AccountDetails;
