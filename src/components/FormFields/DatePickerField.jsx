import React from 'react';
import { TextField } from '@material-ui/core';

export default function DatePickerField(props) {
  const { errors, field, register, saveChanges } = props;
  const errorMessage = field.errorMessage ?? `${field.label} is required`;
  return (
    <TextField
      label={field.label}
      name={field.name}
      type="date"
      error={!!errors[field.name]}
      InputLabelProps={{
        shrink: true,
      }}
      helperText={!!errors[field.name] && errorMessage}
      {...register(field.name, {
        required: field.required,
        onBlur: () => !errors[field.name] && saveChanges(),
      })}
    />
  );
}

// eslint-disable-next-line
{/* <Controller
  control={control}
  name={field.name}
  rules={{ required: field.required }}
  render={({ field: { onChange, value } }) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label={field.label}
        minDate={field.minDate ?? "1900-01-01"}
        maxDate={field.maxDate ?? "2200-01-01"}
        onChange={onChange}
        onBlur={(e) => {
          e.persist();
          !errors[field.name] && saveChanges();
        }}
        value={value}
        error={!!errors[field.name]}
        invalidDateMessage={!!errors[field.name]}
        helperText={!!errors[field.name] && errorMessage}
        />
    </MuiPickersUtilsProvider>
  )}
  /> */}
