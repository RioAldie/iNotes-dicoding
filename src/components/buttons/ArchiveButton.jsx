import { Button } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import { PropTypes } from 'prop-types';
import { archiveNote } from '../../utils/network-data';
import { useNavigate } from 'react-router-dom';

const ArchiveButton = ({ id }) => {
  const navigate = useNavigate();
  const handleArchiveNote = async () => {
    const res = await archiveNote(id);

    if (res.error === false) {
      navigate('/');
    }
  };
  return (
    <Button
      sx={{ marginLeft: '20px' }}
      onClick={() => handleArchiveNote()}
      variant="outlined"
      startIcon={<ArchiveIcon />}>
      {' '}
      Arsipkan
    </Button>
  );
};

ArchiveButton.propTypes = {
  id: PropTypes.string,
};

export default ArchiveButton;
