import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to={'/login'}>
      <Button
        variant="contained"
        sx={{
          marginLeft: '10px',
        }}>
        <AccountCircleIcon />
        Masuk
      </Button>
    </Link>
  );
};

export default LoginButton;
