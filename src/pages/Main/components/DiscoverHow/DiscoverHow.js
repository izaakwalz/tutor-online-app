import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import {
  Image,
  SectionHeader,
  LearnMoreLink,
} from '../../../../components/elements';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    height: 130,
    width: 130,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 110,
    },
  },
  button: {
    padding: 12,
    width: 220,
    marginTop: 20,
  },
  shape: {
    padding: 15,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    maxWidth: 400,
    maxHeight: '100%',
  },
}));

const DiscoverHow = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        topLabel='Tutor-Online gives teachers everything they need to personalize instruction'
        title='Discover how TutorOnline supports success for every learner'
        subtitle={
          <Grid container spacing={isMd ? 2 : 2}>
            <Grid item lg={6} md={6} xs={12} sm={6}>
              <div className={classes.shape}>
                <Grid justif='center' alignItems='center'>
                  <SectionHeader
                    title={
                      <span>
                        <Image
                          src='/images/svg/curriculum-icon.svg'
                          alt='usage'
                          className={classes.image}
                          lazy={false}
                        />
                        <br />
                        <Typography
                          component='span'
                          variant='inherit'
                          style={{ color: '#00AEEF' }}
                        >
                          Comprehensive Curriculum
                        </Typography>
                      </span>
                    }
                    subtitle='Find content to support nearly any lesson, with more than 8,500 skills covering five subjects. '
                    ctaGroup={[
                      <LearnMoreLink
                        title='Browse skills'
                        href='#'
                        variant='span'
                        color='#00AEEF'
                      />,
                    ]}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
              <div className={classes.shape}>
                <Grid container justif='center' alignItems='center'>
                  <SectionHeader
                    title={
                      <span>
                        <Image
                          src='/images/svg/diagnostic-icon.svg'
                          alt='usage'
                          className={classes.image}
                          lazy={false}
                        />
                        <br />
                        <Typography
                          component='span'
                          variant='inherit'
                          style={{ color: '#5EA300' }}
                          color='#5EA300'
                        >
                          Real-Time Diagnostic
                        </Typography>
                      </span>
                    }
                    subtitle='Pinpoint what your students know and exactly what to do next to help them improve. '
                    ctaGroup={[
                      <LearnMoreLink
                        title='Learn how it works'
                        href='#'
                        variant='span'
                        color='#5EA300'
                      />,
                    ]}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <div className={classes.shape}>
                  <SectionHeader
                    title={
                      <span>
                        <Image
                          src='/images/svg/personalized-icon.svg'
                          alt='usage'
                          className={classes.image}
                          lazy={false}
                        />
                        <br />
                        <Typography
                          component='span'
                          variant='inherit'
                          style={{ color: '#7A67D7' }}
                        >
                          Personalized Guidance
                        </Typography>
                      </span>
                    }
                    subtitle='See skill recommendations that help each student fill knowledge gaps and grow from where they are. '
                    ctaGroup={[
                      <LearnMoreLink
                        title='Explore recommendations'
                        href='#'
                        variant='span'
                        color='#7A67D7'
                      />,
                    ]}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
              <div className={classes.shape}>
                <Grid container justif='center' alignItems='center'>
                  <SectionHeader
                    title={
                      <span>
                        <Image
                          src='/images/svg/analytics-icon.svg'
                          alt='usage'
                          className={classes.image}
                          lazy={false}
                        />
                        <br />
                        <Typography
                          component='span'
                          variant='inherit'
                          style={{ color: '#F5A623' }}
                        >
                          Actionable Analytics
                        </Typography>
                      </span>
                    }
                    subtitle='Get real-time insights that help you make effective instructional decisions every day. '
                    ctaGroup={[
                      <LearnMoreLink
                        title='View insights'
                        href='#'
                        variant='span'
                        color='#F5A623'
                      />,
                    ]}
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
        }
        ctaGroup={[
          <Button
            variant='contained'
            className={classes.button}
            color='primary'
            size='large'
            component='a'
            href='/auth'
          >
            Join now
          </Button>,
        ]}
        align='center'
      />
    </div>
  );
};

DiscoverHow.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default DiscoverHow;
