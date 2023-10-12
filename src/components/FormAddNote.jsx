import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

const FormAddNote = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleSaveNewNote = async () => {
    const res = await addNote({ title, body });

    if (res.error === false) {
      navigate('/');
    }
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
      <Button variant="contained" onClick={() => handleSaveNewNote()}>
        Simpan
      </Button>
    </Box>
  );
};

export default FormAddNote;
