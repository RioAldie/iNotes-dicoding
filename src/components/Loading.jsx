import { Box, CircularProgress, Modal } from '@mui/material';
import { PropTypes } from 'prop-types';

const style = {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
const Loading = () => {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <CircularProgress sx={{ color: '#FF0032' }} />
      </Box>
    </Modal>
  );
};

export default Loading;
