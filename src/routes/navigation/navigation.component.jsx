
import { Outlet, Link } from 'react-router';
import { Fragment, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  NavbarContainer,
  LogoContainer,
  Logo,
  NavLinksContainer,
  StyledAlert,
  Wrapper,
  Button1
} from './navigation.styles.jsx';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';


import { CartContext } from '../../context/cart.context';

import Button from 'react-bootstrap/Button';



import SignOutButton from '../../components/alert/signout-button.component';
import 'animate.css';

const NavBar = () => {
    const currentUser = useSelector((state) => state.user.currentUser )
    const [show, setShow] = useState(false);
  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavbarContainer>
            <LogoContainer as={Link} className='animate__animated animate__backInLeft' to='/'>
                <Logo >
                  UTEN
                </Logo>
            </LogoContainer>
            <NavLinksContainer>
              <Wrapper>
                <Button1 as={Link} to='/about-me'>
                    ABOUT ME
                </Button1>
                {currentUser ? (
                    <SignOutButton setShow={setShow}/>
                ) : (
                    <Button1 as={Link} to='/auth'>
                        SIGN IN
                    </Button1>
                )}
              </Wrapper>
              <div>
                <CartIcon />
              </div>
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavbarContainer>

                {/* The bootstrap component - Alert when signed out */}
        {show && (
            <StyledAlert  variant="success" onClose={() => setShow(false)} dismissible>
            <StyledAlert.Heading>You have successfully logged out</StyledAlert.Heading>
            <p>Have a wonderful day!</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </StyledAlert>
        )}

        <Outlet />
      </Fragment>
    )
  }


  export default NavBar;