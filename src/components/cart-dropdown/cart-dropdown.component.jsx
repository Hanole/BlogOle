import Button from '../button/button.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../../context/cart.context';

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='Cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.length ? (
                 cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
               ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    )
}

export default CartDropdown;


