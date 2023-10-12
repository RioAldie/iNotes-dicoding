import { Box, Typography } from '@mui/material';
import CardNote from '../components/CardNote';
import { useEffect, useState } from 'react';
import AddNoteButton from '../components/buttons/AddNoteButton';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, getUserLogged } from '../utils/network-data';
import Loading from '../components/Loading';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('title');

  const handleGetNotes = async () => {
    setIsLoading(true);
    const res = await getActiveNotes().finally(() => {
      setIsLoading(false);
    });

    if (query !== '' && query !== null) {
      const result = res.data.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );

      // console.log('search res =>', result);

      return setNotes(result);
    }

    return setNotes(res.data);
  };

  useEffect(() => {
    handleGetNotes();
  }, [query]);

  // console.log('notes =>', notes);
  return (
    <>
      {isLoading && <Loading />}
      <Typography variant="h5" sx={{ marginTop: '150px' }}>
        Catatan Aktif
      </Typography>
      <Box
        sx={{
          padding: '20px',
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AddNoteButton />
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '10px',
          minHeight: '100vh',
          maxWidth: '100%',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        {notes.length !== 0 ? (
          notes.map((note) => {
            return (
              <CardNote
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                archived={note.archived}
                body={note.body}
              />
            );
          })
        ) : (
          <p>Data Kosong</p>
        )}
      </Box>
    </>
  );
};

export default Home;
