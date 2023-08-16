import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload, notification, Tabs } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CreateItemTour } from '../../services/Tour_services';
import './ADETour.scss';
import TextArea from 'antd/es/input/TextArea';

function ADETour() {
    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState();
    const [maxGroupSize, setMaxGroupSize] = useState();
    const [distance, setDistance] = useState();
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState('');
    useEffect(() => {}, [title]);
    const AddTour = async () => {
        // console.log(title, city, address, distance, price, maxGroupSize, desc, photo);
        if (title && city && address && price && maxGroupSize && distance && desc && photo) {
            const tourData = {
                title: title,
                city: city,
                address: address,
                distance: distance,
                photo: '/tour-images/hagiang.jpg',
                desc: desc,
                price: price,
                maxGroupSize: maxGroupSize,
                reviews: [],
                featured: true,
            };
            try {
                const featured = true;
                const response = await CreateItemTour(
                    title,
                    city,
                    address,
                    distance,
                    '/tour-images/hagiang.jpg',
                    desc,
                    price,
                    maxGroupSize,
                    featured,
                );
                console.log(response.data);
            } catch (err) {
                notification.open({
                    type: 'error',
                    message: 'Thông Báo Lỗi',
                    description: 'Không truyền được',
                    duration: 2,
                });
            }
        } else {
            notification.open({
                type: 'error',
                message: 'Thông Báo Lỗi',
                description: 'Vui lòng nhập đủ thông tin',
                duration: 2,
            });
        }
    };
    const items = [
        {
            key: '1',
            label: `Thêm Tour`,
            children: (
                <div className="container d-flex justify-content-center mt-3">
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
                            <Select
                                onChange={(e) => {
                                    setCity(e);
                                }}
                            >
                                <Select.Option value="Viet Nam">Viet Nam</Select.Option>
                                <Select.Option value="Bali">Bali</Select.Option>
                                <Select.Option value="Tokyo">Tokyo</Select.Option>
                                <Select.Option value="LonDon">LonDon</Select.Option>
                                <Select.Option value="Paris">Paris</Select.Option>
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
                            <InputNumber
                                onChange={(value) => {
                                    setMaxGroupSize(value);
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Distance">
                            <InputNumber
                                onChange={(value) => {
                                    setDistance(value);
                                }}
                            />
                        </Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Desc"
                            maxLength={1000000}
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                        />
                        <div className="mt-4">
                            <Upload
                                onChange={(e) => {
                                    setPhoto(e.file);
                                }}
                                multiple
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload Photo</Button>
                            </Upload>
                        </div>
                        <div className="mt-4">
                            <Form.Item>
                                <Button
                                    className="btn_them d-flex justify-content-center align-items-center"
                                    style={{ width: '100%' }}
                                    onClick={AddTour}
                                >
                                    Thêm
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            ),
        },
        {
            key: '2',
            label: `Xóa Tour`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Sửa Tour`,
            children: `Content of Tab Pane 3`,
        },
    ];
    return (
        <div className="container mt-5">
            <Tabs defaultActiveKey="1" items={items}></Tabs>
        </div>
    );
}

export default ADETour;
