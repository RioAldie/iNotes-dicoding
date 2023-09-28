import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardNote = ({ id, title, body, createdAt }) => {
  return (
    <Link to={`/${id}`}>
      <Card
        sx={{
          width: 350,
          height: 250,
        }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {createdAt}
          </Typography>
          <Typography variant="body2">{body}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

CardNote.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
};
export default CardNote;
