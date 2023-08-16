import baner from '../../assets/images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Carts.scss';
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
function Cart() {
    const op = localStorage.getItem('Tour');
    const [tour, setTour] = useState(JSON.parse(op) || []);
    useEffect(() => {}, []);
    const DeleteTourCart = (index) => {
        
    };
    return (
        <>
            <div className="container mt-5">
                {tour.length > 0 ? (
                    tour.map((item, index) => (
                        <div className="d-flex align-items-center mb-5" key={`item._id` + index}>
                            <div className="col-md-2">
                                <img
                                    src={`https://doan-eta.vercel.app/${item.photo}`}
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    alt="."
                                />
                            </div>
                            <div className="ms-4 col-md-8">
                                <h3>{item.title}</h3>
                                <div className="mt-3">
                                    <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                                    <span className="ms-2">{item.city}</span>
                                </div>
                                <div className="mt-3">
                                    <FontAwesomeIcon className="icon_card" icon={faCircleDollarToSlot} />
                                    <span className="ms-2">{item.price}/ per person</span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn-delete" onClick={DeleteTourCart(index)}>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 style={{ textAlign: 'center', height: '40vh' }}>Không có sản phẩm</h1>
                )}
            </div>
        </>
    );
}

export default Cart;
