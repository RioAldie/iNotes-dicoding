import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ minHeight: '100vh' }}>{children}</Container>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
