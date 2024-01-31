import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from 'pages/HomePage/HomePage';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { Layout } from './Layout/Layout';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivatRoute } from 'routes/PrivatRoute';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/authSlice/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts">
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login">
                <ContactsPage />
              </PrivatRoute>
            }
          />
        </Route>
      </Routes>
      ;
    </>
  );
};
