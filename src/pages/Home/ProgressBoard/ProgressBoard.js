import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  CircularProgress,
  ListItemText,
  makeStyles,
  Typography,
  Avatar,
  ListItemSecondaryAction,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/Visibility';
import { listGrade } from '../../../actions/progress.actions';
import LineProgress from '../../../components/LineProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  purple: {
    textTransform: 'uppercase',
    color: theme.palette.type,
    backgroundColor: theme.palette.warning.dark,
  },
}));

const ProgressBoard = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const userGrade = useSelector((state) => state.userGrade);
  const { loading, grades } = userGrade;

  const user = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    dispatch(listGrade);
  }, [dispatch]);

  return (
    <Card className={classes.root}>
      <CardHeader
        subheader={`${grades ? 'total ' + grades.length : ''}`}
        title='Grades'
      />
      <Divider />
      {loading ? (
        <CircularProgress size='4rem' />
      ) : (
        <List>
          {user && grades ? (
            grades.map((grade, i) => (
              <ListItem divider={i < grades.length - 1} key={grade._id}>
                <ListItemAvatar>
                  <Avatar className={classes.purple} alt={user.name}>
                    {user.name.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={<LineProgress score={grade.score} />}
                  secondary={`taken ${moment(grade.isTaken).fromNow()}`}
                />
                <Typography variant='h3' align='right'>
                  <strong>{grade.isPass}</strong>
                </Typography>
                <ListItemSecondaryAction>
                  <IconButton edge='end' size='small'>
                    <MoreVertIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <Typography variant='body1'>
              <strong>Please Login to see Grade!</strong>
            </Typography>
          )}
        </List>
      )}

      <Divider />
    </Card>
  );
};

export default ProgressBoard;
