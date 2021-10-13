import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';
import { ListTutorsubjects } from '../../actions/subject.actions';
import Subject from './components/Subject';
import Loader from '../../components/Loader';
import useStyles from './styles';
import Meta from '../../components/Meta';

const Instructor = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const history = useNavigate();

	const user = JSON.parse(localStorage.getItem('userInfo'));

	const topic = useSelector((state) => state.topic);
	const { loading, courses } = topic;

	useEffect(() => {
		dispatch(ListTutorsubjects);
	}, [dispatch]);

	return (
		<div>
			<Meta title='Instructor | Dashboard' />

			{user.role !== 'tutor' ? (
				history('/app')
			) : (
				<Grow in>
					<Container maxWidth='xl'>
						<Grid
							container
							justify='space-between'
							alignItems='stretch'
							spacing={3}
							className={classes.gridContainer}
						>
							<Grid item xs={12} sm={6} md={8}>
								{loading ? (
									<Loader />
								) : (
									<Grid className={classes.container} container alignItems='stretch' spacing={3}>
										{courses.length === 0 && (
											<h1 style={{ color: '#e8eaf6' }}>You Do not Have any tutorials</h1>
										)}
										{courses.map((subject) => (
											<Grid key={subject._id} item xs={12} sm={12} md={6} lg={4}>
												<Subject subject={subject} />
											</Grid>
										))}
									</Grid>
								)}
							</Grid>

							<Grid item xs={12} sm={6} md={4}>
								{/* <ProgressBoard /> */}
							</Grid>
						</Grid>
					</Container>
				</Grow>
			)}
		</div>
	);
};

export default Instructor;
