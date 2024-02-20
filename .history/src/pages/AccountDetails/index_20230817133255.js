import './AccountDetails.scss';
import { fetchAccountDetails } from '../../services/Tour_services';
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
function AccountDetails() {
    return ( <div className='container'></div> );
}

export default AccountDetails;