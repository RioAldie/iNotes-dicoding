import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../../context/UserContext';

const LogoutButton = () => {
  const { setIsLogin } = useContext(loginCtx);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');

    navigate('/login');

    setIsLogin(false);
  };
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{
        bgcolor: '#fff',
        color: '#FF0032',
      }}
      onClick={() => handleLogOut()}>
      Keluar
    </Button>
  );
};

export default LogoutButton;
