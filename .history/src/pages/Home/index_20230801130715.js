import earth from '../../assets/images/earth.png';
import './Home.scss';
function Home() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrap_content">
                        <div className="top_content d-flex align-items-center">
                            <div className="title_top_content">Know Before You Go</div>
                            <img className="img_earth mt-1" src={earth} />
                        </div>
                        <h1>
                            Traveling opens the door to creating
                            <span>memories with duong</span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    );
}

export default Home;
