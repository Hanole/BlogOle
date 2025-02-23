import { Routes, Route } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';
import Book from './routes/books/book.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='about-me' element={<Book />} />
        <Route path='books' element={<Book />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;