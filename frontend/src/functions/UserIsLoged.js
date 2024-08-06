import getCookie from '../functions/getCookie';
import LoginPage from '../pages/LoginPage/LoginPage';

export default function UserIsLoged({ children }) {

  function UserIsLoged() {
    if (getCookie('authorization')) {
      return true;
    } else {
      return false;
    }

  }

  return (
    <>
      {UserIsLoged() ? children : <LoginPage />}
    </>
  );
}