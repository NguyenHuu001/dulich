import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss'
function Footer() {
    return ( 
    <div className='container-fluid p-0'>
        <div className='container'>
            <div className='col-md-3'>
                <div className='col-md-8'><img src={logo} alt='logo'/></div>
                <p className='lh-base'>Hello, Ko-Ni-Chi-Qua, Kam-Xa-Mi-Tê, À Lôi, Cưng vô lây..</p>
                <div>
                <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
            
        </div>
    </div> 
    );
}

export default Footer;