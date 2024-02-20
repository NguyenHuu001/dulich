import './AccountDetails.scss';
import { fetchAccountDetails, UpdateAccount } from '../../services/Tour_services';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, notification } from 'antd';

function AccountDetails() {
    const id = localStorage.getItem('userId');
    const [none, setNone] = useState(true);
    const [name, setName] = useState({});
    const [email, setEmail] = useState('');
    useEffect(() => {
        getAccount();
    }, []);
    const getAccount = async () => {
        const config = {
            withCredentials: true,
        };
        try {
            const response = await fetchAccountDetails(id, config);
            setName(response.data.username);
            setEmail(response.data.email);
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Lấy thông tin không thành công',
                duration: 2,
            });
        }
    };
    const Update = async () => {
        const config = {
            withCredentials: true,
        };
        const accountData = {
            username: name,
            email: email,
        };
        try {
            const response = await UpdateAccount(id, accountData, config);
            localStorage.setItem('UserName', response.data.username);
            notification.open({
                type: 'success',
                message: 'Thành công',
                description: 'Cập nhật thông tin thành công',
                duration: 2,
            });
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thất bại',
                description: 'Cập nhật thông tin thất bại',
                duration: 2,
            });
        }
    };
    return (
        {

        }
        
    );
}

export default AccountDetails;
