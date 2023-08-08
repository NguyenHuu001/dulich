import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLocationDot, faMagnifyingGlass, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
//--------------//
import banner2 from '../../assets/images/banner2.png';
//--------------//
import Link from 'antd/es/typography/Link';
import { InputNumber } from 'antd';
import Search from 'antd/es/input/Search';
import { Pagination } from 'antd';
//--------------//
import { fetchTours } from '../../services/Tour_services';
import './Tours.scss';
//-------------//
import ChiTietTour from './ChiTietTour';

function Tours(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [listTour, setListTour] = useState([]);
    const [none, setNone] = useState(false);
    useEffect(() => {
        getAllTour();
    }, []);

    const handleClick = () => {
        setNone(!none)
    }
    const getAllTour = async () => {
        let res = await fetchTours();
        if (res && res.data) {
            setListTour(res.data);
        }
    };
    // Hàm xử lý sự kiện khi người dùng chuyển trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
        getAllTour();
        // Tại đây, bạn có thể thực hiện các tác vụ cần thiết khi chuyển trang, chẳng hạn như gọi API để lấy dữ liệu mới.
    };
    return (
        <>
        {}
            
            {none && <ChiTietTour />}
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
