import baner from '../../assets/images/banner.png';
import Carts from '../Cart';
function Cart() {
    return (
        <div className="container">
            <div className="col-md-2">
                <img src={baner} alt="img" style={{ width: '100%', height: '50%' }}></img>
            </div>
        </div>
    );
}

export default Cart;
