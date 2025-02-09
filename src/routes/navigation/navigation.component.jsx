
import { Outlet, Link } from 'react-router';
import { Fragment } from 'react';
import './navigation.syles.scss';
import { ReactComponent as PizzacatLogo } from '../../assets/pizzacatLogo.svg';

const NavBar = () => {
    return (
      <Fragment>
        <div className='navbar'>
            <Link className='logo-container' to='/'>
                <PizzacatLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/about-me'>
                    About me
                </Link>
                <Link className='nav-link' to='/'>
                    Home
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }


  export default NavBar;