import { Button } from '@mui/material';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { PropTypes } from 'prop-types';
import { unarchiveNote } from '../../utils/network-data';
import { useNavigate } from 'react-router-dom';

const UnArchiveButton = ({ id }) => {
  const navigate = useNavigate();
  const handleUnArchiveNote = async () => {
    const res = await unarchiveNote(id);

    if (res.error === false) {
      navigate('/');
    }
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
