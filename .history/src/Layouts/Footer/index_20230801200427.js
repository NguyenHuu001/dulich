import logo from '../../assets/images/logo.png'
import './Footer.scss'
function Footer() {
    return ( 
    <div className='container-fluid p-0'>
        <div className='container'>
            <div className='col-md-3'>
                <div className='col-md-8'><img src={logo} alt='logo'/></div>
            </div>
            <p>Hello, Ko-Ni-Chi-Qua, </p>
        </div>
    </div> 
    );
}

export default Footer;