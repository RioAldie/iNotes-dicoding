import { Box } from '@mui/material';
import FormAddNote from '../components/FormAddNote';

const AddNote = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        marginTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FormAddNote />
    </Box>
  );
};

export default AddNote;
