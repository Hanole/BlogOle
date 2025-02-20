import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const AboutMe = () => {
  
  return (
  <h1>Yes</h1>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='about-me' element={<AboutMe />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;