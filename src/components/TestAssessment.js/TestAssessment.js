import React from 'react';
import { Paper, Button, Typography } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import { styles, createMarkup } from './styles';
import { Link, useParams } from 'react-router-dom';

const TestAssessment = ({ processedAnswers }) => {
  const classes = styles();

  const { slug } = useParams();
  const renderAnswers = (answers) => {
    return answers.map(
      ({ question, isCorrect, correctAnswer, wrongAnswer }) => (
        <Paper key={question} className={classes.paper}>
          <Typography variant='h2' className={classes.question}>
            <span dangerouslySetInnerHTML={createMarkup(question)} />
          </Typography>

          {isCorrect ? (
            <Typography
              variant='h2'
              className={`${classes.answer} ${classes.correctAnswer}`}
            >
              <Check />
              <span
                className={classes.answer}
                dangerouslySetInnerHTML={createMarkup(correctAnswer)}
              />
            </Typography>
          ) : (
            <div>
              <Typography
                variant='h3'
                color='secondary'
                className={classes.answer}
              >
                <Close />
                <span
                  className={classes.answer}
                  dangerouslySetInnerHTML={createMarkup(wrongAnswer)}
                />
              </Typography>
              <Typography
                variant='h3'
                className={`${classes.answer} ${classes.correctAnswer}`}
              >
                <Check />
                <span
                  className={classes.answer}
                  dangerouslySetInnerHTML={createMarkup(correctAnswer)}
                />
              </Typography>
            </div>
          )}
        </Paper>
      )
    );
  };
  return (
    <div>
      <Typography variant='h1' className={classes.mainTitle}>
        Answers review & Corrections
      </Typography>
      {renderAnswers(processedAnswers)}
      <Button
        className={classes.submitButton}
        variant='contained'
        color='primary'
      >
        <Link to={`/home/${slug}`}>Grade</Link>
      </Button>
    </div>
  );
};

export default TestAssessment;
