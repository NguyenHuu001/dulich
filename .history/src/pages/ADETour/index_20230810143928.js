import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import './ADETour.scss';
function ADETour() {
    return (
        <Form
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
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </Form>
    );
}

export default ADETour;
