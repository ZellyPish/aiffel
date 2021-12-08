import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Forum() {
  const token = useSelector((state) => state.user.token);
  return (
    <>
      {!token && <Navigate to="/" replace />}
      <div>포럼</div>
    </>
  );
}
