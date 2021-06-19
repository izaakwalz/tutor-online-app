import React, { useEffect } from 'react';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import TestAssessment from '../TestAssessment.js/TestAssessment';

const TotalResults = ({
  classes,
  loading,
  currentQuizStep,
  processedAnswers,
  setCurrentQuizStep,
}) => {
  const obtainedScore = processedAnswers.filter(
    ({ isCorrect }) => isCorrect
  ).length;
  const obtanibleScore = processedAnswers.length;

  useEffect(() => {
    window.scrollTo(0, '20px');
  }, []);

  return currentQuizStep === 'results' ? (
    <div className={classes.results}>
      <Typography variant='h1' className={classes.mainTitle}>
        RESULT
      </Typography>
      {loading ? (
        <CircularProgress size='4em' />
      ) : (
        <Typography variant='h4'>
          {obtainedScore > 0 ? obtainedScore : 0} out of {obtanibleScore}
          {/* {processedAnswers.length} */}
        </Typography>
      )}
      <Button
        onClick={() => {
          setCurrentQuizStep('review');
        }}
        className={classes.submitButton}
        variant='contained'
        color='primary'
      >
        Review
      </Button>{' '}
    </div>
  ) : (
    <TestAssessment processedAnswers={processedAnswers} />
    // <div>
    //   <h1>Nothing to show here</h1>
    // </div>
  );
};

export default TotalResults;
