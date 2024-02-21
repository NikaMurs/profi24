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

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout><MainPage /></MainLayout>} />
      <Route path='/products' element={<MainLayout><ProductsPage /></MainLayout>} />
      <Route path='/balance' element={<MainLayout><BalancePage /></MainLayout>} />
      <Route path='/support' element={<MainLayout><SupportPage /></MainLayout>} />
      <Route path='/lk' element={<MainLayout><LkPage /></MainLayout>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/registration' element={<RegistrationPage />} />

      <Route path='/admin' element={<Navigate to='/admin/orders' />} />
      <Route path='/admin/orders' element={<AdminOrders />} />
      <Route path='/admin/users' element={<AdminUsers />} />

    </Routes>
  );
}

export default App;
