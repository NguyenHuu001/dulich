import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <img className="logo" src={logo} style={{ width: '20%' }} />
                </div>

                <ul className="d-flex" style={{ listStyle: 'none' }}>
                    <a className="p-3" href="#" style={{ textDecoration: 'none' }}>
                        <li>Home</li>
                    </a>
                    <a className="p-3" href="#" style={{ textDecoration: 'none' }}>
                        <li>About</li>
                    </a>
                    <a className="p-3" href="#" style={{ textDecoration: 'none' }}>
                        <li>Tuors</li>
                    </a>
                </ul>
                <div>
                    <Button type="link" href="#" style={{ fontSize: '20px', color: 'black' }}>
                        Login
                    </Button>
                    <Button type="link" href="#" style={{ fontSize: '20px', color: 'black' }}>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
