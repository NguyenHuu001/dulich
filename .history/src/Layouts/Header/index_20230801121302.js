import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container-fluid p-0 header">
            <div className="container pt-2 pb-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-md-5 col-sm-3">
                        <img className="logo col-md-5 " src={logo} />
                    </div>

                    <ul className="d-flex mb-0 menu_none" style={{ listStyle: 'none' }}>
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
                    <ul className="d-flex mb-0 menu_none" style={{ listStyle: 'none' }}>
                        <a className="p-3 fs-5 item_none" href="#" style={{ textDecoration: 'none' }}>
                            <li className="set_fw" style={{ color: 'black' }}>
                                Login
                            </li>
                        </a>
                        <a className="header_register p-3 fs-5 item_none" href="#" style={{ textDecoration: 'none' }}>
                            <li className="set_fw register_li" style={{ color: 'black' }}>
                                Register
                            </li>
                        </a>
                    </ul>
                    <MenuOutlined className="icon_menu ps-3" />
                </div>
            </div>
        </div>
    );
}

export default Header;
