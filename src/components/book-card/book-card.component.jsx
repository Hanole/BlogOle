import './book-card.styles.scss';
import Button from '../button/button.component';

const BookCard = ({ book }) => {
    const { title, pages, imageUrl } = book;
    return (
    <article className='book-wrapper'>
    <div className='book-card-container'>
        <figure>
            <img src={imageUrl} alt={`${title}`} />
        </figure>
        <div className='book-card-info'>
            <h2 className='title'>{title}</h2>
            <p>{pages}</p>
        </div>
        <div className="bookbutton">
            <Button buttonType='inverted'>GoodReads</Button>
        </div>
    </div>
    </article>
    )
}


export default BookCard;