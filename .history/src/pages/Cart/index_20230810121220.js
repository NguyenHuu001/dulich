import baner from '../../assets/images/banner.png';
import './Carts.scss';
function Cart() {
    return (
        <div className="container mt-5">
            <div>
                <div className="col-md-2">
                    <img src={baner} alt="img" style={{ width: '100%', height: '50%' }}></img>
                </div>
            </div>
        </div>
    );
}

export default Cart;
