import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../../context/UserContext';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const { setCurrentUser } = useContext(loginCtx);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');

    navigate('/login');

    setCurrentUser(null);
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
