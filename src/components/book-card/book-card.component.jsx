import './book-card.styles.scss';
import Button from '../button/button.component';
import { FaGoodreads } from 'react-icons/fa';


const BookCard = ({ book }) => {
    const { title, pages, imageUrl, url } = book;

    const openGoodreads = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div className='book-wrapper'>
            <div className='book-card-container'>
                <img src={imageUrl} alt={`${title}`} />
                <div className='book-card-info'>
                    <h2 className='title'>{title}</h2>
                    <p>{pages}</p>
                </div>
                <div className="bookbutton">
                    <Button buttonType='inverted' onClick={openGoodreads}>
                    <span className='goodreads-container'>
                        <FaGoodreads style={{ fontSize: '1.5rem', color: '#6D4C41', marginRight: '8px' }} />
                        </span>
                    GoodReads
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default BookCard;