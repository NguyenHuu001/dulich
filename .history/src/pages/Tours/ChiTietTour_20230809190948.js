import { useEffect, useState } from 'react';
import { fetchItemTour } from '../../services/Tour_services';
//-------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleDollarToSlot,
    faDollarSign,
    faLocationDot,
    faStar,
    faUserGroup,
    faUserTie,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Form, Input, InputNumber } from 'antd';

moment().format('MM/DD/YYYY');
function ChiTietTour(ID) {
    const token1 = localStorage.getItem('token');
    const [tourStrorage, setTourStrorage] = useState([])
    const [itemTour, setItemTour] = useState({});
    const [itemsReviews, setItemReviews] = useState([]);
    const [countReview, setCountReview] = useState();
    const [ratingTB, setRatingTB] = useState(0);
    useEffect(() => {
        getItemTour();
        averageRating() && setRatingTB(averageRating());
    }, [countReview]);
    const averageRating = () => {
        let rating_review = itemTour.reviews;
        if (rating_review) {
            const totalRating = rating_review.reduce((s, item) => s + item.rating, 0);
            const average = totalRating / rating_review.length;
            return average;
        }
        return 0;
    };
    const BookTour = (itemTour) => {
        if (token1) {
            setTourStrorage([...to])
            alert('Book Tour Thanh Cong');
        } else {
            alert('Vui long Dang nhap');
        }
    };
    const getItemTour = async () => {
        let res = await fetchItemTour(ID.ID);
        let ress = await res?.data?.reviews;
        if (res && res.data) {
            setItemTour(res.data);
        }
        if (ress) {
            setItemReviews(ress);
            setCountReview(itemTour?.reviews?.length || 0);
        }
    };
    return (
        <div className="container d-flex flex-wrap">
            <div className="col-md-8 col-12 wrap_chitiettour ps-2">
                <img
                    src={`https://doan-eta.vercel.app/${itemTour.photo}`}
                    alt="anh"
                    className="img-fluid mt-5"
                    style={{ maxHeight: '550px', width: '100%', objectFit: 'initial' }}
                />
                <div className="mt-3 wrap_info">
                    <div className="m-4">
                        <div>
                            <h4>{itemTour.title}</h4>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="col-12 col-md-6 mt-3">
                                <FontAwesomeIcon className="icon_card" icon={faStar} size="sm" />
                                <span className="ms-2">{ratingTB.toFixed(1)}</span>
                                <span className="ms-2">({countReview})</span>
                            </div>
                            <div className="4 col-md-6 mt-3">
                                <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                                <span className="ms-2">{itemTour.address}</span>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="col-6 mt-4">
                                <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                                <span className="ms-2 ">{itemTour.city}</span>
                            </div>
                            <div className="col-6 mt-4">
                                <FontAwesomeIcon className="icon_card" icon={faCircleDollarToSlot} />
                                <span className="ms-2 ">{itemTour.price}/ per person</span>
                            </div>
                            <div className="col-6 mt-4">
                                <FontAwesomeIcon className="icon_card" icon={faLocationDot} size="sm" />
                                <span className="ms-2 ">{itemTour.distance} k/m</span>
                            </div>
                            <div className="col-6 mt-4">
                                <FontAwesomeIcon className="icon_card" icon={faUserGroup} />
                                <span className="ms-2 ">{itemTour.maxGroupSize} people</span>
                            </div>
                        </div>
                        <h5 className="mt-5">Description</h5>
                        <span className="mt-3">{itemTour.desc}</span>
                    </div>
                </div>
                <div className="mt-3 wrap_info">
                    <div className="m-4">
                        <div>
                            <h4>Reviews ({countReview} reviews)</h4>
                        </div>
                        <div className="d-flex flex-wrap">
                            <span className="icon_card icon_rating_hv me-2">
                                1 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv me-2">
                                2 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv me-2">
                                3 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv me-2">
                                4 <FontAwesomeIcon icon={faStar} />
                            </span>
                            <span className="icon_card icon_rating_hv me-2">
                                5 <FontAwesomeIcon icon={faStar} />
                            </span>
                        </div>
                        <div className="wrap_input_review d-flex align-items-center mt-3">
                            <input
                                className=" p-3 input_review"
                                placeholder="Chia sẻ ý kiến của bạn"
                                type="text"
                                style={{ width: '100%' }}
                            />
                            <button className="btn btn_submit">Submit</button>
                        </div>
                        {itemsReviews &&
                            itemsReviews.map((item, index) => {
                                return (
                                    <div className="mt-5 d-flex" key={item._id}>
                                        <div>
                                            <FontAwesomeIcon className="icon_card" icon={faUserTie} size="2xl" />
                                        </div>
                                        <div className="d-flex ms-4 align-items-center justify-content-between wrap_rating_content">
                                            <div className="d-flex flex-column col-md-10 col-10">
                                                <h6 className="mt-1">{item.username}</h6>
                                                <span className="mt-1">
                                                    {moment(item.createdAt).format('MMMM D, YYYY')}
                                                </span>
                                                <span className="mt-1">{item.reviewText}</span>
                                            </div>
                                            <div>
                                                <span className="icon_card icon_rating_hv ms-2">
                                                    {item.rating} <FontAwesomeIcon icon={faStar} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
            <div className="col-md-4 ps-2">
                <div className="mt-5 wrap_info book_fixed">
                    <div className="container ps-4 pe-4">
                        <div className="mb-3 mt-4 d-flex align-items-center">
                            <FontAwesomeIcon className="icon_card" icon={faDollarSign} size="lg" />
                            <span className="icon_card fs-4 fw-bolder">{itemTour.price}</span>
                            <span className="fw-bolder" style={{ color: 'gray' }}>
                                /per person
                            </span>
                        </div>
                        <hr />
                        <h5>Information</h5>
                        <div className="wrap_Information">
                            <Form.Item>
                                <Input placeholder="Full name" required />
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder="Phone" required />
                            </Form.Item>
                            <div className="d-flex justify-content-between ">
                                <input className="col-md-5" type="date" style={{ border: 'none' }}   />
                                <div className="col-md-6 ">
                                    <InputNumber style={{ width: '100%' }} min={1} max={1000} placeholder="Guest" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faDollarSign} size="sm" />
                                    <span className="">{itemTour.price} </span>
                                    <FontAwesomeIcon className="me-2 ms-2 mt-1" icon={faXmark} size="xs" />
                                    <span>person</span>
                                </div>
                                <div className="d-fle align-items-center">
                                    <FontAwesomeIcon icon={faDollarSign} size="sm" />
                                    <span className="">{itemTour.price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span>Service charge</span>
                                </div>
                                <div className="d-fle align-items-center">
                                    <FontAwesomeIcon icon={faDollarSign} size="sm" />
                                    <span className="">10</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-bolder">Total</span>
                                </div>
                                <div className="d-fle align-items-center">
                                    <FontAwesomeIcon icon={faDollarSign} size="sm" />
                                    <span className="fw-bolder">{+itemTour.price + 10}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 mb-5">
                            <button
                                className="ntn_bookNow"
                                style={{ textAlign: 'center', width: '100%' }}
                                onClick={() => {
                                    BookTour(itemTour);
                                }}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChiTietTour;
