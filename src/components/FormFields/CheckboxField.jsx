import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox, InputLabel } from '@material-ui/core';

export default function CheckboxField(props) {
  const { errors, field, control, saveChanges } = props;
  const onBlur = (event) => {
    event.persist();
    saveChanges();
  }
  return (
    <>
      <InputLabel error={!!errors[field.name]}>
        {field.label}
      </InputLabel>
      <Controller
        control={control}
        name={field.name}
        rules={{ required: field.required }}
        onBlur={onBlur}
        render={({ field: { onChange, value } }) => (
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
