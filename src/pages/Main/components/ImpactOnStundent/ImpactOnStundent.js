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
    border: `1px solid ${theme.palette.alternate.main}`,
    borderRadius: 100,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 110,
    },
  },
  button: {
    padding: 12,
    width: 220,
  },
}));

const ImpactOnStundent = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='See THE IMPACT TUTOR ONLINE HAS MADE ON STUDENT LEARNING!'
        subtitle={
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <span>
                      <Image
                        src='/images/faces/research-proves-effective.jpg'
                        alt='usage'
                        className={classes.image}
                        lazy={false}
                      />
                      <br />
                      <Typography
                        component='span'
                        variant='inherit'
                        color='textPrimary'
                      >
                        Proven effective
                      </Typography>
                    </span>
                  }
                  subtitle='Research has shown over and over that IXL produces real results.'
                  ctaGroup={[
                    <Button variant='outlined' color='primary' size='large'>
                      See the research
                    </Button>,
                  ]}
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <span>
                      <Image
                        src='/images/faces/valueable-for-instructions.jpg'
                        alt='usage'
                        className={classes.image}
                        lazy={false}
                      />
                      <br />
                      <Typography
                        component='span'
                        variant='inherit'
                        color='textPrimary'
                      >
                        Flexible for any classroom
                      </Typography>
                    </span>
                  }
                  subtitle='Read our case studies to see how IXL drives success in classrooms nationwide.'
                  ctaGroup={[
                    <Button variant='outlined' color='primary' size='large'>
                      Hear the stories
                    </Button>,
                  ]}
                />
              </Grid>
            </Grid>
            <Grid item lg={4} xs={12} sm={6}>
              <Grid container justif='center' alignItems='center'>
                <SectionHeader
                  title={
                    <span>
                      <Image
                        src='/images/faces/teachers-tell-why.jpg'
                        alt='usage'
                        className={classes.image}
                        lazy={false}
                      />
                      <br />
                      <Typography
                        component='span'
                        variant='inherit'
                        color='textPrimary'
                      >
                        Trusted by top teachers
                      </Typography>
                    </span>
                  }
                  subtitle='The Elite 100 share why they turn to IXL to help their students grow.'
                  ctaGroup={[
                    <Button variant='outlined' color='primary' size='large'>
                      Get inspired
                    </Button>,
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        }
        align='center'
      />
    </div>
  );
};

ImpactOnStundent.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default ImpactOnStundent;
