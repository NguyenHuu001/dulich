import baner from '../../assets/images/banner.png';
import './Carts.scss';
function Cart() {
    return (
        <div className="container mt-5">
            <div className='d-flex'>
                <div className="col-md-2">
                    <img src={baner} alt="img" style={{ width: '100%', height: '50%' }}></img>
                </div>
                <div>
                    <h3>Holmen Lofoten, France</h3>
                    
                </div>
            </div>
        </div>
    );
}

export default Cart;
