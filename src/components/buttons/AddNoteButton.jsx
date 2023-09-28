import { Button } from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Link } from 'react-router-dom';

const AddNoteButton = () => {
  return (
    <Link to={'/add'}>
      <Button variant="contained" startIcon={<NoteAddIcon />}>
        Tambah
      </Button>
    </Link>
  );
};

export default AddNoteButton;
