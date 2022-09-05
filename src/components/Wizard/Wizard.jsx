import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@material-ui/core";
import { useForm } from 'react-hook-form';
import useStyles from "./styles";
import { CheckboxField, TextInputField, SelectField, PhoneInputField, DatePickerField, NumberInputField } from '../FormFields';

export default function Wizard(props) {
  const classes = useStyles();
  const { data, onSubmit, wizardModel } = props;
  const { formState: { errors }, register, handleSubmit, control } = useForm({
    mode: 'all',
    defaultValues: data,
  });

  const [formData, setFormData] = useState(data);
  console.log(formData);
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === wizardModel.pages.length - 1;

  const submitForm = (values) => {
    if (isLastStep) {
      onSubmit(values);
    } else {
      setFormData(values);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const getFieldType = (field) => {
    switch(field.fieldType) {
      case 'text':
        return <TextInputField errors={errors} register={register} field={field} />;
      case 'phone':
        return <PhoneInputField errors={errors} register={register} field={field} />;
      case 'number':
        return <NumberInputField errors={errors} register={register} field={field} />;
      case 'dropdown':
        return <SelectField errors={errors} field={field} control={control} />
      case 'checkbox':
        return <CheckboxField errors={errors} field={field} control={control} />
      case 'date':
        return <DatePickerField errors={errors} field={field} control={control} register={register} />
      default:
        return null;
    }
  };

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
        {wizardModel.pages[currentStep].fields.map((field) => (
          <React.Fragment key={field.name}>
            {getFieldType(field)}
          </React.Fragment>
        ))}
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
