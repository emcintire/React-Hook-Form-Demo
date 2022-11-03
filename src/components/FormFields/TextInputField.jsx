import React from 'react';
import { TextField } from '@material-ui/core';

export default function TextInputField(props) {
  const { errors, field, register, type, saveChanges } = props;
  const errorMessage = field.errorMessage ?? `${field.label} is required`;
  const phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  // eslint-disable-next-line
  const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return (
    <TextField
      label={field.label}
      name={field.name}
      type="text"
      error={!!errors[field.name]}
      helperText={!!errors[field.name] && errorMessage}
      {...register(field.name, {
        required: field.required,
        pattern: type ? type === 'email' ? emailPattern : phonePattern : null,
        onBlur: () => !errors[field.name] && saveChanges(),
      })}
    />
  );
}
