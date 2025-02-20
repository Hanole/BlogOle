
import { Outlet, Link } from 'react-router';
import { Fragment, useContext } from 'react';
import './navigation.styles.scss';
import { ReactComponent as PizzacatLogo } from '../../assets/pizzacatLogo.svg';
import { UserContext } from '../../components/context/user.context';


import SignOutButton from '../../components/alert/signout-button.component';
import 'animate.css';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
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
                    <SignOutButton key={1}/>
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