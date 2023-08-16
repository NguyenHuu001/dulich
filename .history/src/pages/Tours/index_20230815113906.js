import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDollarSign,
    faLocationDot,
    faMagnifyingGlass,
    faPenToSquare,
    faSquarePlus,
    faStar,
    faTrash,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import AddTour from '../AddTour';
//--------------//
import banner2 from '../../assets/images/banner2.png';
//--------------//
import { Link } from 'react-router-dom';
import { InputNumber, notification } from 'antd';
import Search from 'antd/es/input/Search';
import { Pagination } from 'antd';
//--------------//
import { fetchTours } from '../../services/Tour_services';
import { fetchSearchTour, DeleteItemTour } from '../../services/Tour_services';
import './Tours.scss';
//-------------//
import ChiTietTour from './ChiTietTour';
import { animateScroll as scroll } from 'react-scroll';
function Tours() {
    const role = localStorage.getItem('role');
    const [currentPage, setCurrentPage] = useState(0);
    const [listTour, setListTour] = useState([]);
    const [none, setNone] = useState(true);
    const [ID, setID] = useState();

    const [Location, setLocation] = useState();
    const [Distance, setDistance] = useState();
    const [MaxPeople, setMaxPeople] = useState();
    useEffect(() => {
        scroll.scrollToTop();
    }, []);
    useEffect(() => {
        getAllTour(currentPage);
    }, [ID]);

    const SearchTour = async () => {
        if (Location || Distance || MaxPeople) {
            let itemTour = fetchSearchTour(Location, Distance, MaxPeople);
            itemTour.then((item) => {
                let datatour = item.data;
                setListTour(datatour);
                if (datatour.length === 0) {
                    notification.open({
                        type: 'error',
                        message: 'Thông Báo Lỗi',
                        description: 'Không tìm thấy Tour',
                        duration: 2,
                    });
                }
            });
        }
    };

    const getAllTour = async (page) => {
        let res = await fetchTours(page);
        if (res && res.data) {
            setListTour(res.data);
        }
    };
    // Hàm xử lý sự kiện khi người dùng chuyển trang
    const handlePageChange = (page) => {
        getAllTour(page - 1);
        scroll.scrollToTop();
    };
    const handleClick = async (id) => {
        setNone(!none);
        if (id) {
            setID(id);
        }
        scroll.scrollToTop();
    };

    const DeleteTour = async (_id) => {
        const del = await DeleteItemTour(_id)
    };
    return (
        <>
            {none && (
                <div className="None_Item">
                    <div className="container-fluid wrap_background col-md-12 p-0">
                        <div className="background d-flex justify-content-center align-items-center">
                            <h3 className="content_background">All Tour</h3>
                        </div>
                    </div>
                    <div className="container Search_where mb-5">
                        <div className="col-md-12 mt-3">
                            <div className="d-flex flex-wrap">
                                <div className="col-12 col-md-3 d-flex align-items-center ms-3 mt-3 chieudai">
                                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                    <div className="ps-3 border_right">
                                        <h6>Location</h6>
                                        <input
                                            className="input_where"
                                            placeholder="Where are you going?"
                                            onChange={(e) => {
                                                setLocation(e.target.value);
                                            }}
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center ms-3 mt-3 chieudai">
                                    <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                    <div className="ps-3 pe-3 border_right">
                                        <h6>Distance</h6>
                                        <InputNumber
                                            style={{ width: '100%' }}
                                            min={1}
                                            max={1000}
                                            placeholder="Distance k/m"
                                            onChange={(value) => {
                                                setDistance(value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center ms-3 mt-3 chieudai">
                                    <FontAwesomeIcon className="icon" icon={faUsers} />
                                    <div className="ps-3 pe-3 border_right">
                                        <h6>Max People</h6>
                                        <InputNumber
                                            style={{ width: '100%' }}
                                            min={1}
                                            max={200}
                                            defaultValue={0}
                                            onChange={(value) => {
                                                setMaxPeople(value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 d-flex align-items-center ms-3 mt-3">
                                    <FontAwesomeIcon
                                        className="icon_search p-2"
                                        icon={faMagnifyingGlass}
                                        onClick={() => {
                                            SearchTour();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container d-flex flex-wrap justify-content-center">
                        <div className="row col-md-12">
                            {listTour &&
                                listTour.length > 0 &&
                                listTour.map((item, index) => {
                                    return (
                                        <div className="p-2 col-md-3" key={item._id}>
                                            <div className="card ">
                                                <div className="wrap_img">
                                                    <img
                                                        className="card-img-top"
                                                        src={`https://doan-eta.vercel.app/${item.photo}`}
                                                        alt="Cardimage"
                                                        style={{ width: '100%' }}
                                                    />

                                                    <span className="featured">{item.featured && 'Featured'}</span>
                                                </div>
                                                <div className="card-body">
                                                    <div className="d-flex flex-wrap align-items-center p-1">
                                                        <div className="d-flex align-items-center col-sm-12 col-6 col-lg-9 ">
                                                            <FontAwesomeIcon
                                                                className="icon_card"
                                                                icon={faLocationDot}
                                                                size="sm"
                                                            />
                                                            <h6 className="card-title mt-2 ms-2">{item.city}</h6>
                                                        </div>
                                                        <div className=" d-flex justify-content-start col-sm-12 col-6 col-lg-3">
                                                            <FontAwesomeIcon
                                                                className="icon_card"
                                                                icon={faStar}
                                                                size="sm"
                                                            />
                                                            <span className="ms-1">
                                                                {(
                                                                    item.reviews.length &&
                                                                    item.reviews.reduce(
                                                                        (totalRating, it) => totalRating + it.rating,
                                                                        0,
                                                                    ) / item.reviews.length
                                                                ).toFixed(1)}
                                                            </span>
                                                            <span className="ms-1">({item.reviews.length})</span>
                                                        </div>
                                                    </div>
                                                    <h6 className="olwe">{item.title}</h6>
                                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                        <div className="mb-3 mt-4">
                                                            <FontAwesomeIcon
                                                                className="icon_card"
                                                                icon={faDollarSign}
                                                                size="sm"
                                                            />
                                                            <span className="icon_card fw-bolder">{item.price}</span>
                                                            <span className="fw-bolder" style={{ color: 'gray' }}>
                                                                /per person
                                                            </span>
                                                        </div>
                                                        <div>
                                                            {role === 'admin' ? (
                                                                <>
                                                                    <Link to="/addTour">
                                                                        <FontAwesomeIcon
                                                                            className="me-3 add_tour"
                                                                            icon={faSquarePlus}
                                                                            size="2xl"
                                                                        />
                                                                    </Link>
                                                                    <Link to="/editTour">
                                                                        <FontAwesomeIcon
                                                                            className="me-3 Edit_tour"
                                                                            icon={faPenToSquare}
                                                                            size="2xl"
                                                                        />
                                                                    </Link>
                                                                    <FontAwesomeIcon
                                                                        className=" delete_tour"
                                                                        icon={faTrash}
                                                                        size="2xl"
                                                                        onClick={() => DeleteTour(item._id)}
                                                                    />
                                                                </>
                                                            ) : (
                                                                <Link
                                                                    to="/"
                                                                    onClick={() => handleClick(item._id)}
                                                                    className="btn btn-primary btn_book"
                                                                    style={{ color: 'black' }}
                                                                >
                                                                    Book Now
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <Pagination
                            className="mt-5"
                            // current={currentPage}
                            total={50} // Tổng số lượng bản ghi hoặc mục cần phân trang
                            pageSize={10} // Số lượng mục hiển thị trên mỗi trang
                            onChange={handlePageChange} // Hàm xử lý sự kiện khi chuyển trang
                        />
                    </div>
                </div>
            )}

            {!none && <ChiTietTour ID={ID} />}
            {/* --------------- */}
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="mb-5 col-md-5">
                        <h2 className="mt-2">Subcribe HUU now to get useful traveling information</h2>
                        <Search placeholder="Enter your Email" allowClear enterButton="Subscribe" size="large" />
                        <p className="mt-4">Đăng ý ngay và luôn để nhận ưu đãi nóng bỏng tayyyyyyyy</p>
                        <p>Hiệu ứng pháo hoa</p>
                    </div>
                    <div className="col-md-7">
                        <img src={banner2} alt="banner"></img>
                    </div>
                </div>
            </div>
            {/* ----------------- */}
        </>
    );
}

export default Tours;
