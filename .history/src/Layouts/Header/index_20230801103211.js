import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png'
function Header() {
    return (
    <div className='container'>
        <a href='#'><img className='logo' src={logo}/></a>
        <ul>
            <a href='#'><li>Home</li></a>
            <a href='#'><li>About</li></a>
            <a href='#'><li>Tuors</li></a>
        </ul>
        <ul>
        <Button type="link" style={{font: '20px'}} >
            Login
          </Button>
        </ul>
    </div>
    );
}

export default Header;
