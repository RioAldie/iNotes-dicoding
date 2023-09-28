import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { addNote } from '../utils/lokal-data';
import { useNavigate } from 'react-router-dom';

const FormAddNote = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleGetInput = () => {
    console.log('new note =>', {
      title,
      body,
    });

    handleSaveNewNote(title, body);

    navigate('/');
  };

  const handleSaveNewNote = (title, body) => {
    addNote({ title, body });
  };
  return (
    <Box
      sx={{
        width: 500,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
      <Typography variant="h6">Buat Catatan Baru</Typography>
      <TextField
        label="Judul"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Catatan"
        multiline
        rows={4}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleGetInput()}>
        Simpan
      </Button>
    </Box>
  );
};

export default FormAddNote;
