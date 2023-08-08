import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import eventBus from '../EventsLayout';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    const location = useLocation();
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
                            <li className={`set_fw ${location.pathname === '/home' ? 'active_link' : ''}`}>
                                <Link to="/home" className="link_page">
                                    Home
                                </Link>
                            </li>
                            <li className={`set_fw ${location.pathname === '/about' ? 'active_link' : ''}`}>
                                <Link to="/about" className="link_page">
                                    About
                                </Link>
                            </li>
                            <li className={`set_fw ${location.pathname === '/tours' ? 'active_link' : ''}`}>
                                <Link to="/tours" className="link_page">
                                    Tours
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="register_login">
                        <button className="pe-3 ps-3 fw-bolder">Login</button>
                        <button className="pe-4 ps-4 btn_register">Register</button>
                    </div>

                    <div className="icon_menu">
                        <MenuOutlined className="ps-3" onClick={handleShowSecondComponent} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
