import { ShoppingCartIcon, ShoppingCartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <ShoppingCartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingCartIcon />
            <ItemCount>{cartCount}</ItemCount>
        </ShoppingCartIconContainer>
    ) 
}



export default CartIcon;