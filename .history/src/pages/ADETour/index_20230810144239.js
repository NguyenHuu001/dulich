import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ADETour.scss';
function ADETour() {
    return (
        <Form className='col-md-6'
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item label="Title">
                <Input />
            </Form.Item>
            <Form.Item label="City">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Address">
                <Input />
            </Form.Item>
            <Form.Item label="Distance">
                <InputNumber />
            </Form.Item>
            <Form.Item>
                <Button>Button</Button>
            </Form.Item>
            <Upload>
                <Button icon={<UploadOutlined/>}>Click to Upload</Button>
            </Upload>
        </Form>
    );
}

export default ADETour;
