
import { Outlet, Link } from 'react-router';
import { Fragment, useContext, useState } from 'react';
import './navigation.styles.scss';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


import SvgIconPizzaCat from './../../assets/logocat'
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



import SignOutButton from '../../components/alert/signout-button.component';
import 'animate.css';

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const [show, setShow] = useState(false);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <div className='navbar'>
            <Link className='logo-container animate__animated animate__backInLeft' to='/'>
                <SvgIconPizzaCat className='logo' />
            </Link>
            <div className='nav-links-container'>
              <div className='wrapper'>
                <Link className='nav-link button1' to='/about-me'>
                    ABOUT ME
                </Link>
                {currentUser ? (
                    <SignOutButton setShow={setShow}/>
                ) : (
                    <Link className='nav-link button1' to='/auth'>
                        SIGN IN
                    </Link>
                )}
              </div>
              <div>
                <CartIcon />
              </div>
            </div>
            {isCartOpen && <CartDropdown />}
        </div>

                {/* The bootstrap component - Alert when signed out */}
        {show && (
            <Alert  variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>You have successfully logged out</Alert.Heading>
            <p>Have a wonderful day!</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
        )}

        <Outlet />
      </Fragment>
    )
  }


  export default NavBar;