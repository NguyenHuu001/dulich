import baner from '../../assets/images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Carts.scss';
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function Cart() {
    const op = localStorage.getItem('Tour');
    const [tour, setTour] = useState(JSON.parse(op) || []);
    useEffect(() => {
        console.log(tour);
    }, []);
    return (
        <>
            <div className="container mt-5">
                {tour &&
                    tour.map((item) => {
                        return ()
                        ;
                    })}
            </div>
        </>
    );
}

export default Cart;
