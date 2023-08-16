import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CreateItemTour } from '../../services/Tour_services';
import { animateScroll as Scroll } from 'react-scroll';
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
    useEffect(() => {
        Scroll.scrollToTop();
    }, []);
    useEffect(() => {}, [title]);
    const AddTour = async () => {
        console.log(title, city, address, distance, price, maxGroupSize, desc, photo);
        if (title && city && address && price && maxGroupSize && distance && desc && photo) {
            const tourData = {
                title: title,
                city: city,
                address: address,
                distance: 500,
                price: 999,
                maxGroupSize: 10,
                desc: desc,
                photo: '/tour-images/hagiang.jpg',
                featured: true,
            };
            try {
                const response = await CreateItemTour(JSON.stringify(tourData));
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
    return (
        <div className="wrap_addTour">
            <div className="container d-flex justify-content-center p">
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    className="col-md-6 bg-white form_add"
                    style={{
                        maxWidth: 700,
                    }}
                >
                    <Form.Item label="Title" >
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
        </div>
    );
}

export default ADETour;
