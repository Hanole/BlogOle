import { auth, signOutUser } from '../../utils/firebase/firebase.utils';

const SignOutButton = ({ setShow }) => {
  const handleSignOut = async () => {
    try {
      await signOutUser(auth);
      setShow(true);  // Use the NavBar state
    } catch (error) {
      console.error("Something went wrong signing out:", error);
    }
  };

  return <span className="nav-link button1" onClick={handleSignOut}>SIGN OUT</span>;
};



  
export default SignOutButton;