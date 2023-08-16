import baner from '../../assets/images/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import noIMG from '../../assets/images/NoIMG.png';
import './Carts.scss';
import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { fetchTourCart } from '../../services/Tour_services';
import { useEffect, useState } from 'react';
import { notification } from 'antd';
function Cart() {
    const id = localStorage.getItem('userId');
    localStorage.setItem('countCart', addCrat.length);
    const [tour, setTour] = useState([]);
    const [addCrat, setAddCart] = useState([]);
    useEffect(() => {
        getCart();
    }, []);
    // const op = localStorage.getItem('Tour');
    // const [tour, setTour] = useState(JSON.parse(op) || []);
    // useEffect(() => {}, []);
    // const DeleteTourCart = (index) => {
    //     const newTour = [...tour];
    //     newTour.splice(index, 1);
    //     localStorage.setItem('Tour', JSON.stringify(newTour));
    //     setTour(newTour);
    // };
    const DeleteTourCart = (index) => {};
    const getCart = async () => {
        const config = {
            withCredentials: true,
        };
        try {
            const response = await fetchTourCart(config);
            const newAddCart = [];
            response.data.map((item) => {
                if (item.userId === id) {
                    newAddCart.push(item);
                }
                setAddCart(newAddCart);
            });
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Thông báo',
                description: 'Gọi APi get Cart thất bại',
                duration: 2,
            });
        }
    };
    return (
        <>
            <div className="container mt-5">
                {addCrat.length > 0 ? (
                    addCrat.map((item, index) => (
                        <div className="d-flex align-items-center mb-5" key={`item._id` + index}>
                            <div className="col-md-2">
                                <img
                                    src={item.photo ? `https://doan-eta.vercel.app/${item.photo}` : noIMG}
                                    style={{ width: '100%', borderRadius: '10px' }}
                                    alt="."
                                />
                            </div>
                            <div className="ms-4 col-md-8">
                                <h3>{item.title}</h3>
                                <div className="mt-3">
                                    <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                                    <span className="ms-2">{item.tourName}</span>
                                </div>
                                <div className="mt-3">
                                    <FontAwesomeIcon className="icon_card" icon={faCircleDollarToSlot} />
                                    <span className="ms-2">{item.guestSize}</span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn-delete" onClick={() => DeleteTourCart(index)}>
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
