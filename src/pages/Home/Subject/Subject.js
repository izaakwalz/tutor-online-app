import React from 'react';
import ReactPlayer from 'react-player/youtube';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

import useStyles from './styles';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card} raised elevation={6}>
			<CardMedia className={classes.media} title={subject.name} aspectratio='wide'>
				<ReactPlayer url={subject.link} className={classes.reactPlayer} width='100%' height='100%' />
			</CardMedia>
			<Link component='span' to={`/app/course/${subject.slug}`} className={classes.cardAction}>
				<Typography className={classes.title} gutterBottom variant='h5' component='h2'>
					{subject.name}
				</Typography>
			</Link>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{subject.summary.split(' ').splice(0, 20).join(' ')}...
				</Typography>
			</CardContent>
			<div className={classes.details}>
				<Typography variant='body2' color='textSecondary' component='h2'>
					{moment(subject.createdAt).fromNow()}
				</Typography>
			</div>
		</Card>
	);
};

export default Subject;
