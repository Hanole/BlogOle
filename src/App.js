import { Routes, Route } from 'react-router';
import NavBar from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component';

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
      </Route>
    </Routes>
  );
};

export default App;