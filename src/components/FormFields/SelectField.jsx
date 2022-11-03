import React from 'react';
import { Controller } from 'react-hook-form';
import {
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

function SelectField(props) {
  const { control, errors, field } = props;
  // const onBlur = (event) => {
  //   if (!errors[field.name]) {
  //     event.persist();
  //     saveChanges();
  //   }
  // }
  return (
    <>
      <InputLabel error={!!errors[field.name]}>{field.label}</InputLabel>
      <Controller
        control={control}
        name={field.name}
        rules={{ required: field.required }}
        render={({ field: { onChange, value } }) => (
          <Select
            value={value}
            onChange={onChange}
            fullWidth>
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
