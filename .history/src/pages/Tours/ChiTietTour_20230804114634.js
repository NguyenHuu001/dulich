import baner from '../../assets/images/Gallery1.png';
//-------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLocationDot, faMagnifyingGlass, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
function ChiTietTour() {
    return (
        <div className="container">
            <div className="col-md-8 wrap_chitiettour">
                <img
                    src={baner}
                    alt="anh"
                    className="img-fluid mt-5"
                    style={{ maxHeight: '550px', width: '100%', objectFit: 'initial' }}
                />
                <div className="mt-3">
                    <div>
                        <div>
                            <h4>Holmen Lofoten, France</h4>
                        </div>
                        <div>
                            <FontAwesomeIcon className="icon_card" icon={faStar} size="sm" />
                            <span className="ms-1">5.0</span>
                            <span className="ms-1">(5)</span>
                            <FontAwesomeIcon className="icon_card ms-5" icon={faLocationDot} size="sm" />    
                            <span className="ms-1">Somewhere in France</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default ChiTietTour;
