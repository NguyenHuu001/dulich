import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons';
// IMG
import earth from '../../assets/images/earth.png';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import video1 from '../../assets/audio/video1.mp4';
// ANT DESIGN
import { InputNumber } from 'antd';
// SCSS
import './Home.scss';
function Home() {
    
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
                <div className="col-md-2 img1">
                    <img src={img1} />
                </div>
                <div className="col-md-2 video1">
                    <video src={video1} controls />
                </div>
                <div className="col-md-2 img1">
                    <img src={img2} />
                </div>
            </div>
            <div className="col-md-12 mt-3">
                <div className="d-flex">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                        <div className="ps-3 border_right">
                            <h6>Location</h6>
                            <input className="input_where" placeholder="Where are you going?"></input>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                        <div className="ps-3 border_right">
                            <h6>Distance</h6>
                            <InputNumber min={1} max={1000} defaultValue={'Dí'}  />
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                        <FontAwesomeIcon className="icon" icon={faUsers} />
                        <div className="ps-3 border_right">
                            <h6>Max People</h6>
                            <InputNumber min={1} max={200} defaultValue={0}  />
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-3">
                    <FontAwesomeIcon className="icon_search p-2" icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
