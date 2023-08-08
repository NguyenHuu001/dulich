import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import eventBus from '../EventsLayout';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    const [none, setNone] = useState(false);
    const token = localStorage.getItem('token');
    useEffect(())
    console.log(token);
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
                                    <Link to="/home" className="link_page">
                                        {' '}
                                        Home
                                    </Link>
                                </li>
                            </a>
                            <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw" style={{ color: 'black' }}>
                                    <Link to="/about" className="link_page">
                                        About
                                    </Link>
                                </li>
                            </a>
                            <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw" style={{ color: 'black' }}>
                                    <Link to="/tours" className="link_page">
                                        Tuors
                                    </Link>
                                </li>
                            </a>
                        </ul>
                    </div>
                    {none && <div className="register_login">
                        <Link to="/login">
                            <button className="pe-3 ps-3 fw-bolder">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="pe-4 ps-4 btn_register">Register</button>
                        </Link>
                    </div>}
                    

                    <div className="icon_menu">
                        <MenuOutlined className="ps-3" onClick={handleShowSecondComponent} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
