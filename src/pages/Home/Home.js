import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listSubjects, subjectRelated } from '../../actions/subject.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';
import Subject from './Subject/Subject';
import useStyles from './styles';
import Loader from '../../components/Loader';
import Meta from '../../components/Meta';
import ProgressBoard from './ProgressBoard/ProgressBoard';
import PreTest from '../PreTest';

const Home = () => {
	const classes = useStyles();

	const history = useNavigate();

	const dispatch = useDispatch();

	// const userLogin = useSelector((state) => state.userLogin);
	// const { userInfo } = userLogin;

	const userInfo = JSON.parse(localStorage.getItem('userInfo'));

	const subjectList = useSelector((state) => state.subjectList);
	const { loading, subjects } = subjectList;

	// if (subjects.length == 0 && !loading) return 'No Subjects!';

	useEffect(() => {
		if (!userInfo) {
			history(`/auth`);
		} else {
			userInfo.role === 'tutor' ? dispatch(listSubjects) : dispatch(subjectRelated);
		}
	}, [dispatch]);

	return (
		<div>
			<Meta />
			{userInfo && userInfo.role === 'user' && userInfo.level === 'none' ? (
				<PreTest />
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
							<Grid item xs={12} sm={6} md={9}>
								{loading ? (
									<Loader />
								) : (
									<Grid className={classes.container} container alignItems='stretch' spacing={3}>
										{subjects.length === 0 && (
											<h1 style={{ color: '#e8eaf6' }}>
												Sorry There Is No Course Avaialable for {userInfo.level.toUpperCase()}{' '}
												Level Now.
											</h1>
										)}
										{subjects.map((subject) => (
											<Grid key={subject._id} item xs={12} sm={12} md={6} lg={4}>
												<Subject subject={subject} />
											</Grid>
										))}
									</Grid>
								)}
							</Grid>

							<Grid item xs={12} sm={6} md={3}>
								<ProgressBoard />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			)}
		</div>
	);
};

export default Home;
