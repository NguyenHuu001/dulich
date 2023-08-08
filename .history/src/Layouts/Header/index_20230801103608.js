import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container">
            <a href="#">
                <img className="logo" src={logo} style={{width:'50%'}} />
            </a>
            <ul>
                <a href="#">
                    <li>Home</li>
                </a>
                <a href="#">
                    <li>About</li>
                </a>
                <a href="#">
                    <li>Tuors</li>
                </a>
            </ul>
            <div>
                <Button type="link" href='#' style={{ fontSize: '20px', color: 'black' }}>
                    Login
                </Button>
                <Button type="link" href='#' style={{ fontSize: '20px', color: 'black' }}>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Header;
