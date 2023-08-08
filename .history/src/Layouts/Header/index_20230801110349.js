import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <img className="logo" src={logo} style={{ width: '40%' }} />
                </div>

                <ul className="d-flex mb-0" style={{ listStyle: 'none' }}>
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
                <div className='d-flex'>
                    <div>
                        <button className=''>Login</button>
                    </div>
                    <div>
                        <button className=''>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
