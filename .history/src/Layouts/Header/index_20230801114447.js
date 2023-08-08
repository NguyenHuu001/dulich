import { Button } from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container-fluid p-0 header">
            <div className="container pt-2 pb-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className='col-md-4 col-xs-12'>
                        <img className="logo col-md- col-xs-5" src={logo} />
                    </div>

                    <ul className="d-flex mb-0 col-md-4" style={{ listStyle: 'none' }}>
                        <a className="p-3 fs-4 item_none" href="#" style={{ textDecoration: 'none' }}>
                            <li className="set_fw" style={{ color: 'black' }}>
                                Home
                            </li>
                        </a>
                        <a className="p-3 fs-4 item_none" href="#" style={{ textDecoration: 'none' }}>
                            <li className="set_fw" style={{ color: 'black' }}>
                                About
                            </li>
                        </a>
                        <a className="p-3 fs-4 item_none" href="#" style={{ textDecoration: 'none' }}>
                            <li className="set_fw" style={{ color: 'black' }}>
                                Tuors
                            </li>
                        </a>
                    </ul>
                    <div className="d-flex">
                        <div className='fs-5 col-xs-2'>
                            <button className="header_login">Login</button>
                        </div>
                        <div className='fs-5 col-xs-2'>
                            <button className="header_register">Register</button>
                        </div>
                    </div>
                    <MenuOutlined className='icon_menu ps-3 col-md-2'/>
                </div>
            </div>
        </div>
    );
}

export default Header;
