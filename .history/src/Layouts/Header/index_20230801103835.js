import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png';
function Header() {
    return (
        <div className="container">
            <div className='d-flex'>
                <a href="#">
                    <img className="logo" src={logo} style={{width:'20%'}} />
                </a>
                <ul className='d-flex' style={{listStyle:'none'}}>
                    <a href="#" style={{te}}>
                        <li>Home</li>
                    </a>
                    <a href="#" style={{te}}>
                        <li>About</li>
                    </a>
                    <a href="#" style={{te}}>
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
        </div>
    );
}

export default Header;
