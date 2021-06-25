import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'absolute',
  },
  loading: {
    height: 100,
    width: 100,
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '100vh',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <div className={classes.loading}>
    //     <CircularProgress />
    //   </div>
    // </div>
    <Paper elevation={0} className={classes.paper}>
      <CircularProgress size='7em' />
    </Paper>
  );
};

export default Loader;
