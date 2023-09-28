import { Button } from '@mui/material';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { PropTypes } from 'prop-types';
import { unarchiveNote } from '../../utils/lokal-data';
import { useNavigate } from 'react-router-dom';

const UnArchiveButton = ({ id }) => {
  const navigate = useNavigate();
  const handleUnArchiveNote = () => {
    unarchiveNote(id);

    navigate('/');
  };
  return (
    <Button
      sx={{ marginLeft: '20px' }}
      onClick={() => handleUnArchiveNote()}
      variant="outlined"
      startIcon={<UnarchiveIcon />}>
      {' '}
      Batalkan
    </Button>
  );
};

UnArchiveButton.propTypes = {
  id: PropTypes.string,
};

export default UnArchiveButton;
