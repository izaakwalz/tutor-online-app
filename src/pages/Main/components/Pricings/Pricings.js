import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CheckCircleOutline, CheckCircle } from '@material-ui/icons';

import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import {
  Icon,
  LearnMoreLink,
  SectionHeader,
  CardPricingStandard,
} from '../../../../components/elements';

// import { Icon, LearnMoreLink } from 'components/atoms';
// import { SectionHeader } from 'components/molecules';
// import { CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title='Select your Package'
        subtitle='A pay-once license, just for you.'
        ctaGroup={[
          <LearnMoreLink title="See what's included" href='#' variant='h6' />,
        ]}
        data-aos='fade-up'
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} lg={6} data-aos='fade-up'>
          <CardPricingStandard
            variant='outlined'
            withShadow
            liftUp
            title='Standard Gold License'
            subtitle='A pay-once license, just for you'
            priceComponent={
              <div>
                <Typography
                  variant='h3'
                  component='span'
                  className={classes.fontWeight900}
                >
                  $100
                </Typography>
              </div>
            }
            features={[
              'Life time access to all courses',
              'Personal online classess',
              'Life time free support included',
              'Course download allowed',
              'Progress Recording',
              'Certificate acces',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass={<CheckCircle />}
                fontIconColor={theme.palette.warning.light}
              />
            }
            cta={
              <Button
                color='primary'
                variant='contained'
                fullWidth
                size='large'
              >
                Subscribe now
              </Button>
            }
            disclaimer='Fully featured 30-day free trial'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} data-aos='fade-up'>
          <CardPricingStandard
            variant='outlined'
            title='Standard License'
            liftUp
            subtitle='A pay-once license, just for you'
            priceComponent={
              <div>
                <Typography
                  variant='h3'
                  component='span'
                  className={classes.fontWeight900}
                >
                  $59
                </Typography>
              </div>
            }
            features={[
              'Limtited access to all courses',
              'One on One Online class 3 x a week for',
              'Flexible, simple license',
              'Access to all quiz and test',
              '1 year free support included',
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass={<CheckCircleOutline />}
                fontIconColor={theme.palette.primary.main}
              />
            }
            cta={
              <Button color='primary' variant='outlined' fullWidth size='large'>
                Subscribe now
              </Button>
            }
            disclaimer='Fully featured 2-weeks free trial'
          />
        </Grid>
      </Grid>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Pricings;
