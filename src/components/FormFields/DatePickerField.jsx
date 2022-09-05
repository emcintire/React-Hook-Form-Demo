import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Controller } from 'react-hook-form';

export default function DatePickerField(props) {
  const { errors, field, control } = props;
  const errorMessage = field.errorMessage ?? `${field.label} is required`;
  return (
    <Controller
      control={control}
      name={field.name}
      rules={{ required: field.required }}
      render={({ field: { onChange, onBlur, value } }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            label={field.label}
            minDate={field.minDate ?? "1900-01-01"}
            maxDate={field.maxDate ?? "2200-01-01"}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={!!errors[field.name]}
            invalidDateMessage={!!errors[field.name]}
            helperText={!!errors[field.name] && errorMessage}
            />
        </MuiPickersUtilsProvider>
      )}
      />
  );
}
