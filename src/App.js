import { Routes, Route } from 'react-router';

import Home from './routes/home/home.component';
import NavBar from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';

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
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;