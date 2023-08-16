import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './ADETour.scss';
function ADETour() {
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
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Address">
                    <Input />
                </Form.Item>
                <Form.Item label="Distance">
                    <InputNumber />
                </Form.Item>
                <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <Form.Item>
                    <Button>Button</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ADETour;
