import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import NoteItem from '../components/NoteItem';
import { useEffect, useState } from 'react';
import { getNote } from '../utils/network-data';
import DeleteNoteButton from '../components/buttons/DeleteNoteButton';
import ArchiveButton from '../components/buttons/ArchiveButton';
import UnArchiveButton from '../components/buttons/UnarchiveButton';
import Loading from '../components/Loading';

const Note = () => {
  const [note, setNote] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  const handleGetNote = async () => {
    setIsLoading(true);
    const res = await getNote(param.id).finally(() =>
      setIsLoading(false)
    );

    setNote(res);
  };

  useEffect(() => {
    handleGetNote();
  }, []);

  return (
    <>
      {' '}
      {isLoading && <Loading />}
      <Box sx={{ marginTop: '50px' }}>
        {note !== undefined ? (
          <>
            <DeleteNoteButton id={note.data.id} />
            {!note.data.archived ? (
              <ArchiveButton id={note.data.id} />
            ) : (
              <UnArchiveButton id={note.data.id} />
            )}

            <NoteItem
              title={note.data.title}
              body={note.data.body}
              createdAt={note.data.createdAt}
            />
          </>
        ) : (
          <p>Catatan tidak ditemukan</p>
        )}
      </Box>
    </>
  );
};

export default Note;
