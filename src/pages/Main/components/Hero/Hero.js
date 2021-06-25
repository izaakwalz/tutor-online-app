import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image, SectionHeader } from '../../../../components/elements';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
  icon: {
    fontSize: 60,
    color: theme.palette.primary.main,
  },
  button: {
    padding: 12,
    width: 220,
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify='space-between'
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems='center'
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
                MATHS<i className={classes.icon}>.</i>LEARNING
                <i className={classes.icon}>.</i>DIAGNOSTIC
                <i className={classes.icon}>.</i>
                ANALYTICS
                <br />
                <Typography component='span' variant='inherit' color='primary'>
                  Tutor Online is Personalized Learning
                </Typography>
              </span>
            }
            subtitle='Immersive learning experince, Over 80 billion questions answered. More than 12 million students use TutorOnline'
            ctaGroup={[
              <Button
                variant='contained'
                className={classes.button}
                color='primary'
                size='large'
                component='a'
                href='/auth'
              >
                Become a Member!
              </Button>,
            ]}
            align='left'
            disableGutter
            titleVariant='h3'
          />
        </Grid>
        <Grid
          item
          container
          justify='flex-start'
          alignItems='center'
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src='/images/svg/study.svg'
            alt='Book Reading'
            className={classes.image}
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
