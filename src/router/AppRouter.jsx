// AppRouter.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import HeaderStore from '../components/HeaderStore';
import Home from '../pages/Home';
import LoginForm from '../components/LoginForm';
import Cart from '../components/Cart';
import RegisterForm from '../components/RegisterForm';

function AppRouter() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/" >
            <Route index path="/home" element={<PrivateRoute element={<Home />} />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path='/registro' element={<RegisterForm/>} />
            <Route path="/carrito" element={<PrivateRoute element={<Cart />} />} />
          </Route>
        </Routes>
    </AuthProvider>
  );
}

function PrivateRoute({ element }) {
  const { user } = useAuth();
  
  return user ? element : <Navigate to="/login" replace />;
}

export default AppRouter;
