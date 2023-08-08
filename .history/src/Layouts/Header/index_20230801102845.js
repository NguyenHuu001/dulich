import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png'
function Header() {
    return (
    <div className='container'>
        <a href='#'><img className='logo' src={logo}/></a>
        <ul>
            <a href='#'><li>Home</li></a>
        </ul>
    </div>
    );
}

export default Header;
