import React from "react";
import Wizard from '../Wizard/Wizard';
import CustomComponent from './CustomComponent';

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

const wizardModel = {
  name: 'Checkout',
  pages: [{
    name: 'Personal Info',
    fields: [
      {
        name: 'firstName',
        label: 'First name',
        required: true,
        fieldType: 'text'
      },
      {
        name: 'lastName',
        label: 'Last name',
        required: true,
        fieldType: 'text'
      },
      {
        name: 'phone',
        label: 'Phone',
        required: true,
        fieldType: 'phone',
      },
      {
        name: 'email',
        label: 'Email',
        required: true,
        fieldType: 'email',
      },
      {
        name: 'age',
        label: 'Age',
        required: true,
        fieldType: 'number',
        maxValue: 200,
        minValue: 0,
        allowDecimals: false,
      },
      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        required: true,
        fieldType: 'date',
        errorMessage: "Enter a valid date",
      },
      {
        name: 'gender',
        label: 'Gender',
        required: true,
        fieldType: 'radio',
        options: [
          {
            label: 'Female',
            value: 1
          },
          {
            label: 'Male',
            value: 2
          },
          {
            label: 'Other',
            value: 3
          },
        ]
      }
    ]
  },
  {
    name: 'Shipping address',
    fields: [
      {
        name: 'address',
        label: 'Address',
        required: true,
        fieldType: 'text'
      },
      {
        name: 'city',
        label: 'City',
        required: true,
        fieldType: 'text'
      },
      {
        name: 'sameMailingAddress',
        label: 'Same for Mailing Address',
        required: false,
        fieldType: 'checkbox'
      },
      {
        name: 'state',
        label: 'State',
        required: true,
        fieldType: 'dropdown',
        options: [
          {
            label: 'New York',
            value: 1
          },
          {
            label: 'California',
            value: 2
          },
          {
            label: 'Montana',
            value: 3
          },
        ]
      }
    ]
  },
  {
    name: 'Review Order',
    customComponent: () => <CustomComponent />,
  }]
};

export default function CheckoutPage() {
  const data = {
      address: '',
      city: 'Boston',
      dateOfBirth: '',
      email: '',
      firstName: 'Nicolas',
      gender: '',
      lastName: 'Cage',
      phone: '',
      sameMailingAddress: false,
      state: '',
  };

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  return (
    <Wizard data={data} onSubmit={handleSubmit} wizardModel={wizardModel} />
  );
}
