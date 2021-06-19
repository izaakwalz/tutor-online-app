import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Card,
  CardMedia,
  Grid,
  Button,
} from '@material-ui/core/';
import { toast } from 'material-react-toastify';
import ReactPlayer from 'react-player/lazy';
import useStyles from './styles';
import moment from 'moment';
import Meta from '../../components/Meta';
import { subjectInfo } from '../../actions/subject-actions';
import { GetTestScore } from '../../actions/progress.actions';
import TestQuestions from '../../components/TestQustions/TestQuestions';
import StaticProgress from '../../components/StaticProgress';

const Subject = () => {
  const classes = useStyles();
  const [currentQuizStep, setCurrentQuizStep] = useState('start');

  const { slug } = useParams(); // parms ({ match }) = props match.params.slug

  const dispatch = useDispatch();

  const subjectDetails = useSelector((state) => state.subjectDetails);
  const { loading, error, subject } = subjectDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const user = JSON.parse(localStorage.getItem('userInfo'));

  const scoreDetails = useSelector((state) => state.scoreDetails);
  const { loading: isLoading, error: isError, score } = scoreDetails;

  // if (subject.test) {
  //   setCurrentQuizStep('results');
  // } else {
  //   toast.dark('No Quiz Set For This Course');
  // }

  useEffect(() => {
    if (!subject.slug || subject.slug !== slug) {
      dispatch(subjectInfo(slug));
      // setCurrentQuizStep('results');
    }

    if (subject._id) {
      dispatch(GetTestScore(subject._id));
    }
  }, [dispatch, slug, subject]);

  if (loading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size='7em' />
      </Paper>
    );
  }

  return (
    <div>
      {subject.meta && (
        <Meta
          title={subject.meta.meta_title}
          description={subject.meta.meta_description}
          keywords={subject.meta.meta_keywords}
        />
      )}
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        {error && toast.error(error)}
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.cardMax}>
              <CardMedia
                className={classes.cardMedia}
                title={subject.name}
                aspectRatio='wide'
              >
                <ReactPlayer
                  url={subject.link}
                  controls={true}
                  className={classes.reactPlayer}
                  width='100%'
                  height='100%'
                />
              </CardMedia>
              {/* <CardActions className={classes.cardActions}> */}
              {/* <Button
                  className={classes.submitButton}
                  variant='contained'
                  color='primary'
                  type='submit'
                >
                  Here Are some Excirses to pratice what you have Learn't
                </Button> */}
              {/* </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div>
              <div className={classes.card}>
                <div className={classes.section}>
                  <Typography
                    variant='h3'
                    component='h2'
                    style={{ textTransform: 'capitalize' }}
                  >
                    {subject.name}
                  </Typography>
                  {/* <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
                  <Typography gutterBottom variant='body1' component='p'>
                    {subject.summary}
                  </Typography>
                  <Typography variant='h6'>Created by: admin</Typography>
                  <Typography variant='body1'>
                    {moment(subject.createdAt).fromNow()}
                  </Typography>
                  <Divider style={{ margin: '20px 0' }} />
                  {user && score ? (
                    <div>
                      {isError && toast.error(isError)}
                      {isLoading ? (
                        <CircularProgress size='4em' />
                      ) : (
                        <div>
                          <Typography variant='body1'>
                            <strong>Test Grade: {score.isPass} </strong> <br />
                            <Divider style={{ margin: '20px 0' }} />
                            Test Taken:{' '}
                            {moment(score.isTaken).format(
                              'MMMM Do YYYY - h:mm a'
                            )}
                          </Typography>
                          <Divider style={{ margin: '20px 0' }} />
                          <Grid container spacing={3}>
                            <Grid item xs={6} sm={6} md={6}>
                              <Typography variant='body1'>
                                <strong>Test Progress -</strong>
                              </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                              <StaticProgress progress={score.score} />
                            </Grid>
                          </Grid>
                          <Divider style={{ margin: '20px 0' }} />
                        </div>
                      )}
                    </div>
                  ) : isError === 'Grade not found' ? (
                    <Typography variant='body1'>
                      <strong>You have not taken a test for this course</strong>
                    </Typography>
                  ) : (
                    <Typography variant='body1'>
                      <strong>Please Login to see Grade!</strong>
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </Grid>

          {/* {!!recommendedPosts.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant="h5">You might also like:</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                  <Typography gutterBottom variant="h6">{title}</Typography>
                  <Typography gutterBottom variant="subtitle2">{name}</Typography>
                  <Typography gutterBottom variant="subtitle2">{message}</Typography>
                  <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              ))}
            </div>
          </div>
        )} */}
        </Grid>
        {currentQuizStep === 'start' ? (
          <div className={classes.card}>
            <div className={classes.section}>
              <Typography variant='h3' component='h2'>
                A Series of Excircise Have Been Created to Test Your Konwledge,{' '}
                Click the button bellow to start
              </Typography>
              {/* <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
              <Button
                className={classes.submitButton}
                onClick={() => {
                  user
                    ? setCurrentQuizStep('results')
                    : (document.location.href = '/auth');
                }}
                variant='contained'
                color='primary'
                type='submit'
              >
                {!score && isError === 'Grade not found'
                  ? 'CLICK Here TO Start Test'
                  : !user
                  ? 'Pleace Login'
                  : 'ReTake The test?'}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {subject.test && (
              <TestQuestions
                testData={subject.test}
                subID={subject._id}
                currentQuizStep={currentQuizStep}
                setCurrentQuizStep={setCurrentQuizStep}
              />
            )}
          </div>
        )}

        {/* {subject.test && currentQuizStep === 'results'  (
          <TestQuestions
            testData={subject.test}
            subID={subject._id}
            currentQuizStep={currentQuizStep}
            setCurrentQuizStep={setCurrentQuizStep}
          />
        )} */}
      </Paper>
    </div>
  );
};

export default Subject;
