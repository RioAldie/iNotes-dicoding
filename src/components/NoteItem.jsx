import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';

const NoteItem = ({ title, body, createdAt }) => {
  return (
    <Card
      sx={{ minWidth: 275, marginTop: '30px', minHeight: '800px' }}>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          paddingTop: '50px',
        }}>
        <Typography
          sx={{ fontSize: 34 }}
          color="text.primary"
          gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {createdAt}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', maxWidth: '800px' }}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
};

export default NoteItem;
