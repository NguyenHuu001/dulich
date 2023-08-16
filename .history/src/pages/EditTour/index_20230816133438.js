import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CreateItemTour } from '../../services/Tour_services';
import { animateScroll as Scroll } from 'react-scroll';
import { EditItemTour } from '../../services/Tour_services';
import './EditTour.scss';
import TextArea from 'antd/es/input/TextArea';

function EditTour() {
    const we = JSON.parse(localStorage.getItem('tourEdit'));
    const [title, setTitle] = useState(we.title);
    const [city, setCity] = useState(we.city);
    const [address, setAddress] = useState(we.address);
    const [price, setPrice] = useState(we.price);
    const [maxGroupSize, setMaxGroupSize] = useState(we.maxGroupSize);
    const [distance, setDistance] = useState(we.distance);
    const [desc, setDesc] = useState(we.desc);
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        // console.log(token);
        Scroll.scrollToTop();
    }, []);
    useEffect(() => {}, [title]);
    const EditTour = async () => {
        if (title && city && address && price && maxGroupSize && distance && desc) {
            const tourData = {
                title: title,
                city: city,
                address: address,
                distance: distance,
                price: price,
                maxGroupSize: maxGroupSize,
                desc: desc,
                photo: '/tour-images/hagiang.jpg',
                featured: true,
            };
            console.log(tourData);
            const config = {
                withCredentials: true,
            };
            try {
                //    const response = await EditItemTour()
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
        <div className="container d-flex justify-content-center mt-5">
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 20,
                }}
                className="col-md-6"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Title">
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item label="City">
                    <Input
                        onChange={(e) => {
                            setCity(e);
                        }}
                        value={city}
                    ></Input>
                </Form.Item>
                <Form.Item label="Address">
                    <Input value={we.address} onChange={(e) => setAddress(e.target.value)} />
                </Form.Item>
                <Form.Item label="Price">
                    <InputNumber
                        value={price}
                        onChange={(value) => {
                            setPrice(value);
                        }}
                    />
                </Form.Item>
                <Form.Item label="Max Group Size">
                    <InputNumber
                        value={maxGroupSize}
                        onChange={(value) => {
                            setMaxGroupSize(value);
                        }}
                    />
                </Form.Item>
                <Form.Item label="Distance">
                    <InputNumber
                        value={distance}
                        onChange={(value) => {
                            setDistance(value);
                        }}
                    />
                </Form.Item>
                <TextArea
                    rows={4}
                    placeholder="Desc"
                    maxLength={1000000}
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
                <div className="mt-4">
                    <Upload
                        defaultFileList={[
                            {
                                uid: we._id,
                                name: `${we.city}.png`,
                                status: 'done',
                                url: `https://doan-eta.vercel.app/${we.photo}`,
                            },
                        ]}
                        onChange={(e) => {
                            setPhoto(e.file);
                        }}
                        // multiple
                    >
                        <Button icon={<UploadOutlined />}>Click to Upload Photo</Button>
                    </Upload>
                </div>
                <div className="mt-4">
                    <Form.Item>
                        <Button
                            className="btn_them d-flex justify-content-center align-items-center"
                            style={{ width: '100%' }}
                            onClick={EditTour}
                        >
                            Edit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
}

export default EditTour;
