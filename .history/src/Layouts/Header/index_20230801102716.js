import { Button } from 'antd';
import './Header.scss';

import logo from '../../assets/images/logo.png'
function Header() {
    return (
    <div className='container'>
        <img className='lo' src={logo}/>
    </div>
    );
}

export default Header;
