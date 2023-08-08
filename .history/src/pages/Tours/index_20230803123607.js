import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
//////

import banner2 from '../../assets/images/banner2.png';
////
import { InputNumber } from 'antd';
import './Tours.scss';
import Search from 'antd/es/input/Search';
function Tours() {
    return (
        <>
            <div className="container-fluid wrap_background col-md-12 p-0">
                <div className="background d-flex justify-content-center align-items-center">
                    <h3 className="content_background">All Tour</h3>
                </div>
            </div>
            <div className="container Search_where">
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
            </div>

            <div className="container List_DuLich">Failed to fetch</div>
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
            <div class="card" style={{ width: '400px' }}>
                <img
                    class="card-img-top"
                    src="../bootstrap4/img_avatar1.png"
                    alt="Card image"
                    style={{ width: '100%' }}
                />
                <div class="card-body">
                    <h4 class="card-title">John Doe</h4>
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">
                        See Profile
                    </a>
                </div>
            </div>
        </>
    );
}

export default Tours;
