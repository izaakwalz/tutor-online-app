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
  IconButton,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama',
//   },
//   {
//     value: 'new-york',
//     label: 'New York',
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco',
//   },
// ];

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

  const [inputFields, setInputFields] = useState({
    question: '',
    options: [
      {
        option: '',
        answer: false,
      },
    ],
    ans: '',
  });

  const handleChange = (index, e) => {
    // console.log(index, e.target.name);
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputFields(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Data', inputFields);
  };

  const Addfields = () => {
    setInputFields([
      ...inputFields,
      {
        question: '',
        //  options: [{ option: '', answer: false }],
        ans: '',
      },
    ]);
  };

  const removeFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
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
                label='First name'
                name='firstName'
                // onChange={handleChange}
                required
                // value={values.firstName}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Last name'
                name='lastName'
                onChange={handleChange}
                required
                // value={values.lastName}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Email Address'
                name='email'
                // onChange={handleChange}
                required
                // value={values.email}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Phone Number'
                name='phone'
                // onChange={handleChange}
                type='number'
                // value={values.phone}
                variant='outlined'
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Country'
                name='country'
                // onChange={handleChange}
                required
                // value={values.country}
                variant='outlined'
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label='Select State'
                name='state'
                // onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={values.state}
                variant='outlined'
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>

          {inputFields.map((inputField, index) => (
            <Grid key={index} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText='Please specify the first name'
                  label='Question'
                  name='question'
                  required
                  variant='outlined'
                  value={inputField.question}
                  onChange={(e) => handleChange(index, e)}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText='Please specify the first name'
                  label='Summary'
                  name='ans'
                  required
                  variant='outlined'
                  value={inputField.ans}
                  onChange={(e) => handleChange(index, e)}
                />
              </Grid>
              <IconButton onClick={() => removeFields(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => Addfields()}>
                <AddIcon />
              </IconButton>
            </Grid>
          ))}
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
