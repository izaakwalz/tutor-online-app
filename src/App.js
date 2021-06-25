import React, { useState } from 'react';
import clsx from 'clsx';
import { useRoutes } from 'react-router-dom';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  Fab,
  colors,
} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Brightness4, Brightness2 } from '@material-ui/icons';
import shadows from './theme/shadows';
import typography from './theme/typography';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  button: {
    border: theme.palette.success.main,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabClor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const routing = useRoutes(routes);

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    shadows,
    typography,
    layout: {
      contentWidth: 1140,
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: colors.indigo[500],
      },
      secondary: {
        main: colors.indigo[500],
      },
      alternate: {
        main: 'rgb(247, 249, 250)',
        dark: '#e8eaf6',
      },
      background: {
        default: darkMode ? '#232323' : '#f7f8fc',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#f7f8fc',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Fab
          aria-label='dark_mood_switch'
          className={clsx(classes.fab, classes.fabClor)}
          color='inherit'
        >
          <ToggleButton
            value='check'
            selected={darkMode}
            className={classes.button}
            onChange={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Brightness2 /> : <Brightness4 />}
          </ToggleButton>
        </Fab>
        <GlobalStyles />
        {routing}
      </div>
    </ThemeProvider>
  );
};

export default App;
