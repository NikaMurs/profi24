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
import AdminOrders from './admin/pages/AdminOrders';
import AdminUsers from './admin/pages/AdminUsers'
import AdminManagement from './admin/pages/AdminManagement';
import AdminInvoice from './admin/pages/AdminInvoice';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import UserIsLoged from './functions/UserIsLoged';
import moment from 'moment';
import { useSelector } from 'react-redux'
import 'moment/locale/ru';
import getCookie from './functions/getCookie';
import { useEffect, useState } from 'react';
import { userActions } from './redux/userReducer';
import { useDispatch } from 'react-redux';
import LkEditPage from './pages/LkEditPage/LkEditPage';
import fetchTest from './functions/fetchTest';
import UploadPage from './pages/Upload/UploadPage';


moment.locale('ru');


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCookie('authorization')) {

      fetchTest();
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



  const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [userId, setUserId] = useState('user1'); // Пример пользовательского ID

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);

      const response = await fetch('https://profibook.pro/api/upload.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      alert(result.message);
    };

    return (
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    );
  };


  return (
    <Routes>
      <Route path='/test' element={<FileUpload />} />

      <Route path='/' element={<MainLayout><MainPage /></MainLayout>} />
      <Route path='/products' element={<MainLayout><ProductsPage /></MainLayout>} />
      <Route path='/balance' element={<UserIsLoged><MainLayout><BalancePage /></MainLayout></UserIsLoged>} />
      <Route path='/support' element={<MainLayout><SupportPage /></MainLayout>} />
      <Route path='/lk' element={<UserIsLoged><MainLayout><LkPage /></MainLayout></UserIsLoged>} />
      <Route path='/lk/edit' element={<UserIsLoged><MainLayout><LkEditPage /></MainLayout></UserIsLoged>} />
      <Route path='/registration' element={<RegistrationPage />} />
      <Route path='/calculator/:productId' element={<MainLayout><CalculatorPage /></MainLayout>} />

      <Route path='/upload' element={<UploadPage />} />


      <Route path='/admin' element={<Navigate to='/admin/orders' />} />
      <Route path='/admin/orders' element={<AdminOrders />} />
      <Route path='/admin/users' element={<AdminUsers />} />
      <Route path='/admin/management' element={<AdminManagement />} />
      <Route path='/admin/invoice' element={<AdminInvoice />} />

    </Routes>
  );
}

export default App;