import { CssBaseline } from '@mui/material';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout';
import Note from './pages/Note';
import AddNote from './pages/AddNote';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff3d00',
    },
    secondary: {
      main: '#fff',
    },
    mode: 'dark',
  },
});
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
            <Route
              path="/:id"
              element={
                <Layout>
                  <Note />
                </Layout>
              }
            />
            <Route
              path="/add"
              element={
                <Layout>
                  <AddNote />
                </Layout>
              }
            />
            <Route
              path="/archive"
              element={
                <Layout>
                  <Archive />
                </Layout>
              }
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
