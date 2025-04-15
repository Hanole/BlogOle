import { BooksContext } from '../../context/books.context';
import './book.styles.scss';
import { useContext, Fragment } from 'react';
import BookCard from '../../components/book-card/book-card.component';

const Book = () => {
    const { booksMap } = useContext(BooksContext)

    return (
        <Fragment>
        {
            Object.keys(booksMap).map((title) => (
                <Fragment>
                        <h1 data-text="Books I've read recently">Books I've read recently</h1>
                        <div className='books-container'>
                        {booksMap[title].map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    )
}

export default Book;