import logo from '../../'
import './Footer.scss'
function Footer() {
    return ( 
    <div className='container-fluid p-0'>
        <div className='container'>
            <div className='col-md-3'>
                <img src={logo}/>
            </div>
        </div>
    </div> 
    );
}

export default Footer;