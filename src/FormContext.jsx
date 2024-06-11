import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {

  const initialSalesFormData = {
    firstName: '',
    lastName: '',
    companyName: '',
    emailAddress: '',
    phoneNumber: '',
  }
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
  const [salesFormData, setSalesFormData] = useState(initialSalesFormData);

  const handleSalesDataInput = (name, value) => {
    setSalesFormData((prevState) => ({
      ...prevState, 
      [name]: value,
    }));
    // console.log('update sale data in state', {[name] : value});
  }
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
    setSalesFormData(initialSalesFormData);
    setStep(1);
  };

  return (
    <FormContext.Provider
      value={{ step, formData, salesFormData, handleSalesDataInput, handleNext, handleBack, handleFinalSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
