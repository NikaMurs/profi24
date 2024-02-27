import { Navigate } from 'react-router-dom';
import getCookie from '../../functions/getCookie';

export default function AdminIsLoged({ children }) {
    
      function isAdminLoged() {
        if (getCookie('isAdminLoged')) {
          if (getCookie('isAdminLoged') === 'true') {
            return true;
          } else {
            return false;
          }
        }
      }

    return (
        <>
        {isAdminLoged() ? children : <Navigate to={'/admin/login'}/>}
        </>
    );
}