import React, { useState, useEffect } from 'react';
import { Section } from '../../components/elements';
import { useDispatch, useSelector } from 'react-redux';
import {
	Introduction,
	PreTestQuestions,
	PreTestResult,
	TOPQ,
} from './components';
import { toast } from 'react-toastify';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { TestStatecontext } from './components/helpers/Context';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%',
	},
}));

const PreTest = () => {
	const classes = useStyles();

	const [testState, setTeststate] = useState('introduction');

	const [score, setScore] = useState(0);

	const dispatch = useDispatch();

	const changeLevel = useSelector((state) => state.recordScore);
	const { loading, error, upgrade } = changeLevel;

	useEffect(() => {
		if (error) {
			toast.dark(error);
		}
	}, [dispatch, upgrade]);

	return (
		<div className={classes.root}>
			<Section>
				<TestStatecontext.Provider
					value={{
						testState,
						setTeststate,
						score,
						setScore,
					}}
				>
					{testState === 'introduction' && <Introduction />}
					{testState === 'pre_test' && <PreTestQuestions />}
					{testState === 'info' && <TOPQ upgrade={dispatch} />}
					{loading ? (
						<CircularProgress size='4em' />
					) : (
						testState === 'results' && <PreTestResult />
					)}
					{/* {testState === 'results' && <PreTestResult />} */}
				</TestStatecontext.Provider>
			</Section>
		</div>
	);
};

export default PreTest;
