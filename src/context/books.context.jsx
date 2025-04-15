import { createContext, useState, useEffect } from "react";

import { getBooksAndDocuments } from "../utils/firebase/firebase.utils";

export const BooksContext = createContext({
    booksMap: {},
});

export const BooksProvider = ({ children }) => {
  const [booksMap, setBooksMap] = useState({});

  useEffect(() => {
    const getBooksMap = async () => {
      const booksMap = await getBooksAndDocuments();
      console.log(booksMap)
      setBooksMap(booksMap);
    };

    getBooksMap();
  }, [])

  const value = { booksMap };
  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
};