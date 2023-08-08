import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import eventBus from '../EventsLayout';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    const handleShowSecondComponent = () => {
        eventBus.emit('showSecondComponent', true);
      };
    return (
        <div className="container-fluid p-0 header">
            <div className="container header_in">
                <div className="wrap_header d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-5">
                        <img className="logo" src={logo} />
                    </div>

                    <div className="col-md-5 item_none">
                        <ul className="d-flex justify-content-end mb-0 menu_none" style={{ listStyle: 'none' }}>
                            <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw" style={{ color: 'black' }}>
                                    Home
                                </li>
                            </a>
                            <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw" style={{ color: 'black' }}>
                                    About
                                </li>
                            </a>
                            <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw" style={{ color: 'black' }}>
                                    Tuors
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="register_login">
                        <button className="pe-3 ps-3 fw-bolder">Login</button>
                        <button className="pe-4 ps-4 btn_register">Register</button>
                    </div>

                    <div className='icon_menu' >
                        <MenuOutlined className="ps-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
