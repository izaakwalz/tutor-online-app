import React, { useEffect, useState } from 'react';
import { Grid, Paper, Select, Button, MenuItem, Typography, InputLabel, FormControl } from '@material-ui/core';
import { toast } from 'react-toastify';
import { styles, createMarkup } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { recordGrade } from '../../actions/progress.actions';
import TotalResults from '../Totalresults/TotalResults';

const TestQuestions = ({ testData, subID, currentQuizStep, setCurrentQuizStep }) => {
	const classes = styles();
	const [selectedAnswers, setSelectedAnswers] = useState([]);
	const [processedAnswers, setProcessedAnswers] = useState([]);

	const dispatch = useDispatch();

	const recordScore = useSelector((state) => state.recordScore);
	const { loading, error, grade } = recordScore;

	useEffect(() => {
		if (error) {
			toast.dark(error);
		}
	}, [dispatch, grade]);

	const handleResult = (e) => {
		e.preventDefault();

		const processedAnswers = selectedAnswers.map(({ answer, question }) => {
			const relatedQuestion = testData.find((test) => test.question === question);
			const ans = relatedQuestion.options.find((ans) => ans.option === answer);
			if (ans.answer === true) {
				return { correctAnswer: answer, isCorrect: true, question };
			}
			return {
				correctAnswer: relatedQuestion.ans,
				wrongAnswer: answer,
				isCorrect: false,
				question,
			};
		});
		setProcessedAnswers(processedAnswers);
		const obtainedScore = processedAnswers.filter(({ isCorrect }) => isCorrect).length;
		const obtanibleScore = processedAnswers.length;
		const score = Math.round((obtainedScore / obtanibleScore) * 100);
		const parseGrade = JSON.stringify({ score: score });
		dispatch(recordGrade(subID, parseGrade));
	};
	const handleAnswerChange = (e, selectedQuestion) => {
		e.preventDefault();
		const { value } = e.target;

		const isExistQuestion =
			selectedAnswers.length && selectedAnswers.find((answer) => answer.question === selectedQuestion);

		if (isExistQuestion && isExistQuestion.answer) {
			const updatedAnswers = selectedAnswers.map((answer) => {
				if (answer.question === selectedQuestion) {
					return { question: selectedQuestion, answer: value };
				}
				return answer;
			});
			setSelectedAnswers(updatedAnswers);
		} else {
			setSelectedAnswers([...selectedAnswers, { question: selectedQuestion, answer: value }]);
		}
	};

	const relatedAnswer = (question, selectedAnswers) => {
		if (selectedAnswers && selectedAnswers.length) {
			const relatedQuestion = selectedAnswers.find((answer) => answer.question === question);
			return (relatedQuestion && relatedQuestion.answer) || '';
		}
		return '';
	};

	return !processedAnswers || !processedAnswers.length ? (
		<div>
			<Typography variant='h1' className={classes.mainTitle}>
				Answer All Questions:
			</Typography>
			<form onSubmit={handleResult}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						{testData.map((test) => (
							<Paper key={test._id} className={classes.paper}>
								<Typography variant='h5' className={classes.question}>
									<span dangerouslySetInnerHTML={createMarkup(test.question)} />
								</Typography>
								<FormControl fullWidth variant='outlined'>
									<InputLabel id='answer-select-label'>Select answer:</InputLabel>
									<Select
										required
										name='answer'
										id='answer-select'
										label='Select answer'
										value={relatedAnswer(test.question, selectedAnswers) || ''}
										labelId='answer-select-label'
										onChange={(e) => handleAnswerChange(e, test.question)}
									>
										{test.options.map((answer) => (
											<MenuItem key={answer._id} value={answer.option}>
												<span dangerouslySetInnerHTML={createMarkup(answer.option)} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Paper>
						))}
						<Button className={classes.submitButton} variant='contained' color='primary' type='submit'>
							Result
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	) : (
		<TotalResults
			classes={classes}
			loading={loading}
			currentQuizStep={currentQuizStep}
			processedAnswers={processedAnswers}
			setCurrentQuizStep={setCurrentQuizStep}
		/>
	);
};

export default TestQuestions;
