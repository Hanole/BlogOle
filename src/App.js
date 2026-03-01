import { Routes, Route } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Book from './routes/books/book.component.jsx';
import Men from './routes/men/men.component.jsx';
import Checkout from './routes/checkout/checkout.component.jsx';
import { setCurrentUser } from './store/user/user.action.js';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
      });
          
      return unsubscribe
    }, []);

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='about-me' element={<Book />} />
        <Route path='books' element={<Book />} />
        <Route path='men' element={<Men />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;