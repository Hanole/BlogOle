import './cart-icon.styles.scss';
import { ReactComponent as IconProfile } from '../../assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='profile-icon-container' onClick={toggleIsCartOpen}>
            <IconProfile className='icon-profile' />
            <span className='item-count'>{cartCount}</span>
        </div>
    ) 
}



export default CartIcon;