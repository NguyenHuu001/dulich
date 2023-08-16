import React, { useState } from 'react';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect } from 'antd';
import './ADETour.scss';
function ADETour() {
    return (
        <Form
            labelCol={{
                span: 8,
            }}
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
            
            
            <Form.Item label="DatePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
                <InputNumber />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
                <Switch />
            </Form.Item>
            <Form.Item label="Button">
                <Button>Button</Button>
            </Form.Item>
        </Form>
    );
}

export default ADETour;
