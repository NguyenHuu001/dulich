import baner from '../../assets/images/Gallery1.png';
function ChiTietTour() {
    return (
        <div className="container">
            <div className="col-md-8">
                <img
                    src={baner}
                    alt="anh"
                    className="img-fluid"
                    style={{ maxHeight: '400px', width: '100%', objectFit: 'cen' }}
                />
            </div>
            <div className="col-md-4"></div>
        </div>
    );
}

export default ChiTietTour;
