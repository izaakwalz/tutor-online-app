import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, createTheme, makeStyles, colors } from '@material-ui/core';
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

	const userUsesDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;

	useEffect(() => {
		if (userUsesDark) setDarkMode(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const theme = createTheme({
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
				<GlobalStyles />
				{routing}
			</div>
		</ThemeProvider>
	);
};

export default App;
