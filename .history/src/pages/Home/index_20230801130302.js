import earth from '../../assets/images/earth.png'
import './Home.scss'
function Home() {
    return ( 
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrap_content">
                        <div className="top_content d-flex">
                            <h3 className='title_top_content'>Know Before You Go</h3>
                            <img className="img_earth mt-1" src={earth}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
     );
}

export default Home;