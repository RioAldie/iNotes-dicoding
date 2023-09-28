import { Box, Typography } from '@mui/material';
import CardNote from '../components/CardNote';
import { useEffect, useState } from 'react';
import { getArchivedNotes } from '../utils/lokal-data';
import AddNoteButton from '../components/buttons/AddNoteButton';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const Archive = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('title');
  const handleGetNotes = () => {
    const notes = getArchivedNotes();

    if (query !== '' && query !== null) {
      const result = notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );

      // console.log('search res =>', result);

      return setNotes(result);
    }

    return setNotes(notes);
  };

  useEffect(() => {
    handleGetNotes();
  }, [query]);

  // console.log('notes =>', notes);
  return (
    <>
      <Typography variant="h5" sx={{ marginTop: '150px' }}>
        Catatan Arsip
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
          minHeight: '50vh',
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
          <p>Catatan Kosong!</p>
        )}
      </Box>
    </>
  );
};

export default Archive;
