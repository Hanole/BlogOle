import './product-card.styles.scss';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
    <article className='product-wrapper'>
        <div className='product-card-container'>
            <figure>
                <img src={imageUrl} alt={`${name}`} />
            </figure>
            <div className='product-card-info'>
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
            <div className="productbutton">
                <Button buttonType='inverted' onClick={addProductToCart}>add to cart</Button>
            </div>
        </div>
    </article>
    )
}

export default ProductCard;