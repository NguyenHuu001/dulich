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
        // console.log(title, city, address, price, maxGroupSize, distance, desc, photo);
        if (title && city && address && price && maxGroupSize && distance && desc && photo) {
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
            try {
                const response = await CreateItemTour(tourData);
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
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} > </Tabs>
        
    );
}

export default ADETour;
