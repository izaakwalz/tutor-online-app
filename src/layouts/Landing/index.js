import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { ToastContainer } from 'material-react-toastify';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    minHeight: '100vh',
    padding: theme.spacing(0),
  },
  main: {
    marginTop: theme.spacing(3, 2),
    // marginBottom: theme.spacing(2),
  },
}));

const LandingPageLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.main}>
        <Outlet />
      </main>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        limit={1}
      />
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
