import { Box, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams('');

  const handleSetParams = (query) => {
    setSearchParams({ title: query });
  };

  return (
    <Box>
      <TextField
        sx={{ minWidth: 350 }}
        id="standard-search"
        label="Cari catatan"
        type="search"
        variant="standard"
        color="primary"
        onChange={(e) => handleSetParams(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
