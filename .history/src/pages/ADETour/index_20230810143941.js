import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
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
            <Upload >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Up>
        </Form>
    );
}

export default ADETour;
