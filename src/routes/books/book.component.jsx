import { BooksContext } from '../../context/books.context';
import './book.styles.scss';
import { useContext } from 'react';
import BookCard from '../../components/book-card/book-card.component';

const Book = () => {
const { books } = useContext(BooksContext)

return (
    <div>
        <h1 data-text="Books I've read recently">Books I've read recently</h1>
        <div className='books-container'>
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    </div>
    )
}

export default Book;