import React from 'react';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/auth-actions';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
// import NavMenu from '../Menu';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Link to='/' className={classes.brandContainer}>
        <img
          component={Link}
          to='/'
          src={
            theme.palette.type === 'dark'
              ? '/images/tutor-o-white.png'
              : '/images/tutor-o-black.png'
          }
          alt='logo'
          height='45px'
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {userInfo ? (
          <div className={classes.profile}>
            <List className={classes.navigationContainer}>
              <ListItem className={classes.listItem}>
                <Typography
                  variant='h5'
                  color='textPrimary'
                  className={classes.listItemText}
                  component='a'
                  href='/en'
                >
                  Home
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant='h5'
                  color='textPrimary'
                  className={classes.listItemText}
                  component='a'
                  href='/en/app'
                >
                  Tutorials
                </Typography>
              </ListItem>
            </List>

            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
