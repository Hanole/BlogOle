
import { Outlet, Link } from 'react-router';
import { Fragment, useContext } from 'react';
import './navigation.styles.scss';
import { ReactComponent as PizzacatLogo } from '../../assets/pizzacatLogo.svg';
import { UserContext } from '../../components/context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import 'animate.css';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser);

    return (
      <Fragment>
        <div className='navbar'>
            <Link className='logo-container animate__animated animate__backInLeft' to='/'>
                <PizzacatLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/about-me'>
                    ABOUT ME
                </Link>
                {currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                ) : (
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                )}
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }


  export default NavBar;