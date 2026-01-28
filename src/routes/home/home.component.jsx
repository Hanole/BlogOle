import { Outlet } from 'react-router';

import Directory from '../../components/directory/directory.component';
import { Hero } from '../../components/hero/hero.component';

const Home = () => {
  return (
    <div>
        <Outlet />
        <Hero />
        <Directory />
    </div>
  );
};

export default Home;
