import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <img className="logo" src={logo} style={{ width: '40%' }} />
                </div>

                <ul className="d-flex mb-0" style={{ listStyle: 'none' }}>
                    <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                        <li>Home</li>
                    </a>
                    <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                        <li>About</li>
                    </a>
                    <a className="p-3 fs-4" href="#" style={{ textDecoration: 'none' }}>
                        <li>Tuors</li>
                    </a>
                </ul>
                <div>
                    <Button className='header_login fs-5' type="link" href="#" style={{ fontSize: '20px', color: 'black' }}>
                        Login
                    </Button>
                    <Button className='header_register fs-4 p-2' type="link" href="#" style={{ fontSize: '20px', color: 'black' }}>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
