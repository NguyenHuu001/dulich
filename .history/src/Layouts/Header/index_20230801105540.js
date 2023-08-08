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

                <ul className="d-flex mb-0" style={{ listStyle: 'none'}}>
                    <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                        <li className='fw-normal' style={{color:'black'}}>Home</li>
                    </a>
                    <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                        <li className='fw-normal' style={{color:'black'}}>About</li>
                    </a>
                    <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                        <li className='fw-normal' style={{color:'black'}}>Tuors</li>
                    </a>
                </ul>
                <div>
                    <Button className='header_login fs-5 p-0 ps-3 pe-3' type="link" href="#" style={{color: 'black' }}>
                        Login
                    </Button>
                    <Button className='header_register fs-5 p-0 ps-3 pe-3' type="link" href="#" style={{ color: 'black' }}>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
