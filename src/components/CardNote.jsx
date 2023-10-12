import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/network-data';
import parser from 'html-react-parser';

const CardNote = ({ id, title, body, createdAt }) => {
  const date = showFormattedDate(createdAt);

  return (
    <Link to={`/${id}`}>
      <Card
        sx={{
          width: 350,
          height: 250,
        }}>
        <CardContent>
          <Typography color="text.primary" gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body2">{parser(body)}</Typography>
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
