import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
//////
import { InputNumber } from 'antd';
import './Tours.scss';
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

            <div className='container List_DuLich'>
            Failed to fetch
            </div>
        </>
    );
}

export default Tours;
