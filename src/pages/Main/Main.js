import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Meta from '../../components/Meta';
import { Section, SectionAlternate } from '../../components/elements';
import {
  Hero,
  SkilsYouNeed,
  DiscoverHow,
  ImpactOnStundent,
  Pricings,
} from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  shape: {
    // backgroundImage: `url('/images/bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    // backgroundColor: 'rgba(0,0,0,0.)',
    backgroundPosition: 'center',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Meta title='TutorOnline | Home'>
      <CssBaseline />
      <div className={classes.root}>
        <Section className={classes.pagePaddingTop}>
          <Hero />
        </Section>
        <Section>
          <SkilsYouNeed />
        </Section>
        <div className={classes.shape}>
          <Section>
            <DiscoverHow />
          </Section>
        </div>

        <SectionAlternate innerNarrowed>
          <ImpactOnStundent />
        </SectionAlternate>

        <Divider />
        <SectionAlternate innerNarrowed>
          <Pricings />
        </SectionAlternate>
        <Divider />
      </div>
    </Meta>
  );
};

export default Main;
