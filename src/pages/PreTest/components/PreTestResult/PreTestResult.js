import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader } from '../../../../components/elements';
import { TestStatecontext } from '../helpers/Context.js';
import { Questions } from '../helpers/Questions';
import { ResultProgress } from '../../../../components/PreTestProgress';

const useStyles = makeStyles((theme) => ({
	root: {},
	button: {
		marginTop: theme.spacing(15),
		padding: 12,
		width: 300,
	},
}));

const PreTestResult = () => {
	const classes = useStyles();

	const { score } = useContext(TestStatecontext);

	const grade = Math.round((score / Questions.length) * 100);

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
				subtitle={
					<div>
						<SectionHeader
							title={
								<span>
									<ResultProgress score={grade} />
									<br />
									<Typography component='h3' variant='h3' color='secondary'>
										{score} / {Questions.length}
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
						component='a'
						href='/app'
					>
						finsh setting up account
					</Button>,
				]}
				align='center'
			/>
		</div>
	);
};

export default PreTestResult;
