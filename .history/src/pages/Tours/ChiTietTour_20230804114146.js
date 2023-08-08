import baner from '../../assets/images/Gallery1.png';
function ChiTietTour() {
    return (
        <div className="container">
            <div className="col-md-8 wrap_chitiettour">
                <img
                    src={baner}
                    alt="anh"
                    className="img-fluid mt-5"
                    style={{ maxHeight: '550px', width: '100%', objectFit: 'initial' }}
                />
                <div className='mt-3'>
                    <div>
                        <div>
                            <h4>Holmen Lofoten, France</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default ChiTietTour;
