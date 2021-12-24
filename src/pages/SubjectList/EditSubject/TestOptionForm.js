import React from 'react';
import {
  Grid,
  TextField,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const TestOptionForm = ({ options, setOptions }) => {
  const handleChange = (index, e) => {
    const values = [...options];
    values[index][e.target.name] = e.target.value;
    setOptions(values);
  };

  const Addfields = () => {
    setOptions([...options, { option: '', answer: false }]);
  };

  const removeFields = (index) => {
    const values = [...options];
    values.splice(index, 1);
    setOptions(values);
  };

  return (
    <div>
      {options.map((inputField, index) => (
        <Grid key={index} container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              helperText='Please specify the first name'
              label='Option'
              name='option'
              required
              variant='outlined'
              value={inputField.option}
              onChange={(e) => handleChange(index, e)}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>answer</FormLabel>
              <RadioGroup
                row
                aria-label='correct_answer'
                name='answer'
                value={inputField.answer}
                onChange={(e) => handleChange(index, e)}
              >
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label='Wrong Answer'
                />
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label='Correct Answer'
                />
              </RadioGroup>
            </FormControl>
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

export default TestOptionForm;
