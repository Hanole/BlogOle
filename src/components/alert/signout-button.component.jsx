import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { auth, signOutUser } from '../../utils/firebase/firebase.utils';

const SignOutButton = () => {
    const [show, setShow] = useState(false);
    
    const handleSignOut = async () => {
      try {
        await signOutUser(auth);
        setShow(true);  // Set show to true
        setShow((prev) => !prev);
      } catch (error) {
        console.error("Something went wrong signing out:", error);
      }
    };

    useEffect(() => {
        console.log('Show state changed:', show); // This will log every time 'show' changes
      }, [show]);

    return (
      <>
        <span className="nav-link" onClick={handleSignOut}>
          SIGN OUT
        </span>
        {show && (
            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
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
      </>
    );
  };



  
export default SignOutButton;