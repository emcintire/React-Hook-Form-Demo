import React from "react";
import Wizard from '../Wizard/Wizard';

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
        name: 'age',
        label: 'Age',
        required: true,
        fieldType: 'number',
        maxValue: 200,  // default = none
        minValue: 0,    // default = none
        allowDecimals: false, // default = false
      },
      {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        required: true,
        fieldType: 'date',
        errorMessage: "I pity the fool who doesn't enter his birthday" // default = "[name] is required"
      },
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
        label: 'Use the same address for the Mailing Address',
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
  }]
};

export default function CheckoutPage() {
  const data = {
      firstName: 'Nicolas',
      lastName: 'Cage',
      dateOfBirth: '',
      phone: '',
      address: '',
      city: 'Boston',
      state: '',
      sameMailingAddress: false,
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Wizard data={data} onSubmit={onSubmit} wizardModel={wizardModel} />
  );
}
