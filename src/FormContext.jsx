// FormContext.js
import React, { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
 const initialFormData = {
  firstName: '',
    lastName: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
    visitForeignCountry: false,
    visitReason: '',
    toolsRequired: false,
    toolReason: '',
    visitDate: '',
    startTime: '',
    endTime: '',
    userLocation: '',
    productcategory: '',
    animalWelfareInput: false,
    bioSecurityBreifing: false,

 }
  const [formData, setFormData] = useState(initialFormData);
 

  const handleNext = (data) => {
    console.log('in the NEXT render check!TTTTTTTTTTTTT', data);
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log('handle Final Submit:FINAL', data);
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    resetForm();
  };

  const resetForm = () => {
    console.log('made it to the reset form.')
    setFormData(initialFormData);
    setStep(1);
  }
 


  return (
    <FormContext.Provider value={{ step, formData, handleNext, handleBack, handleFinalSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
