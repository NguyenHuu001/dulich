import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ADETour.scss';
import TextArea from 'antd/es/input/TextArea';
function ADETour() {
    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [maxGroupSize, setMaxGroupSize] = useState('');
    const [distance, setDistance] = useState('');
    const [desc, setDesc] = useState('');
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Form
                className="col-md-6"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Title">
                    <Input onChange={(e) => setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item label="City">
                    <Select onChange={e => {
                        setCity(e.target.value)
                    }}>
                        <Select.Option value="demo">Viet Nam</Select.Option>
                        <Select.Option value="demo">Bali</Select.Option>
                        <Select.Option value="demo">Tokyo</Select.Option>
                        <Select.Option value="demo">LonDon</Select.Option>
                        <Select.Option value="demo">Paris</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Address">
                    <Input onChange={(e) => setAddress(e.target.value)} />
                </Form.Item>
                <Form.Item label="Price">
                    <InputNumber
                        onChange={(value) => {
                            setPrice(value);
                        }}
                    />
                </Form.Item>
                <Form.Item label="Max Group Size">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Distance">
                    <InputNumber
                        onChange={(value) => {
                            setDistance(value);
                        }}
                    />
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
