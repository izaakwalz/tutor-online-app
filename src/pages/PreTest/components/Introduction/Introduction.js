import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from '../../../../components/elements';
import { TestStatecontext } from '../helpers/Context.js';

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
    marginTop: theme.spacing(15),
    padding: 12,
    width: 220,
  },
}));

const Introduction = (props) => {
  const classes = useStyles();

  const { setTeststate } = useContext(TestStatecontext);

  return (
    <div className={classes.root}>
      <SectionHeader
        title='TO HELP US PERSONALIZE YOUR TRAINING PLAN, PLEASE TAKE THIS 1 - 2 MINUTE TEST'
        ctaGroup={[
          <Button
            variant='contained'
            className={classes.button}
            color='primary'
            size='large'
            onClick={() => {
              setTeststate('pre_test');
            }}
          >
            GET STARTED
          </Button>,
        ]}
        align='center'
      />
    </div>
  );
};

export default Introduction;
