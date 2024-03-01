import { Navigate } from 'react-router-dom';
import getCookie from '../functions/getCookie';

export default function UserIsLoged({ children }) {
    
      function UserIsLoged() {
        if (getCookie('isUserLoged')) {
          if (getCookie('isUserLoged') === 'true') {
            return true;
          } else {
            return false;
          }
        }
      }

    return (
        <>
        {UserIsLoged() ? children : <Navigate to={'/login'}/>}
        </>
    );
}