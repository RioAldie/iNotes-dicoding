import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { PropTypes } from 'prop-types';
import { deleteNote } from '../../utils/network-data';
import { useNavigate } from 'react-router-dom';

const DeleteNoteButton = ({ id }) => {
  const navigate = useNavigate();
  const handleRemoveNote = async () => {
    const res = await deleteNote(id);
    if (res.error === false) {
      navigate('/');
    }
  };
  return (
    <Button
      onClick={() => handleRemoveNote()}
      variant="contained"
      color="primary"
      startIcon={<DeleteForeverIcon />}>
      Hapus
    </Button>
  );
};

DeleteNoteButton.propTypes = {
  id: PropTypes.string,
};

export default DeleteNoteButton;
