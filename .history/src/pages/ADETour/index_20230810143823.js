import React, { useState } from 'react';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, Upload } from 'antd';
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
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-circle"></Upload>
        </Form>
    );
}

export default ADETour;
