import { BooksContext } from '../../components/context/books.context';
import './book.styles.scss';
import { useContext } from 'react';
import BookCard from '../../components/book-card/book-card.component';

const Book = () => {
const { books } = useContext(BooksContext)

return (
    <div className='books-container'>
        {books.map((book) => (
            <BookCard key={book.id} book={book} />
        ))}
    </div>
    )
}

export default Book;