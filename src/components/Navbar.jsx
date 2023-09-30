import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LoginButton from './buttons/LoginButton';
import { useContext } from 'react';
import { loginCtx } from '../context/UserContext';
import LogoutButton from './buttons/LogoutButton';

export default function Navbar() {
  const { isLogin } = useContext(loginCtx);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#dd2c00' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={'/'}>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: '#fff' }}>
                iNotes
              </Typography>
            </Link>
          </Box>
          <Link to={'/archive'}>
            <Button variant="outlined" color="secondary">
              Arsip
            </Button>
            {isLogin ? <LogoutButton /> : <LoginButton />}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
