import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to={'/login'}>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#fff',
          color: '#ff3d00',
        }}>
        <AccountCircleIcon />
        Masuk
      </Button>
    </Link>
  );
};

export default LoginButton;
