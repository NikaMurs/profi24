import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import BalancePage from './pages/BalancePage/BalancePage'
import SupportPage from './pages/SupportPage/SupportPage'
import LkPage from './pages/LkPage/LkPage'
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

import MainLayout from './components/MainLayout/MainLayout';
import AdminOrders from './admin/AdminOrders';
import AdminUsers from './admin/AdminUsers'
import AdminManagement from './admin/AdminManagement';
import AdminInvoice from './admin/AdminInvoice';
import AdminLogin from './admin/AdminLogin';
import AdminIsLoged from './admin/components/AdminIsLoged';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import UserIsLoged from './functions/UserIsLoged';
import moment from 'moment';
import { useSelector } from 'react-redux'
import 'moment/locale/ru';
import getCookie from './functions/getCookie';
import { useEffect } from 'react';
import { userActions } from './redux/userReducer';
import { useDispatch } from 'react-redux';
import LkEditPage from './pages/LkEditPage/LkEditPage';


moment.locale('ru');


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCookie('authorization')) {
      fetch(`${process.env.REACT_APP_URL}/`, {
        headers: {
          Authorization: `Bearer ${getCookie('authorization')}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Ошибка запроса");
          }
          return response.json();
        })
        .then(data => {
          dispatch(userActions.setUser(data.user))
        })
        .catch(error => {
          console.error("Ошибка при обработке ответа:", error);
        });
    }
  }, [])





  return (
    <Routes>
      <Route path='/' element={<MainLayout><MainPage /></MainLayout>} />
      <Route path='/products' element={<MainLayout><ProductsPage /></MainLayout>} />
      <Route path='/balance' element={<UserIsLoged><MainLayout><BalancePage /></MainLayout></UserIsLoged>} />
      <Route path='/support' element={<MainLayout><SupportPage /></MainLayout>} />
      <Route path='/lk' element={<UserIsLoged><MainLayout><LkPage /></MainLayout></UserIsLoged>} />
      <Route path='/lk/edit' element={<UserIsLoged><MainLayout><LkEditPage /></MainLayout></UserIsLoged>} />
      <Route path='/registration' element={<RegistrationPage />} />
      <Route path='/calculator/:productId' element={<MainLayout><CalculatorPage /></MainLayout>} />

      <Route path='/admin' element={<AdminIsLoged><Navigate to='/admin/orders' /></AdminIsLoged>} />
      <Route path='/admin/orders' element={<AdminIsLoged><AdminOrders /></AdminIsLoged>} />
      <Route path='/admin/users' element={<AdminIsLoged><AdminUsers /></AdminIsLoged>} />
      <Route path='/admin/management' element={<AdminIsLoged><AdminManagement /></AdminIsLoged>} />
      <Route path='/admin/invoice' element={<AdminIsLoged><AdminInvoice /></AdminIsLoged>} />
      <Route path='/admin/login' element={<AdminLogin />} />

    </Routes>
  );
}

export default App;