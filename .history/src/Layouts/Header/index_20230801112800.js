import { Button } from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container-fluid p-0 header">
            <div className="container pt-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img className="logo col-md-6 col-xs-6" src={logo}  />
                    </div>

                    <ul className="d-flex mb-0" style={{ listStyle: 'none' }}>
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
                        <div>
                            <button className="header_login">Login</button>
                        </div>
                        <div>
                            <button className="header_register">Register</button>
                        </div>
                    </div>
                    <MenuOutlined className='icon_menu ps-3' style={{fontSize:'70px'}}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
