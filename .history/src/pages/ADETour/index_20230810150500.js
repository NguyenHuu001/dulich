import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ADETour.scss';
import TextArea from 'antd/es/input/TextArea';
function ADETour() {
    const [title, setTitle] = useState('');
    const [city, setTitle] = useState('');
    const [title, setTitle] = useState('');
    const [title, setTitle] = useState('');
    const [title, setTitle] = useState('');
    const [title, setTitle] = useState('');
    const [title, setTitle] = useState('');
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form
                className="col-md-6"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Title">
                    <Input />
                </Form.Item>
                <Form.Item label="City">
                    <Select>
                        <Select.Option value="demo">Viet Nam</Select.Option>
                        <Select.Option value="demo">Bali</Select.Option>
                        <Select.Option value="demo">Tokyo</Select.Option>
                        <Select.Option value="demo">LonDon</Select.Option>
                        <Select.Option value="demo">Paris</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Address">
                    <Input />
                </Form.Item>
                <Form.Item label="Price">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Max Group Size">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Distance">
                    <InputNumber />
                </Form.Item>
                <TextArea rows={4} placeholder="Desc" maxLength={1000000} />
                <div className="mt-4">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Click to Upload Photo</Button>
                    </Upload>
                </div>
                <div className="mt-4">
                    <Form.Item>
                        <Button>Button</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export default ADETour;
