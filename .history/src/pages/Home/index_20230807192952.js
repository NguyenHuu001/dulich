import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudSun,
    faMagnifyingGlass,
    faUsers,
    faDollarSign,
    faLocationDot,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'antd/es/typography/Link';
// IMG
import earth from '../../assets/images/earth.png';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import banner from '../../assets/images/banner.png';
import banner2 from '../../assets/images/banner2.png';
import video1 from '../../assets/audio/video1.mp4';
import Gallery1 from '../../assets/images/Gallery1.png';
import Gallery2 from '../../assets/images/Gallery2.png';
import Gallery3 from '../../assets/images/Gallery3.png';
import Gallery4 from '../../assets/images/Gallery4.png';
import Gallery5 from '../../assets/images/Gallery5.png';
import Gallery6 from '../../assets/images/Gallery6.png';
import Gallery7 from '../../assets/images/Gallery7.png';
import Gallery8 from '../../assets/images/Gallery8.png';
import avatar from '../../assets/images/avatar.png';
// ANT DESIGN
import { InputNumber } from 'antd';
/////
import { Data } from './data';
import { fetchFeaturedTour } from '../../services/Tour_services';
//Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// SCSS
import './Home.scss';
import Search from 'antd/es/input/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigat = useNavigate();
    const [FeaturedTour, setFeaturedTour] = useState([]);
    useEffect(() => {
        getFeaturedTour();
    }, []);
    const getFeaturedTour = async () => {
        const res = await fetchFeaturedTour();
        if (res && res.data) {
            setFeaturedTour(res.data);
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="wrap_content">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Know Before You Go</div>
                            <img className="img_earth mt-1" src={earth} />
                        </div>
                        <h1>
                            Traveling opens the door to creating
                            <span className="title_higtlight"> memories with duong</span>
                        </h1>
                        <span className="lh-base">
                            Our Vietnam is a beautiful country. We have a variety of landscapes which are widely
                            well-known such as Ha Long Bay, Hoi An Old quarter and Phong Nha Ke Bang cave. A long coast
                            with many attractive beaches is also our recognized reputation. Although Vietnam was a rich
                            traditional culture country, it has undergone a great change since 1945 due to the war. But
                            you can still find spiritual values in traditional arts performances such as singing Tru,
                            Cheo, Tuong, water puppet, ancient artifacts at the museums at the cultural centers in Hanoi
                            and Saigon.
                        </span>
                    </div>
                </div>
                {/* ------------- */}
                <div className="col-md-2 img1">
                    <img className="col-12" src={img1} />
                </div>
                <div className="col-md-2 video1">
                    <video src={video1} controls />
                </div>
                <div className="col-md-2 img1" style={{ marginTop: '60px' }}>
                    <img src={img2} />
                </div>
            </div>
            {/* ------------------- */}
            <div className="col-md-12 mt-3">
                <div className="d-flex flex-wrap">
                    <div className="col-12 d-flex align-items-center ms-3 mt-3 chieudai">
                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                        <div className="ps-3 border_right">
                            <h6>Location</h6>
                            <input className="input_where" placeholder="Where are you going?"></input>
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center ms-3 mt-3 chieudai">
                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                        <div className="ps-3 pe-3 border_right">
                            <h6>Distance</h6>
                            <InputNumber style={{ width: '100%' }} min={1} max={1000} placeholder="Distance k/m" />
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center ms-3 mt-3 chieudai">
                        <FontAwesomeIcon className="icon" icon={faUsers} />
                        <div className="ps-3 pe-3 border_right">
                            <h6>Max People</h6>
                            <InputNumber style={{ width: '100%' }} min={1} max={200} defaultValue={0} />
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center ms-3 mt-3">
                        <FontAwesomeIcon className="icon_search p-2" icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>

            {/* -------------------------------------- */}
            <div className="container mt-5">
                <div className="row d-flex">
                    <div className="col-md-3">
                        <h5 style={{ color: '#ee6e6e' }}>What we serve</h5>
                        <h2>We offer our best services</h2>
                    </div>
                    <div className="col-md-3">
                        <div className="border_items mt-3">
                            <div className="wrap_icon">
                                <FontAwesomeIcon className="icon_center p-2" icon={faCloudSun} />
                            </div>
                            <h5 className="mt-2">Calculate Weather</h5>
                            <p className="mt-2 mb-2 lh-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="border_items mt-3">
                            <div className="wrap_icon">
                                <FontAwesomeIcon className="icon_center p-2" icon={faCloudSun} />
                            </div>
                            <h5 className="mt-2">Best Tour Guide</h5>
                            <p className="mt-2 mb-2 lh-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="border_items mt-3">
                            <div className="wrap_icon">
                                <FontAwesomeIcon className="icon_center p-2" icon={faCloudSun} />
                            </div>
                            <h5 className="mt-2">Customization</h5>
                            <p className="mt-2 mb-2 lh-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------ */}
            <div className="container mt-5">
                <div className="row">
                    <div className="mb-5">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Explore</div>
                        </div>
                        <h2 className="mt-2">Our featured tours</h2>
                    </div>
                    <div className="container d-flex flex-wrap justify-content-center">
                        <div className="row col-md-12">
                            {FeaturedTour &&
                                FeaturedTour.length > 0 &&
                                FeaturedTour.map((item, index) => {
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
                                                        <div className="d-flex col-sm-12 col-md-6  align-items-center ">
                                                            <FontAwesomeIcon
                                                                className="icon_card"
                                                                icon={faLocationDot}
                                                                size="sm"
                                                            />
                                                            <h6 className="card-title mt-2 ms-2">{item.city}</h6>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                                                            <FontAwesomeIcon
                                                                className="icon_card"
                                                                icon={faStar}
                                                                size="sm"
                                                            />
                                                            <span className="ms-1">5.0</span>
                                                            <span className="ms-1">(5)</span>
                                                        </div>
                                                    </div>
                                                    <h6 className="olwe">{item.title}</h6>
                                                    <div className="d-flex justify-content-between align-items-center">
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
                                                            <Link to="/register" className="btn btn-primary btn_book">
                                                                Book Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="container mt-5">
                <div className="row">
                    <div className="mb-5 col-md-6">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Experience</div>
                        </div>
                        <h2 className="mt-2">With Duong our all experience we will serve you</h2>
                        <p className="lh-base">
                            Duong ipsum dolor sit consectetur.Duong ipsum dolor sit consectetur.Duong ipsum dolor sit
                            consectetur.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="me-4 d-flex flex-column align-items-center">
                                <div className="fw-bolder fs-5 experience">12K +</div>
                                <p className="mt-2">Successful trip</p>
                            </div>
                            <div className="me-4 d-flex flex-column align-items-center">
                                <div className="fw-bolder fs-5 experience">12K +</div>
                                <p className="mt-2">Regular clients</p>
                            </div>
                            <div className="me-4 d-flex flex-column align-items-center">
                                <div className="fw-bolder fs-5 experience">12K +</div>
                                <p className="mt-2">Year experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <img src={banner} style={{ width: '90%' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------ */}
            <div className="container mt-5">
                <div className="row">
                    <div className="mb-5">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Gallery</div>
                        </div>
                        <h2 className="mt-2">Visit our customers tour gallery</h2>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <div className="d-flex flex-wrap">
                            <div className="col-md-3 pb-0 gallery_img">
                                <img className="mb-3" src={Gallery1} />
                                <img className="mb-3" src={Gallery2} />
                            </div>
                            <div className="col-md-3 pb-0 col-xs-6 gallery_img">
                                <img className="mb-3" src={Gallery3} />
                                <img className="mb-3" src={Gallery4} />
                            </div>
                            <div className="col-md-3 pb-0 col-xs-6 gallery_img">
                                <img className="mb-3" src={Gallery5} />
                                <img className="mb-3" src={Gallery6} />
                            </div>
                            <div className="col-md-3 pb-0 col-xs-6 gallery_img">
                                <img className="mb-3" src={Gallery7} />
                                <img className="mb-3" src={Gallery8} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------- */}
            <div className="container mt-5">
                <div className="row">
                    <div className="mb-5">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Fans Love</div>
                        </div>
                        <h2 className="mt-2">What our fans say about us</h2>
                    </div>
                    <div className="col-md-12">
                        <Slider {...settings}>
                            {Data.map((data, index) => (
                                <div className="col-md-3 p-3" key={index}>
                                    <div className="col-md-12">
                                        <div className="card" style={{ border: '1px solid transparent' }}>
                                            <p>{data.content}</p>
                                            <div className="d-flex" key={index}>
                                                <div
                                                    className="col-md-4"
                                                    style={{ borderRadius: '10px', overflow: 'hidden', height: 'auto' }}
                                                >
                                                    <img
                                                        className="col-md-12"
                                                        style={{ width: '100%', objectFit: 'contain' }}
                                                        src={avatar}
                                                        alt="avatar"
                                                    />
                                                </div>
                                                <div className="ps-4">
                                                    <h4>{data.Name}</h4>
                                                    <p>{data.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            {/* ------------------------------------ */}
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="mb-5 col-md-5">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Subcribe</div>
                        </div>
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
        </div>
    );
}

export default Home;
