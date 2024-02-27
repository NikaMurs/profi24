import { Navigate } from 'react-router-dom';

export default function AdminIsLoged({ children }) {

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    
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