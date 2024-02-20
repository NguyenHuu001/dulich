import './AccountDetails.scss';
import { fetchAccountDetails } from '../../services/Tour_services';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
function AccountDetails() {
    const id = localStorage.getItem('userId');
    const [none, setNone] = useState(false);
    const [accountDet, setAccountDet] = useState({});
    useEffect(() => {
        getAccount();
    }, []);
    const getAccount = async () => {
        const config = {
            withCredentials: true,
        };
        try {
            const response = await fetchAccountDetails(id, config);
            setAccountDet(response.data);
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Lấy thông tin không thành công',
                duration: 2,
            });
        }
    };
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form
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
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    value={accountDet.username}
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {none && (
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
                        <Input.Password />
                    </Form.Item>
                )}

                <div className="col-md-6 d-flex">
                    <Form.Item
                        className="me-4"
                        wrapperCol={{
                            offset: 0,
                            span: 20,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Cập nhật thông tin
                        </Button>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 20,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Đổi mật khẩu
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export default AccountDetails;
