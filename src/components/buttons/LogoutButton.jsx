import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../../context/UserContext';
import LogoutIcon from '@mui/icons-material/Logout';

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
      sx={{
        marginLeft: '10px',
      }}
      onClick={() => handleLogOut()}>
      <LogoutIcon />
      Keluar
    </Button>
  );
};

export default LogoutButton;
