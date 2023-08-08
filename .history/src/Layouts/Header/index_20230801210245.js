import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container-fluid p-0 header">
            <div className="container header_in">
                <div className="wrap_header d-flex justify-content-between align-items-center">
                    <div className="col-md-5 col-sm-3 col-4">
                        <img className="logo col-md-7 col-8" src={logo} />
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
                        <div>
                            <div className='p-3 '>Login</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='p-3 register_li'>Register</div>
                        </div>
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
