import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Button, Paper, Grid } from '@material-ui/core';
import { SectionHeader } from '../../../../components/elements';
import { TestStatecontext } from '../helpers/Context.js';
import { Questions } from '../helpers/Questions';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginTop: theme.spacing(15),
    padding: 12,
    width: 220,
  },
  optionBtn: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(5),
    padding: 10,
    width: '100%',
    borderRadius: '50px',
  },
  paper: {
    padding: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '20px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  mainTitle: {
    fontSize: '35px',
    marginBottom: '20px',
  },
}));

const PreTestQuestions = () => {
  const classes = useStyles();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { setTeststate, score, setScore } = useContext(TestStatecontext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setTeststate('info');
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <SectionHeader
          title={
            <span className={classes.mainTitle}>
              {Questions[currentQuestion].prompt}
            </span>
          }
          subtitle={
            <Grid container spacing={isMd ? 1 : 2}>
              <Grid item lg={3} md={3} xs={12} sm={12}>
                <Button
                  variant='outlined'
                  className={classes.button}
                  color='primary'
                  size='medium'
                  onClick={() => {
                    chooseOption('optionA');
                  }}
                >
                  {Questions[currentQuestion].optionA}
                </Button>
              </Grid>
              <Grid item lg={3} md={3} xs={12} sm={12}>
                <Button
                  variant='outlined'
                  className={classes.button}
                  color='primary'
                  size='medium'
                  onClick={() => {
                    chooseOption('optionB');
                  }}
                >
                  {Questions[currentQuestion].optionB}
                </Button>
              </Grid>
              <Grid item lg={3} md={3} xs={12} sm={12}>
                <Button
                  variant='outlined'
                  className={classes.button}
                  color='primary'
                  size='medium'
                  onClick={() => {
                    chooseOption('optionC');
                  }}
                >
                  {Questions[currentQuestion].optionC}
                </Button>
              </Grid>
              <Grid item lg={3} md={3} xs={12} sm={12}>
                <Button
                  variant='outlined'
                  className={classes.button}
                  color='primary'
                  size='medium'
                  onClick={() => {
                    chooseOption('optionD');
                  }}
                >
                  {Questions[currentQuestion].optionD}
                </Button>
              </Grid>
            </Grid>
          }
          ctaGroup={[
            <div>
              {currentQuestion === Questions.length - 1 ? (
                <Button
                  variant='contained'
                  className={classes.button}
                  color='primary'
                  size='large'
                  onClick={finishQuiz}
                >
                  Finish Quiz
                </Button>
              ) : (
                <Button
                  variant='contained'
                  className={classes.button}
                  color='primary'
                  size='small'
                  onClick={nextQuestion}
                >
                  Next Question
                </Button>
              )}
            </div>,
          ]}
          align='center'
        />
      </Paper>
    </div>
  );
};

export default PreTestQuestions;
