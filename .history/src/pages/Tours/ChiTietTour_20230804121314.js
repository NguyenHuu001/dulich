import baner from '../../assets/images/Gallery1.png';
//-------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleDollarToSlot,
    faDollarSign,
    faLocationDot,
    faMagnifyingGlass,
    faStar,
    faUserGroup,
    faUserTie,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
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
                <div className="mt-3 wrap_info">
                    <div className="m-4">
                        <div>
                            <h4>Holmen Lofoten, France</h4>
                        </div>
                        <div className="mt-3">
                            <FontAwesomeIcon className="icon_card" icon={faStar} size="sm" />
                            <span className="ms-2">5.0</span>
                            <span className="ms-2">(5)</span>
                            <FontAwesomeIcon className="icon_card ms-5" icon={faLocationDot} size="sm" />
                            <span className="ms-2">Somewhere in France</span>
                        </div>
                        <div className="mt-4">
                            <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                            <span className="ms-2">Paris</span>
                            <FontAwesomeIcon className="icon_card ms-5" icon={faCircleDollarToSlot} />
                            <span className="ms-2">199/ per person</span>
                            <FontAwesomeIcon className="icon_card ms-5" icon={faLocationDot} size="sm" />
                            <span className="ms-2">500 k/m</span>
                            <FontAwesomeIcon className="icon_card ms-5" icon={faUserGroup} />
                            <span className="ms-2">8 people</span>
                        </div>
                        <h5 className="mt-5">Description</h5>
                        <span className="mt-3">this is the description</span>
                    </div>
                </div>
                <div className="mt-3 wrap_info">
                    <div className="m-4">
                        <div>
                            <h4>Reviews (15 reviews)</h4>
                        </div>
                        <div>
                            <span className="icon_card icon_rating_hv">
                                {' '}
                                1 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv ms-2">
                                {' '}
                                2 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv ms-2">
                                {' '}
                                3 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv ms-2">
                                {' '}
                                4 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv ms-2">
                                {' '}
                                5 <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="wrap_input_review d-flex align-items-center mt-3">
                            <input className=" p-3 input_review" placeholder='Chia sẻ ý kiến của bạn' type="text" style={{ width: '100%' }} />
                            <button className='btn btn_submit'>Submit</button>
                        </div>
                        <div className='mt-4'>
                            <div>
                            <FontAwesomeIcon className="icon_card" icon={faUserTie} size='2xl'/>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default ChiTietTour;
