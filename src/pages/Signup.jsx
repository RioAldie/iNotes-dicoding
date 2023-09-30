import { Box, Button, TextField, Typography } from '@mui/material';
import useInput from '../hooks/useInput';
import { login, register } from '../utils/network-data';

const Signup = () => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [name, onNameChange] = useInput('');

  const handleSignup = async () => {
    const res = await register({ name, email, password });

    console.log(res);
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
          Masuk
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
