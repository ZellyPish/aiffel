import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export default function AuthedPages() {
  const token = useSelector((state) => state.userInfo.token);
  return token ? <Outlet /> : <Navigate to="/" replace />;
}
