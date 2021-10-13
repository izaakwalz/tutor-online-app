import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const LineProgress = (props) => {
	const grade =
		props.value >= 100
			? '#2196f3'
			: props.value >= 90
			? '#9c27b0'
			: props.value >= 75
			? '#e91e63'
			: props.value >= 50
			? '#009688'
			: '#f44336';
	const BorderLinearProgress = withStyles((theme) => ({
		root: {
			height: 6,
			borderRadius: 5,
		},

		bar: {
			borderRadius: 5,
			backgroundColor: grade,
		},
	}))(LinearProgress);

	return <BorderLinearProgress {...props} />;
};

function LinearProgressWithLabel(props) {
	return (
		<Box display='flex' alignItems='center'>
			<Box width='100%' mr={1}>
				<LineProgress variant='determinate' {...props} />
				{/* <LinearProgress variant='determinate' {...props} /> */}
			</Box>
			<Box minWidth={35}>
				<Typography variant='body2' color='textSecondary'>{`${Math.round(
					props.value,
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
	root: {
		width: '500',
	},
	mainTitle: {
		fontSize: '35px',
		marginTop: '20px',
	},
});

export const PreTestProgress = () => {
	const classes = useStyles();
	const [progress, setProgress] = React.useState(10);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 10 : prevProgress + 10,
			);
		}, 2000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={classes.root}>
			<Typography component='h4' variant='h4' gutterBottom>
				{/* 'novice', 'intermediate', 'advanced', 'expert', 'master' */}
				{progress >= 100
					? 'MASTER'
					: progress >= 90
					? 'EXPERT'
					: progress >= 75
					? 'ADVANCED'
					: progress >= 50
					? 'INTERMEDIATE'
					: 'NOVICE'}
			</Typography>
			<LinearProgressWithLabel value={progress} />
		</div>
	);
};

export const ResultProgress = ({ score }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography
				component='h4'
				variant='h4'
				className={classes.mainTitle}
				gutterBottom
			>
				{score >= 100
					? 'MASTER'
					: score >= 90
					? 'EXPERT'
					: score >= 75
					? 'ADVANCED'
					: score >= 50
					? 'INTERMEDIATE'
					: 'NOVICE'}
			</Typography>
			<LineProgress variant='determinate' value={score} />
		</div>
	);
};
