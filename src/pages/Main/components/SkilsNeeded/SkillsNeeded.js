import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { Image, SectionHeader } from '../../../../components/elements';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    height: 140,
    width: 140,
    padding: 10,
    borderRadius: 100,
    border: '1px solid #BE9CFF',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 110,
    },
  },
  button: {
    padding: 12,
    width: 220,
  },
}));

const SkillsNeeded = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        topLabel="Planning a lesson or prepping for exam? We've custom-built tutor online sliks to reinforce each  topic wuthin your:"
        title='THE EXACT SKILLS YOU NEED'
        subtitle={
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <span>
                      <Image
                        src='/images/svg/standard-icon.svg'
                        alt='usage'
                        className={classes.image}
                        lazy={false}
                      />
                      <br />
                      <Typography
                        component='span'
                        variant='inherit'
                        style={{ color: '#FFA748' }}
                      >
                        State standards
                      </Typography>
                    </span>
                  }
                  subtitle="Precise skills built for your state's standards"
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <span>
                      <Image
                        src='/images/svg/textbook-icon.svg'
                        alt='usage'
                        className={classes.image}
                        lazy={false}
                      />
                      <br />
                      <Typography
                        component='span'
                        variant='inherit'
                        style={{ color: '#8BDD4A' }}
                      >
                        Textbooks
                      </Typography>
                    </span>
                  }
                  subtitle='See skills that match every chapter of 40+ popular textbooks'
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <span>
                      <Image
                        src='/images/svg/test-prep-icon.svg'
                        alt='usage'
                        className={classes.image}
                        lazy={false}
                      />
                      <br />
                      <Typography
                        component='span'
                        variant='inherit'
                        style={{ color: '#BE9CFF' }}
                      >
                        Assessments
                      </Typography>
                    </span>
                  }
                  subtitle='Use Tutor-Online for the NWEA MAP, ACT, SAT, and more'
                />
              </Grid>
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
            Find your skill plan!
          </Button>,
        ]}
        align='center'
      />
    </div>
  );
};

SkillsNeeded.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default SkillsNeeded;
