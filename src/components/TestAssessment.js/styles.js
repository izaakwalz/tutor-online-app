import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
  paper: {
    padding: '20px',
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '20px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  mainTitle: {
    fontSize: '45px',
    marginBottom: '20px',
  },
  submitButton: {
    marginTop: '20px',
    borderRadius: '999px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  question: {
    fontSize: '24px',
    marginBottom: '10px',
    fontWeight: '500',
    lineHeight: '35px',
  },
  answer: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: '500',
    lineHeight: '25px',
    marginLeft: '10px',
    display: 'flex',
  },
  correctAnswer: {
    color: 'green',
  },
  results: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '150px',
    textAlign: 'center',
    flexDirection: 'column',
  },
}));

export const createMarkup = (text) => {
  return { __html: text };
};
