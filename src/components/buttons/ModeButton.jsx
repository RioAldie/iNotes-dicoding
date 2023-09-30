import { Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { modeCtx } from '../../context/ModeContext';

const ModeButton = () => {
  const { mode, setMode } = useContext(modeCtx);
  const [checked, setChecked] = useState(
    mode === 'light' ? false : true
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default ModeButton;
