import baner from '../../assets/images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Carts.scss';
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function Cart() {
    const op = localStorage.getItem('Tour');
    const [tour, setTour] = useState(JSON.parse(op) || []);
    useEffect(() => {

    }, [])
    return (
        {tour && }
        <div className="container mt-5">
            <div className="d-flex align-items-center">
                <div className="col-md-2">
                    <img src={baner} alt="img" style={{ width: '100%' }}></img>
                </div>
                <div className="ms-4 col-md-8">
                    <h3>Holmen Lofoten, France</h3>
                    <div className="mt-3">
                        <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                        <span className="ms-2">Paris</span>
                    </div>
                    <div className="mt-3">
                        <FontAwesomeIcon className="icon_card" icon={faCircleDollarToSlot} />
                        <span className="ms-2 ">19999/ per person</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn-delete">Xóa</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
