import React from 'react';
import { TextField } from '@material-ui/core';

export default function TextInputField(props) {
  const { errors, field, register } = props;
  const errorMessage = field.errorMessage ?? `${field.label} is required`;
  return (
    <TextField
      label={field.label}
      name={field.name}
      type="text"
      error={!!errors[field.name]}
      helperText={!!errors[field.name] && errorMessage}
      fullWidth
      {...register(field.name, { required: field.required })}
      />
  );
}
