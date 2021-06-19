import React from 'react';
import {
  Paper,
  //   Typography,
  //   CircularProgress,
  //   Divider,
  //   Card,
  //   CardMedia,
  Grid,
} from '@material-ui/core/';
// import useStyles from './styles';
import EditSubject from './EditSubject.js/EditSubject';

const SubjectList = () => {
  //   const classes = useStyles();
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <Grid container justify='space-between' alignItems='stretch' spacing={3}>
        <Grid item xs={12} sm={6} md={6}></Grid>
        <Grid item xs={12} sm={6} md={6}>
          <EditSubject />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SubjectList;
