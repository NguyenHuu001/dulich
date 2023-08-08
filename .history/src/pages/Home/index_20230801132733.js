import earth from '../../assets/images/earth.png';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import video1 from '../../assets/audio/video1.mp4';
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
                    <div>
                        <video src={video1} controls />
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default Home;
