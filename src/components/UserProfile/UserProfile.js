import { updateProfile, updatePassword } from 'firebase/auth';
import { useSelector } from 'react-redux';
import auth from '../../firebase-config';
import MyAccountPage from '../../Pages/MyAccountPage';
import Title from '../UI/Title';
import Button from '../UI/Button';

const UserProfile = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const currUserEmail = currentUser ? currentUser.email : null;

  const updateUserPassword = () => {
    updatePassword(auth.currentUser, 'Test1ab')
      .then(() => {
        // Update successful.
        console.log('update password');
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log('error password');
      });
  };
  return (
    <MyAccountPage>
      <Title as="h1">Your Data</Title>
      <div>
        {currUserEmail && (
          <div>
            <h5>Login Data: </h5>
            <p>
              e-mail: <b>{currUserEmail}</b>
            </p>
            <p>
              password: <b>*****</b>
            </p>
            <Button onClick={updateUserPassword}>Change password</Button>
          </div>
        )}
        <div>
          <h5>Address: </h5>
          <address>
            <p>Test 35 Street</p>
            <p>1600 New York</p>
            <p>USA</p>
            <p>555 555 555</p>
          </address>
          <Button>Change address</Button>
        </div>
      </div>
    </MyAccountPage>
  );
};

export default UserProfile;
