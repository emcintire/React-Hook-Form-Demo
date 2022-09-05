import React from 'react';
import { Controller } from 'react-hook-form';
import {
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

function SelectField(props) {
  const { control, errors, field } = props;
  return (
    <>
      <InputLabel error={!!errors[field.name]}>{field.label}</InputLabel>
      <Controller
        control={control}
        name={field.name}
        rules={{ required: field.required }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Select value={value} onChange={onChange} onBlur={onBlur} fullWidth>
            {field.options.map((item) => (
              <MenuItem key={item.value} value={item.value} name={item.label}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}>
      </Controller>
    </>
  );
}

export default SelectField;
