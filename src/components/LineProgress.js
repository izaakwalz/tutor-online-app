import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const LineProgress = ({ score }) => {
  const grade =
    score >= 90
      ? '#00e676'
      : score >= 75
      ? '#0091ea'
      : score >= 50
      ? '#ffeb3b'
      : score >= 40
      ? '#ff7043'
      : '#d32f2f';
  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 6,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: grade,
    },
  }))(LinearProgress);

  return <BorderLinearProgress variant='determinate' value={score} />;
};

export default LineProgress;
