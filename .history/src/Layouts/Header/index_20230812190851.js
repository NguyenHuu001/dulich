import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import eventBus from '../EventsLayout';
import logo from '../../assets/images/logo.png';
import { notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const role = localStorage.getItem('role');
    const lo = JSON.parse(localStorage.getItem('Tour'));
    const navigate = useNavigate();
    const [none, setNone] = useState(true);
    const token = localStorage.getItem('token');
    const UserName = localStorage.getItem('UserName');
    useEffect(() => {
        if (token) {
            setNone(false);
        } else {
            setNone(true);
        }
    }, [token, UserName]);
    const handleShowSecondComponent = () => {
        eventBus.emit('showSecondComponent', true);
    };
    const handleLogOut = () => {
        localStorage.clear();
        notification.open({
            type: 'success',
            message: 'Thông Báo',
            description: 'Log Out Thành Công, Cung Hỉ Cung Hỉ',
            duration: 2,
        });
    };
    return (
        <div className="container-fluid p-0 header">
            <div className="container header_in">
                <div className="wrap_header d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-5">
                        <img className="logo" src={logo} />
                    </div>

                    <div className="col-md-4 item_none">
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
                    {none && (
                        <div className="register_login">
                            <Link to="/login">
                                <button className="pe-3 ps-3 fw-bolder">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="pe-4 ps-4 btn_register">Register</button>
                            </Link>
                        </div>
                    )}
                    {!none && (
                        <div className="register_login d-flex align-items-center justify-content-end flex-wrap col-md-4 col-5">
                            {role === 'admin' ? (
                                <div className="col-md-5 username me-3 d-flex align-items-center" style={{height: '30px'}}>
                                    <Link to="/adeTour">
                                        <button className=" fw-bolder ">{UserName}</button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="col-md-5 username me-3 d-flex align-items-center" style={{height: '30px'}}>
                                    <Link to="/home">
                                        <button className="pe-3 ps-3 fw-bolder username">{UserName}</button>
                                    </Link>
                                </div>
                            )}

                           <div>
                                <Link to="/cart">
                                    <div className="me-4 cart_tour wrap_cart">
                                        <FontAwesomeIcon className="" icon={faCartShopping} size="xl" />
                                        <span className="total_tour" style={{ color: 'black' }}>
                                            {lo ? lo.length : 0}
                                        </span>
                                    </div>
                                </Link>
                           </div>
                            <div className='d-flex '>
                                <Link to="/login">
                                    <button
                                        className="pe-4 ps-4 btn_register btn btn-dark"
                                        onClick={() => {
                                            handleLogOut();
                                        }}
                                    >
                                        LogOut
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="icon_menu">
                        <MenuOutlined className="ps-3" onClick={handleShowSecondComponent} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
