import React, { useEffect } from 'react';
import { Route, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return <Outlet />;
};

export default PrivateRoute;