import { signOut } from 'firebase/auth';
import auth from '../firebase-config';

const logoutUser = () => {
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  logout();
  return null;
};

export default logoutUser;
