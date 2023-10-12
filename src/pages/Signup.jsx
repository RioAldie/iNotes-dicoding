import { Box, Button, TextField, Typography } from '@mui/material';
import useInput from '../hooks/useInput';
import { register } from '../utils/network-data';
import { useState } from 'react';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [name, onNameChange] = useInput('');

  const navigate = useNavigate();

  const handleSignup = async () => {
    setIsLoading(true);
    const res = await register({ name, email, password }).finally(
      () => setIsLoading(false)
    );

    if (res.error === false) {
      navigate('/login');
    }
  };
  return (
    <>
      {isLoading && <Loading />}
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
          <Typography>Daftar iNotes</Typography>
          <TextField
            fullWidth
            label="Nama"
            type="text"
            variant="outlined"
            onChange={(e) => onNameChange(e)}
          />
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
            onClick={() => handleSignup()}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
