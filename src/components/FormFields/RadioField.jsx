import React from 'react';
import { Controller } from 'react-hook-form';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@material-ui/core';

function RadioField(props) {
  const { control, errors, field, saveChanges } = props;
  const errorMessage = field.errorMessage ?? `${field.label} is required`;

  const onBlur = (event) => {
    if (!errors[field.name]) {
      event.persist();
      saveChanges();
    }
  }
  return (
    <FormControl error={!!errors[field.name]}>
      <FormLabel>{field.label}</FormLabel>
      <Controller
        control={control}
        name={field.name}
        rules={{ required: field.required, onBlur: saveChanges }}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={Number(value)}
            onChange={onChange}
            name={field.name}
            onBlur={onBlur}>
              {field.options.map((item) => (
                <FormControlLabel control={<Radio />} key={item.value} value={item.value} label={item.label} />
              ))}
          </RadioGroup>
        )}
      ></Controller>
      <FormHelperText>{!!errors[field.name] && errorMessage}</FormHelperText>
    </FormControl>
  );
}


export default RadioField;
