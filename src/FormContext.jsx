// FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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
  });

  const handleNext = (data) => {
    // console.log('in the NEXT render check!TTTTTTTTTTTTT');
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log('handle Final Submit:FINAL', data);
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  return (
    <FormContext.Provider value={{ step, formData, handleNext, handleBack, handleFinalSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
