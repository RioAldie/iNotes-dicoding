import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import NoteItem from '../components/NoteItem';
import { useEffect, useState } from 'react';
import { getNote } from '../utils/lokal-data';
import DeleteNoteButton from '../components/buttons/DeleteNoteButton';
import ArchiveButton from '../components/buttons/ArchiveButton';
import UnArchiveButton from '../components/buttons/UnarchiveButton';

const Note = () => {
  const [note, setNote] = useState();
  const param = useParams();

  const handleGetNote = () => {
    const res = getNote(param.id);

    setNote(res);
  };

  useEffect(() => {
    handleGetNote();
  }, []);

  console.log('note =>', note);

  return (
    <Box sx={{ marginTop: '50px' }}>
      {note !== undefined ? (
        <>
          <DeleteNoteButton id={note.id} />
          {!note.archived ? (
            <ArchiveButton id={note.id} />
          ) : (
            <UnArchiveButton id={note.id} />
          )}

          <NoteItem
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
          />
        </>
      ) : (
        <p>Catatan tidak ditemukan</p>
      )}
    </Box>
  );
};

export default Note;
