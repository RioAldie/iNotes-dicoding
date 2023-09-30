import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      bgcolor={'#dd2c00'}
      sx={{
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '200px',
        color: '#fff',
      }}>
      iNotes Dicoding Submission
    </Box>
  );
};

export default Footer;
