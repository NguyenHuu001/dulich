import earth from '../../assets/images/earth.png'
function Home() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrap_content">
                        <div className="top_content">
                            <p className='tit'>Know Before You Go</p>
                            <img className='img_earth' src={earth}/>
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