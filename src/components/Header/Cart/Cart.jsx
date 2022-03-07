import { data } from '../../../constants';
import './Cart.scss';



const CartBox = ({ product: { imgUrl, pName, price, quantity } }) => (
    <div className="box">
        <i className="fas fa-trash"></i>
        <img src={imgUrl} alt="" />
        <div className="content">
            <h3>{pName}</h3>
            <span className="price">{`$${price}/=`}</span>
            <span className="quantity">Qty : {quantity}</span>
        </div>
    </div>
)



const Cart = ({ cartBox }) => {


    return (
        <div className="shopping-cart" ref={cartBox}>
            {
                data.shoppingCart.map(product => (
                    <CartBox key={product.pName} product={product} />
                ))
            }
            <div className="total">total : $19.68/- </div>
            <a href="/#" className="btn">checkout</a>
        </div>
    )
}

export default Cart;