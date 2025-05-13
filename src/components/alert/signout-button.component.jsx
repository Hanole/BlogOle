import { auth, signOutUser } from '../../utils/firebase/firebase.utils';

import { SignOutButton1 } from './signout-button.styles';

const SignOutButton = ({ setShow }) => {
  const handleSignOut = async () => {
    try {
      await signOutUser(auth);
      setShow(true);  // Use the NavBar state
    } catch (error) {
      console.error("Something went wrong signing out:", error);
    }
  };

  return <SignOutButton1 onClick={handleSignOut}>SIGN OUT</SignOutButton1>;
};



  
export default SignOutButton;