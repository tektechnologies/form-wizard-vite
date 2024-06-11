import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    visitForeignCountry: false,
    visitReason: "",
    toolsRequired: false,
    toolReason: "",
    visitDate: "",
    startTime: "",
    endTime: "",
    userLocation: "",
    productcategory: "",
    animalWelfareInput: false,
    bioSecurityBreifing: false,
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const handleNext = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFinalSubmit = (data) => {
    console.log("Final Submit: ", data);
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setStep(1);
  };

  return (
    <FormContext.Provider
      value={{ step, formData, handleNext, handleBack, handleFinalSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
