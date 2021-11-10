import { Fragment } from 'react';
import Navbar from 'components/Layout/Navbar.js';
import Footer from 'components/Layout/Footer.js';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className='max-w-screen-xl mx-auto px-12 py-14'>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
