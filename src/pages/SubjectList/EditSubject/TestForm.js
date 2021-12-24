import React from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import TestOptionForm from './TestOptionForm';

const TestForm = ({ test, setTest, options, setOptions }) => {
  const handleChange = (index, e) => {
    const values = [...test];
    values[index][e.target.name] = e.target.value;
    setTest(values);
  };

  const Addfields = () => {
    setTest([...test, { question: '', ans: '' }]);
  };

  const removeFields = (index) => {
    const values = [...test];
    values.splice(index, 1);
    setTest(values);
  };

  return (
    <div>
      {test.map((inputField, index) => (
        <Grid key={index} container spacing={3}>
          <Grid item md={12} xs={12}>
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

          <TestOptionForm options={options} setOptions={setOptions} />
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              helperText='Please specify the first name'
              label='Answer Description'
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
    </div>
  );
};

export default TestForm;
