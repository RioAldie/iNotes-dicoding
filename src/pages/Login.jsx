import { Box, Button, TextField, Typography } from '@mui/material';
import useInput from '../hooks/useInput';
import { login, putAccessToken } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { loginCtx } from '../context/UserContext';

const Login = () => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const { setIsLogin } = useContext(loginCtx);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await login({ email, password });

    console.log(res);
    if (res.error === false) {
      putAccessToken(res.data.accessToken);
      setIsLogin(true);

      navigate('/');
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
      <Box
        sx={{
          minWidth: '400px',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
        <Typography>Login iNotes</Typography>
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => onEmailChange(e)}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => onPasswordChange(e)}
        />
        <Button
          sx={{ height: 50 }}
          variant="contained"
          size="large"
          onClick={() => handleLogin()}>
          Masuk
        </Button>
        <Typography>
          Belum punya akun? <Link to={'/signup'}>Daftar disini</Link>{' '}
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
