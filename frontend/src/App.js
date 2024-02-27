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
      <Route path='/calculator' element={<MainLayout><CalculatorPage /></MainLayout>} />

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