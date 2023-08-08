import baner from '../../assets/images/Gallery1.png'
function ChiTietTour() {
    return ( 
        <div className="container">
            <div className="col-md-8">
            <img src={baner} alt='anh' style={{ width: '100%', maxHeight: '300px', objectFit: }} />

            </div>
            <div className="col-md-4"></div>
        </div>
     );
}

export default ChiTietTour;