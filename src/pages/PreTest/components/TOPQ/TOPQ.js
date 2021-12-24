import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader } from '../../../../components/elements';
import { TestStatecontext } from '../helpers/Context.js';
import { Questions } from '../helpers/Questions';
import { PreTestProgress } from '../../../../components/PreTestProgress';
import { ChangeLevel } from '../../../../actions/user.actions';

const useStyles = makeStyles((theme) => ({
	root: {},
	button: {
		marginTop: theme.spacing(15),
		padding: 12,
		width: 220,
	},
}));

const TOPQ = ({ upgrade }) => {
	const classes = useStyles();

	const { score, setTeststate } = useContext(TestStatecontext);

	const grade = Math.round((score / Questions.length) * 100);

	const level =
		grade >= 100
			? 'master'
			: grade >= 90
			? 'expert'
			: grade >= 75
			? 'advanced'
			: grade >= 50
			? 'intermediate'
			: 'novice';

	return (
		<div className={classes.root}>
			<SectionHeader
				title={
					<span>
						<Typography component='h2' variant='h2' color='secondary'>
							INTRODUCING TOPQ
						</Typography>
					</span>
				}
				topLabel='TUTORONLINE PROFICIENCY QUOTIENT'
				subtitle={
					<div>
						<SectionHeader
							title={
								<span>
									<PreTestProgress />
									{/* <LineProgress score={99} /> */}
									<br />
									<Typography component='h3' variant='h3' color='secondary'>
										You will be given an TOPQh1 ranging from 0-5000 that
										represents your proficiency in each level
									</Typography>
								</span>
							}
						/>
					</div>
				}
				ctaGroup={[
					<Button
						variant='contained'
						className={classes.button}
						color='primary'
						size='large'
						onClick={() => {
							const parseGrade = JSON.stringify({ level: level });
							upgrade(ChangeLevel(parseGrade));
							setTeststate('results');
						}}
					>
						GET Results
					</Button>,
				]}
				align='center'
			/>
		</div>
	);
};

export default TOPQ;
