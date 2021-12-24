import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from '@material-ui/core';
import TestForm from './TestForm';

const useStyles = makeStyles(() => ({
  root: {},
}));

const EditSubject = ({ className, ...rest }) => {
  const classes = useStyles();
  // const [values, setValues] = useState({
  //   firstName: 'Katarina',
  //   lastName: 'Smith',
  //   email: 'demo@devias.io',
  //   phone: '',
  //   state: 'Alabama',
  //   country: 'USA',
  // });

  // const [name, setName] = useState('');
  // const [link, setLink] = useState('');
  // const [summary, setSummary] = useState('');
  const [options, setOptions] = useState([{ option: '', answer: false }]);
  const [test, setTest] = useState([{ question: '', ans: '' }]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(test);
  };

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={onSubmit}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader subheader='The information can be edited' title='Profile' />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText='Please specify the first name'
                label='Subject Name'
                name='name'
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant='outlined'
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label='Video Source (url)'
                name='lastName'
                // onChange={handleChange}
                required
                // value={values.lastName}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Summary'
                name='summary'
                // onChange={handleChange}
                required
                // value={values.email}
                variant='outlined'
              />
            </Grid>
          </Grid>
          <TestForm
            test={test}
            setTest={setTest}
            options={options}
            setOptions={setOptions}
          />
        </CardContent>
        <Divider />
        <Box display='flex' justifyContent='flex-end' p={2}>
          <Button color='primary' variant='contained' onClick={onSubmit}>
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

EditSubject.propTypes = {
  className: PropTypes.string,
};

export default EditSubject;
