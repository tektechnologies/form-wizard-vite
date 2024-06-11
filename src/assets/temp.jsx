import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import barns from "./barns.json";
import { FormContext } from "../FormContext";
import axios from 'axios';

const Form1 = () => {
  const { handleNext, formData, salesFormData, handleSalesDataInput } = useContext(FormContext);
  const { register, handleSubmit, control, formState: { errors }, watch, clearErrors } = useForm({ defaultValues: formData });
  const istoolsRequired = watch("toolsRequired", formData.toolsRequired);

  const handleToolsRequiredChange = (event) => {
    if (!event.target.checked) {
      clearErrors("toolReason");
    }
  };

  const isSalesFormDataComplete = (data) => {
    return Object.values(data).every(value => value !== '');
  };

  const onSubmit = async (data) => {
    if (isSalesFormDataComplete(salesFormData)) {
      handleNext(data);

      try {
        const response = await axios.post('http://localhost:3001/save-sales-data', salesFormData);
        console.log(response.data);
      } catch (error) {
        console.error('Error saving sales data', error);
      }
    } else {
      console.log('Sales form data is incomplete');
      // Optionally, you can set an error state here to display a message to the user
    }
  };

  return (
    <>
      <div className="lay-container">
        <div className="form-container">
          <h2>Personal Details</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="label-input-group three-col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "User name is required.",
                  onChange: (e) => handleSalesDataInput(e.target.name, e.target.value),
                })}
              />
              <p>{errors.firstName?.message}</p>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: "Last name is required.",
                  onChange: (e) => handleSalesDataInput(e.target.name, e.target.value),
                })}
              />
              <p>{errors.lastName?.message}</p>
            </div>
            <div className="label-input-group three-col">
              <label htmlFor="companyName">Company</label>
              <input
                type="text"
                id="companyName"
                {...register("companyName", {
                  required: "Company name is required.",
                  onChange: (e) => handleSalesDataInput(e.target.name, e.target.value),
                })}
              />
              <p>{errors.companyName?.message}</p>
            </div>
            <div className="label-input-group">
              <label htmlFor="emailAddress">Email</label>
              <input
                type="text"
                id="emailAddress"
                {...register("emailAddress", {
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Email",
                  },
                  required: "Email is required.",
                  onChange: (e) => handleSalesDataInput(e.target.name, e.target.value),
                })}
              />
              <p>{errors.emailAddress?.message}</p>
            </div>
            <div className="label-input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^\d{3}-?\d{3}-?\d{4}$/,
                    message: "Invalid phone number format",
                  },
                  onChange: (e) => handleSalesDataInput(e.target.name, e.target.value),
                })}
              />
              <p>{errors.phoneNumber?.message}</p>
            </div>
            <button className="next-button">Next</button>
          </form>
        </div>
      </div>
      <DevTool control={control} />
    </>
  );
};

export default Form1;
