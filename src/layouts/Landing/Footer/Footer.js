import React from 'react';
import { Typography, makeStyles, Container, Link } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://twitter.com/izaakwalz'>
        TutorOnline
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 40,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth='xl'>
        <Typography variant='body1'>
          TutorOnline - Best Maths tutor Application
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
