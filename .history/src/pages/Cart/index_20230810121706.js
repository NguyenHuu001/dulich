import baner from '../../assets/images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Carts.scss';
function Cart() {
    return (
        <div className="container mt-5">
            <div className="d-flex">
                <div className="col-md-2">
                    <img src={baner} alt="img" style={{ width: '100%', height: '50%' }}></img>
                </div>
                <div>
                    <h3>Holmen Lofoten, France</h3>
                    <div className="4 col-md-6 mt-3">
                        <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                        <span className="ms-2">{itemTour.address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
