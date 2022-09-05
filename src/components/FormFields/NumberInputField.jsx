import React from 'react';
import { TextField } from '@material-ui/core';

export default function NumberInputField(props) {
  const { errors, field, register } = props;
  const errorMessage = field.errorMessage ?? `${field.label} is required`;
  return (
    <TextField
      label={field.label}
      name={field.name}
      type='number'
      error={!!errors[field.name]}
      helperText={!!errors[field.name] && errorMessage}
      fullWidth
      {...register(field.name, {
        required: field.required,
        min: field.minValue ?? null,
        max: field.maxValue ?? null,
        pattern: field.allowDecimals ? /^\d*\.?\d*$/ : /^[0-9]*$/,
      })}
    />
  );
}
