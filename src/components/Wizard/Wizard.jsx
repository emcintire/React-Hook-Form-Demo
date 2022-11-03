import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { useForm } from 'react-hook-form';
import { CheckboxField, TextInputField, SelectField, DatePickerField, NumberInputField } from '../FormFields';
import RadioField from '../FormFields/RadioField';
import useStyles from "./styles";

// Field Model
// name:          string
// label:         string
// required:      boolean     default = false
// errorMessage:  string      default = '[name] is required'
// fieldType:     string      ['text', 'phone', 'number', 'email', 'dropdown', 'date', 'checkbox', 'radio']
// options:       array       [{ label, value }, { label, value }] | for select and radio fields only
// minValue:      number      for number fields only
// maxValue:      number      for number fields only
// allowDecimals: boolean     for number fields only

export default function Wizard(props) {
  const classes = useStyles();
  const { data, onSubmit, wizardModel } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === wizardModel.pages.length - 1;

  const saveChanges = () => {
    onSubmit(getValues());
  };

  const { formState: { errors }, register, handleSubmit, control, getValues } = useForm({
    mode: 'all',
    defaultValues: data,
    onBlur: saveChanges,
  });

  const submitForm = (values) => {
    if (isLastStep) {
      onSubmit(values);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const getFieldType = (field) => {
    switch(field.fieldType) {
      case 'text':
        return <TextInputField errors={errors} register={register} field={field} saveChanges={saveChanges} />;
      case 'phone':
        return <TextInputField errors={errors} register={register} field={field} type="phone" saveChanges={saveChanges} />;
      case 'email':
        return <TextInputField errors={errors} register={register} field={field} type="email" saveChanges={saveChanges} />;
      case 'number':
        return <NumberInputField errors={errors} register={register} field={field} saveChanges={saveChanges} />;
      case 'date':
        return <DatePickerField errors={errors} field={field} register={register} saveChanges={saveChanges} />;
      case 'radio':
        return <RadioField errors={errors} field={field} control={control} saveChanges={saveChanges} />;
      case 'dropdown':
        return <SelectField errors={errors} field={field} control={control} saveChanges={saveChanges} />;
      case 'checkbox':
        return <CheckboxField errors={errors} field={field} control={control} saveChanges={saveChanges} />;
      default:
        return null;
    }
  };

  const currentPage = wizardModel.pages[currentStep];
  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        {wizardModel.name}
      </Typography>
      <Stepper activeStep={currentStep} className={classes.stepper}>
        {wizardModel.pages.map((page) => (
          <Step key={page.name}>
            <StepLabel>{page.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(submitForm)}>
        <Box className={classes.container}>
          <Grid container spacing={2} className={classes.grid}>
            {currentPage.fields != null && currentPage.fields.map((field) => (
              <Grid item xs={6} key={field.name}>
                {getFieldType(field)}
              </Grid>
            ))}
            {currentPage.customComponent != null && currentPage.customComponent()}
          </Grid>
        </Box>
        <div className={classes.buttons}>
          {currentStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>
          )}
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
