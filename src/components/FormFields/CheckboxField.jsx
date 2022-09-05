import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox, InputLabel } from '@material-ui/core';

export default function CheckboxField(props) {
  const { errors, field, control } = props;
  return (
    <>
      <InputLabel error={!!errors[field.name]}>{field.label}</InputLabel>
      <Controller
        control={control}
        name={field.name}
        rules={{ required: field.required }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Checkbox
            onChange={onChange}
            onBlur={onBlur}
            checked={value}
            />
        )}>
      </Controller>
    </>
  );
}
