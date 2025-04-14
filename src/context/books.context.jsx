import { createContext, useState } from "react";

import BOOKS from '../book-data.json';



export const BooksContext = createContext({
    books: []
});

export const BooksProvider = ({children}) => {
    const [books, setBooks] = useState(BOOKS);
    const value = {books}
    return (
        <BooksContext.Provider value={value}> {children} </BooksContext.Provider>
    )
}