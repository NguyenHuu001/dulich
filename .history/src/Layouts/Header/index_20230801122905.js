import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container-fluid p-0 header">
            <div className="container pt-3 pb-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="col-md-5 col-sm-3">
                        <img className="logo col-md-5 " src={logo} />
                    </div>

                    <div>
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
                    </div>
                    <div>
                        <ul className="d-flex mb-0" style={{ listStyle: 'none' }}>
                            <a className="p-3 fs-5" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw" style={{ color: 'black' }}>
                                    Login
                                </li>
                            </a>
                            <a className="fs-5 mt-2" href="#" style={{ textDecoration: 'none' }}>
                                <li className="set_fw register_li">Register</li>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <MenuOutlined className="icon_menu ps-3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
